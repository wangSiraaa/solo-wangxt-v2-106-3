/**
 * 周期轨迹的异步生成任务：在 buildCycleFrames 的纯几何帧上逐帧补算
 * 局部干涉（Clipper2 实体求交），并按帧号幂等写入 FrameSink。
 *
 * 设计要点（对应验收）：
 *  - 帧号由几何唯一确定 ⇒ 取消/刷新后用同一个 sink 重新跑即可安全续算，
 *    已存在的帧号直接跳过，绝不重复插入；
 *  - 每帧保存：两轮角度、接触点、接触线位置 s、齿对、局部干涉面积与
 *    （仅干涉时的）重叠区域多边形——可定位到具体相位；
 *  - 任务返回 'completed' | 'cancelled'，异常由调用方捕获后落库为 'failed'。
 */

import { transformOutline, type GearGeometry, type Pt } from './gear'
import type { MeshInfo } from './mesh'
import { intersectOutlines } from './clipper'
import { buildCycleFrames, type FrameSpec } from './cycle'

/** 干涉判定阈值（mm²），与 App.vue 现有显示阈值一致 */
export const INTERFERENCE_EPS = 1e-6

export interface TrajectoryFrame extends FrameSpec {
  /** 所属轨迹（写库时的复合键之一） */
  trajId: string
  /** 局部干涉重叠面积 mm² */
  interferenceArea: number
  interferes: boolean
  /** 重叠区域多边形（世界坐标）；仅干涉帧非空，控制存储体积 */
  regions: Pt[][]
}

/** 帧的持久化出口：浏览器为 IndexedDB，测试为内存实现 */
export interface FrameSink {
  /** 幂等写入一批帧（同一 i 重复写必须覆盖而非新增） */
  putMany(frames: TrajectoryFrame[]): Promise<void>
  /** 已存在的帧号（断点续算时跳过） */
  existingIndices(): Promise<Set<number>>
}

/** 测试/离线用的内存 sink，并记录写入次数以核对"不重复插入" */
export class MemoryFrameSink implements FrameSink {
  readonly frames = new Map<number, TrajectoryFrame>()
  putCount = 0
  async putMany(frames: TrajectoryFrame[]): Promise<void> {
    for (const f of frames) {
      this.frames.set(f.i, f)
      this.putCount++
    }
  }
  async existingIndices(): Promise<Set<number>> {
    return new Set(this.frames.keys())
  }
}

export interface TrajectoryJobOptions {
  g1: GearGeometry
  g2: GearGeometry
  mesh: MeshInfo
  trajId: string
  framesPerEngagement: number
  sink: FrameSink
  /** 返回 true 时在下一个分块边界安全停止（已写帧保留，可续算） */
  shouldCancel?: () => boolean
  onProgress?: (done: number, total: number) => void
  /** 每批处理的帧数（一批一次 sink 写入） */
  chunkSize?: number
  /** 每批之间让出事件循环（浏览器防卡死） */
  yieldControl?: () => Promise<void>
  /** 置 false 可跳过 Clipper 求交（纯运动学场景/测试提速） */
  withInterference?: boolean
}

export async function runTrajectoryJob(o: TrajectoryJobOptions): Promise<'completed' | 'cancelled'> {
  const specs = buildCycleFrames(o.g1, o.g2, o.mesh, o.framesPerEngagement)
  const total = specs.length
  const existing = await o.sink.existingIndices()
  const todo = specs.filter((sp) => !existing.has(sp.i))
  let done = total - todo.length
  const chunk = Math.max(1, o.chunkSize ?? 16)
  const withInterference = o.withInterference !== false
  o.onProgress?.(done, total)

  for (let off = 0; off < todo.length; off += chunk) {
    if (o.shouldCancel?.()) return 'cancelled'
    const batch: TrajectoryFrame[] = []
    for (const sp of todo.slice(off, off + chunk)) {
      let area = 0
      let regions: Pt[][] = []
      if (withInterference) {
        const o1 = [transformOutline(o.g1.outline, 0, 0, sp.phi1)]
        const o2 = [transformOutline(o.g2.outline, o.mesh.a, 0, sp.phi2)]
        const res = await intersectOutlines(o1, o2)
        area = res.area
        if (res.intersects) regions = res.regions
      }
      batch.push({
        ...sp,
        trajId: o.trajId,
        interferenceArea: area,
        interferes: area > INTERFERENCE_EPS,
        regions
      })
    }
    await o.sink.putMany(batch)
    done += batch.length
    o.onProgress?.(done, total)
    if (o.yieldControl) await o.yieldControl()
  }
  return 'completed'
}
