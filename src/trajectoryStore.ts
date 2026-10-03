/**
 * 周期轨迹的持久化与有效性判定（IndexedDB）。
 *
 * 绑定关系：
 *  - 每条轨迹记录 caseId（所属案例）与 fingerprint（案例参数指纹 + 轮廓指纹）；
 *  - 指纹由 (z1, z2, m, α, 齿宽, 中心距) 与两轮轮廓逐点哈希联合决定，
 *    案例参数或轮廓任何变化都会改变指纹；
 *  - 展示状态 = 记录自身状态（running/cancelled/failed/completed）与指纹比对
 *    的派生结果：指纹与当前案例不一致 ⇒ 'expired'（已过期/历史），
 *    仍可回放查看，但绝不得标注为当前参数的有效结果；
 *  - 案例导出 JSON 不含轨迹，导入的案例在库中没有轨迹记录 ⇒ 只能显示
 *    "未生成轨迹"，不可能被伪造为已验证。
 */

import { getDb, STORE_TRAJ, STORE_FRAMES } from './store'
import type { Pt } from './geometry/gear'
import type { MeshCycle } from './geometry/cycle'
import type { TrajectoryFrame, FrameSink } from './geometry/trajgen'

export type TrajStatus = 'running' | 'cancelled' | 'failed' | 'completed'
export type EffectiveStatus = TrajStatus | 'expired'

/** 影响轨迹有效性的案例参数快照 */
export interface TrajectoryParams {
  z1: number
  z2: number
  module: number
  alphaDeg: number
  faceWidth: number
  /** null = 标准中心距 */
  centerDistance: number | null
}

export interface TrajectoryRecord {
  id: string
  caseId: string
  name: string
  /** caseFingerprint(params, outlines)：绑定案例参数与轮廓 */
  fingerprint: string
  params: TrajectoryParams
  cycle: MeshCycle
  sEnter: number
  sExit: number
  framesPerEngagement: number
  /** 应生成的总帧数 */
  frameCount: number
  /** 已落库帧数（冗余字段，便于列表展示；权威值以帧库计数为准） */
  framesDone: number
  status: TrajStatus
  error?: string
  createdAt: number
  updatedAt: number
}

// ---------------------------------------------------------------------------
// 指纹
// ---------------------------------------------------------------------------

function fnv1a(str: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

export function paramsFingerprint(p: TrajectoryParams): string {
  return fnv1a(JSON.stringify(p))
}

/** 轮廓指纹：点数 + 逐点坐标（量化到 1e-6 mm）的 FNV-1a */
export function outlineFingerprint(o1: Pt[], o2: Pt[]): string {
  let h = 0x811c9dc5
  const mix = (n: number) => {
    h ^= n | 0
    h = Math.imul(h, 0x01000193)
  }
  for (const o of [o1, o2]) {
    mix(o.length)
    for (const pt of o) {
      mix(Math.round(pt.x * 1e6))
      mix(Math.round(pt.y * 1e6))
    }
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

export function caseFingerprint(p: TrajectoryParams, o1: Pt[], o2: Pt[]): string {
  return `${paramsFingerprint(p)}-${outlineFingerprint(o1, o2)}`
}

/** 派生展示状态：指纹与当前案例不符 ⇒ 已过期（历史），不得标为当前有效 */
export function effectiveStatus(rec: TrajectoryRecord, currentFingerprint: string | null): EffectiveStatus {
  if (currentFingerprint && rec.fingerprint !== currentFingerprint) return 'expired'
  return rec.status
}

// ---------------------------------------------------------------------------
// 轨迹记录 CRUD
// ---------------------------------------------------------------------------

function reqToPromise<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function trajStore(mode: IDBTransactionMode): Promise<IDBObjectStore> {
  const db = await getDb()
  return db.transaction(STORE_TRAJ, mode).objectStore(STORE_TRAJ)
}

export function newTrajectoryId(): string {
  return `traj-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

export async function saveTrajectory(rec: TrajectoryRecord): Promise<void> {
  const store = await trajStore('readwrite')
  await reqToPromise(store.put({ ...rec, updatedAt: Date.now() }))
}

export async function getTrajectory(id: string): Promise<TrajectoryRecord | undefined> {
  const store = await trajStore('readonly')
  return reqToPromise(store.get(id) as IDBRequest<TrajectoryRecord | undefined>)
}

export async function listTrajectoriesForCase(caseId: string): Promise<TrajectoryRecord[]> {
  const store = await trajStore('readonly')
  const all = await reqToPromise(store.index('caseId').getAll(IDBKeyRange.only(caseId)) as IDBRequest<TrajectoryRecord[]>)
  return [...all].sort((a, b) => b.updatedAt - a.updatedAt)
}

export async function listAllTrajectories(): Promise<TrajectoryRecord[]> {
  const store = await trajStore('readonly')
  return reqToPromise(store.getAll() as IDBRequest<TrajectoryRecord[]>)
}

/** 删除轨迹记录及其全部帧（单事务，保证不同时成功一半） */
export async function deleteTrajectory(id: string): Promise<void> {
  const db = await getDb()
  await new Promise<void>((resolve, reject) => {
    const t = db.transaction([STORE_TRAJ, STORE_FRAMES], 'readwrite')
    t.objectStore(STORE_TRAJ).delete(id)
    const idx = t.objectStore(STORE_FRAMES).index('trajId')
    const cur = idx.openCursor(IDBKeyRange.only(id))
    cur.onsuccess = () => {
      const c = cur.result
      if (c) {
        c.delete()
        c.continue()
      }
    }
    t.oncomplete = () => resolve()
    t.onerror = () => reject(t.error)
  })
}

/** 页面重新载入时：上次会话遗留的 running 记录实为被中断，降级为 cancelled（可续算） */
export async function recoverInterruptedTrajectories(): Promise<number> {
  const all = await listAllTrajectories()
  let n = 0
  for (const rec of all) {
    if (rec.status === 'running') {
      await saveTrajectory({ ...rec, status: 'cancelled' })
      n++
    }
  }
  return n
}

// ---------------------------------------------------------------------------
// 帧存取
// ---------------------------------------------------------------------------

async function frameStore(mode: IDBTransactionMode): Promise<IDBObjectStore> {
  const db = await getDb()
  return db.transaction(STORE_FRAMES, mode).objectStore(STORE_FRAMES)
}

export async function frameIndices(trajId: string): Promise<number[]> {
  const store = await frameStore('readonly')
  const keys = await reqToPromise(store.index('trajId').getAllKeys(IDBKeyRange.only(trajId)))
  return (keys as unknown as [string, number][]).map((k) => k[1])
}

export async function countFrames(trajId: string): Promise<number> {
  const store = await frameStore('readonly')
  return reqToPromise(store.index('trajId').count(IDBKeyRange.only(trajId)) as IDBRequest<number>)
}

/** 按帧号升序取出整条轨迹 */
export async function getFrames(trajId: string): Promise<TrajectoryFrame[]> {
  const store = await frameStore('readonly')
  const all = await reqToPromise(store.index('trajId').getAll(IDBKeyRange.only(trajId)) as IDBRequest<TrajectoryFrame[]>)
  return [...all].sort((a, b) => a.i - b.i)
}

/** IndexedDB 版 FrameSink：put 按复合键 [trajId, i] 覆盖，天然幂等 */
export function idbFrameSink(trajId: string): FrameSink {
  void trajId // 帧对象自身携带 trajId（复合键组成部分）
  return {
    async putMany(frames: TrajectoryFrame[]): Promise<void> {
      if (!frames.length) return
      const db = await getDb()
      await new Promise<void>((resolve, reject) => {
        const t = db.transaction(STORE_FRAMES, 'readwrite')
        const store = t.objectStore(STORE_FRAMES)
        for (const f of frames) store.put(f)
        t.oncomplete = () => resolve()
        t.onerror = () => reject(t.error)
      })
    },
    async existingIndices(): Promise<Set<number>> {
      return new Set(await frameIndices(trajId))
    }
  }
}
