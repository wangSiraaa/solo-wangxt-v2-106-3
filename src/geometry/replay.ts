/**
 * 啮合周期回放（Mesh-Cycle Replay）的严格几何核心。
 *
 * 与界面上的实时动画不同，回放轨迹必须来自【严格的啮合相位关系】，而不是简单的转速比：
 *
 *  1. 真正的重复周期不是某一轮转一圈，而是“啮合线滚动距离”经过
 *       Q = N·p_b，  N = lcm(z1, z2) = z1·z2/gcd(z1,z2)
 *     之后，同一对齿才再次以同一齿面进入同一位置。
 *     20/40 → N=40；互质 19/31 → N=589，周期不会过早重复。
 *
 *  2. 用全局展开量 q（沿啮合线从 q=0 的节点接触起算，mm）参数化整条轨迹。
 *     某一帧 q 下：
 *       两轮【本体转角】（连续、不折叠）
 *         φ1(q) = φ1⁰(0) − q/rb1，  φ2(q) = φ2⁰(0) + q/rb2
 *     其中 φi⁰(s) 是 gearAnglesAt 给出的“基础齿对 (0,0)”在接触点参数 s 处的
 *     严格相位（见 mesh.ts 推导：dφ1/ds=+1/rb1，dφ2/ds=−1/rb2）。
 *
 *  3. 同时在接触的齿对编号（实际啮合段 s∈[sE,sX]，gα = sX−sE）：
 *       齿对 j 的接触参数   s_j = j·p_b − q
 *       在接触 ⇔ sE ≤ s_j ≤ sX（εα>1 时一帧可有若干对同时接触）
 *       该对 =（轮1 第 k1 齿, 轮2 第 k2 齿），其中
 *         k1 = j mod z1，  k2 = −j mod z2
 *     主齿对取 |s_j| 最小者（最靠近节点），保证逐帧切换时齿对序号只增 1、连续。
 *
 *  4. 每帧再用 Clipper 对【完整实体轮廓】做一次布尔求交，得到该严格相位下的
 *     局部干涉结果（面积 + 定位区域）——而不是只检查一个接触位置。
 *
 * 本文件不依赖浏览器 API（无 IndexedDB / WASM 单例），Clipper 求交通过注入的
 * Intersector 完成，因此可被 node 端验收脚本直接调用。
 */
import type { GearGeometry, Pt } from './gear'
import { transformOutline } from './gear'
import type { MeshInfo } from './mesh'
import { gearAnglesAt, contactPoint } from './mesh'

export type TrajectoryStatus = 'running' | 'cancelled' | 'failed' | 'completed' | 'expired'

/** 一帧中正在接触的某一对齿 */
export interface ActivePair {
  /** 全局齿对编号 j（基础齿对 (0,0) 在 q=0、s=0 接触） */
  pairId: number
  /** 轮1 齿序号（0…z1−1，0 号齿中心在 +y） */
  tooth1: number
  /** 轮2 齿序号（0…z2−1） */
  tooth2: number
  /** 该对当前接触点沿啮合线的参数 s（mm），s<0 啮入端、s=0 节点、s>0 啮出端 */
  s: number
  /** 接触点世界坐标 */
  point: Pt
}

/** 回放轨迹的一帧（按全局相位 q 严格排序） */
export interface ReplayFrame {
  /** 帧序号 0…frameCount（末帧为重复位置） */
  index: number
  /** 全局展开量 q（mm，连续不折叠） */
  q: number
  /** 轮1 本体转角（连续展开值，末帧相对首帧相差 −N·2π/z1） */
  phi1: number
  /** 轮2 本体转角（连续展开值） */
  phi2: number
  /** 归一到 [0,2π) 的转角（视图实际旋转量；首帧与末帧一致） */
  phi1Mod: number
  phi2Mod: number
  /** 主齿对（最靠近节点的在接触对）；εα<1 且恰好无接触时为 null */
  primary: ActivePair | null
  /** 该帧同时在接触的全部齿对（按 s 排序） */
  activePairs: ActivePair[]
  /** 啮合线位置（= primary?.s；无接触帧给出最近齿对的虚拟 s） */
  contactS: number
  /** 接触点世界坐标（主齿对） */
  contactPoint: Pt | null
  /** 局部干涉：Clipper 求交重叠面积 mm² */
  interferenceArea: number
  /** 是否存在实体干涉 */
  interferes: boolean
  /** 干涉区域（世界坐标外环，已抽稀；无干涉为空） */
  regions: Pt[][]
}

/** 生成参数（可复算轨迹的全部输入） */
export interface ReplayParams {
  stepsPerPitch: number
  includeRegions: boolean
}

/** 案例参数指纹的输入（与 store / App 的参数模型解耦） */
export interface ReplayCaseSignature {
  z1: number
  z2: number
  module: number
  alphaDeg: number
  faceWidth: number
  /** 实际中心距（mm） */
  centerDistance: number
}

export interface ReplayMeta {
  trajId: string
  caseId: string | null
  createdAt: number
  updatedAt: number
  params: ReplayParams
  signature: ReplayCaseSignature
  paramFingerprint: string
  outlineFingerprint: string
  /** 真正的重复周期（齿对步数） N = lcm(z1,z2) */
  periodPairs: number
  /** 周期内总转角（轮1，弧度，连续值差） */
  periodPhi1: number
  periodPhi2: number
  /** 基节 pb（mm） */
  basePitch: number
  /** 有效接触区间（mm，世界啮合线参数 s） */
  sEnter: number
  sExit: number
  pathOfContact: number
  contactRatio: number
  /** 一“基节”对应的帧采样数；总采样帧 frameCount = periodPairs*stepsPerPitch + 1 */
  stepsPerPitch: number
  frameCount: number
  /** 已完成帧数（0…frameCount-1，含末帧则为 frameCount） */
  framesDone: number
  status: TrajectoryStatus
  error?: string
  /** 干涉帧数（完成/续算时统计） */
  interferenceFrames: number
}

// ---------------------------------------------------------------------------
// 指纹
// ---------------------------------------------------------------------------

/** 32 位 FNV-1a（对规范 JSON 字符串），纯函数、浏览器/node 一致 */
export function fnv1a(input: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(16).padStart(8, '0')
}

/** 案例参数指纹：中心距参与（同一对齿、不同 a 是不同啮合） */
export function computeParamFingerprint(sig: ReplayCaseSignature): string {
  const canon = JSON.stringify([
    'spur-gear-lab/case/v1',
    sig.z1,
    sig.z2,
    round(sig.module, 9),
    round(sig.alphaDeg, 9),
    round(sig.faceWidth, 9),
    round(sig.centerDistance, 9)
  ])
  return fnv1a(canon)
}

/**
 * 轮廓指纹：只取稳定的几何量与按弧长等距抽样的点，
 * 避免把上百个多边形点全部塞进元数据。轮廓若变（换齿形/代码），指纹必变。
 */
export function computeOutlineFingerprint(g1: GearGeometry, g2: GearGeometry): string {
  const sample = (g: GearGeometry) => {
    const n = g.outline.length
    const take = 48
    const pts: string[] = []
    for (let i = 0; i < take; i++) {
      const p = g.outline[Math.floor((i * n) / take) % n]
      pts.push(`${round(p.x, 5)},${round(p.y, 5)}`)
    }
    return [
      g.input.z,
      round(g.pitchR, 8),
      round(g.baseR, 8),
      round(g.addendumR, 8),
      round(g.dedendumR, 8),
      g.outline.length,
      pts.join('|')
    ]
  }
  return fnv1a(JSON.stringify(['spur-gear-lab/outline/v1', sample(g1), sample(g2)]))
}

function round(v: number, digits: number) {
  const p = 10 ** digits
  return Math.round(v * p) / p
}

// ---------------------------------------------------------------------------
// 周期与相位
// ---------------------------------------------------------------------------

export function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a))
  b = Math.abs(Math.round(b))
  while (b) [a, b] = [b, a % b]
  return a
}

export function lcm(a: number, b: number): number {
  return Math.abs(Math.round(a) * Math.round(b)) / gcd(a, b)
}

function wrap01(v: number, mod: number): number {
  const r = v % mod
  return r < 0 ? r + mod : r
}

function modIndex(v: number, z: number): number {
  return Math.round(wrap01(v, z)) % z
}

/** 计算有效接触区间 sE/sX（相对节点，沿 n=(sinα′,cosα′)） */
export function actionLineBounds(mesh: MeshInfo): { sEnter: number; sExit: number } {
  const nx = Math.sin(mesh.alphaPrime),
    ny = Math.cos(mesh.alphaPrime)
  const sOf = (p: Pt) =>
    (p.x - mesh.pitchPoint.x) * nx + (p.y - mesh.pitchPoint.y) * ny
  return { sEnter: sOf(mesh.actionLine.p0), sExit: sOf(mesh.actionLine.p1) }
}

// ---------------------------------------------------------------------------
// 轨迹元数据与逐帧几何（不做 Clipper 求交）
// ---------------------------------------------------------------------------

export interface BuildMetaInput {
  trajId: string
  caseId: string | null
  g1: GearGeometry
  g2: GearGeometry
  mesh: MeshInfo
  params: ReplayParams
  signature: ReplayCaseSignature
  now?: number
}

export function buildReplayMeta(input: BuildMetaInput): ReplayMeta {
  const { g1, g2, mesh, params } = input
  const N = lcm(g1.input.z, g2.input.z)
  const { sEnter, sExit } = actionLineBounds(mesh)
  const pb = g1.basePitch
  const steps = Math.max(2, Math.round(params.stepsPerPitch))
  const frameCount = N * steps + 1
  const t = input.now ?? Date.now()
  return {
    trajId: input.trajId,
    caseId: input.caseId,
    createdAt: t,
    updatedAt: t,
    params: { ...params },
    signature: { ...input.signature },
    paramFingerprint: computeParamFingerprint(input.signature),
    outlineFingerprint: computeOutlineFingerprint(g1, g2),
    periodPairs: N,
    periodPhi1: (-N * 2 * Math.PI) / g1.input.z,
    periodPhi2: (N * 2 * Math.PI) / g2.input.z,
    basePitch: pb,
    sEnter,
    sExit,
    pathOfContact: mesh.pathOfContact,
    contactRatio: mesh.contactRatio,
    stepsPerPitch: steps,
    frameCount,
    framesDone: 0,
    status: 'running',
    interferenceFrames: 0
  }
}

/** 基础齿对 (0,0) 在 q=0、s=0（节点接触）时两轮的本体转角常量 */
export function baseAngles(
  g1: GearGeometry,
  g2: GearGeometry,
  mesh: MeshInfo
): { phi10: number; phi20: number } {
  const { phi1, phi2 } = gearAnglesAt(mesh, g1, g2, 0)
  return { phi10: phi1, phi20: phi2 }
}

/** 给定全局展开量 q，构造该帧的纯几何信息（不含干涉结果） */
export function buildFrameGeometry(
  index: number,
  q: number,
  g1: GearGeometry,
  g2: GearGeometry,
  mesh: MeshInfo,
  meta: ReplayMeta
): Omit<ReplayFrame, 'interferenceArea' | 'interferes' | 'regions'> {
  const { phi10, phi20 } = baseAngles(g1, g2, mesh)
  // 严格相位：rb1·Δφ1 = −rb2·Δφ2（同一条渐开线接触，非仅转速比）
  const phi1 = phi10 - q / g1.baseR
  const phi2 = phi20 + q / g2.baseR

  const pb = meta.basePitch
  const { sEnter, sExit } = meta
  // 候选齿对 j：覆盖 [sE,sX] 的整数
  const jLo = Math.floor((q + sEnter) / pb) - 1
  const jHi = Math.ceil((q + sExit) / pb) + 1
  const activePairs: ActivePair[] = []
  for (let j = jLo; j <= jHi; j++) {
    const s = j * pb - q
    if (s < sEnter - 1e-9 || s > sExit + 1e-9) continue
    activePairs.push({
      pairId: j,
      tooth1: modIndex(j, g1.input.z),
      tooth2: modIndex(-j, g2.input.z),
      s,
      point: contactPoint(mesh, s)
    })
  }
  activePairs.sort((a, b) => a.s - b.s)

  let primary: ActivePair | null = null
  for (const p of activePairs) {
    if (!primary || Math.abs(p.s) < Math.abs(primary.s)) primary = p
  }
  // 无接触帧（εα<1 的空程）：仍给出最近齿对的虚拟 s，保持索引可追踪
  if (!primary) {
    const jNear = Math.round(q / pb)
    primary = {
      pairId: jNear,
      tooth1: modIndex(jNear, g1.input.z),
      tooth2: modIndex(-jNear, g2.input.z),
      s: jNear * pb - q,
      point: contactPoint(mesh, jNear * pb - q)
    }
  }

  return {
    index,
    q,
    phi1,
    phi2,
    phi1Mod: wrap01(phi1, 2 * Math.PI),
    phi2Mod: wrap01(phi2, 2 * Math.PI),
    primary,
    activePairs,
    contactS: primary.s,
    contactPoint: primary.point
  }
}

// ---------------------------------------------------------------------------
// 干涉求交注入
// ---------------------------------------------------------------------------

export interface IntersectionInput {
  regions: Pt[][]
  area: number
  intersects: boolean
}

export type Intersector = (
  o1: Pt[][],
  o2: Pt[][]
) => Promise<IntersectionInput>

/** 区域抽稀（持久化与绘制都不需要 Clipper 的全部顶点） */
export function simplifyRegions(regions: Pt[][], maxPerRing = 64): Pt[][] {
  return regions.map((ring) => {
    if (ring.length <= maxPerRing) return ring
    const step = ring.length / maxPerRing
    const out: Pt[] = []
    for (let i = 0; i < maxPerRing; i++) out.push(ring[Math.floor(i * step)])
    return out
  })
}

// ---------------------------------------------------------------------------
// 生成器：运行 / 取消 / 失败 / 完成 / 过期
// ---------------------------------------------------------------------------

export type RunnerEvent =
  | { type: 'progress'; framesDone: number }
  | { type: 'completed' }
  | { type: 'cancelled' }
  | { type: 'failed'; error: string }
  | { type: 'expired' }

export interface RunnerHandle {
  readonly meta: ReplayMeta
    /** 已确定的帧（按 index 写入；槽位预分配，续算不重复插入） */
  readonly frames: (ReplayFrame | undefined)[]
  cancel(): void
  /** 使运行中的生成整体作废（改参数/换案例）；已排队结果不再写入 */
  expire(): void
  /** 帧落定（每帧一次，含干涉结果） */
  onFrame(cb: (index: number, frame: ReplayFrame) => void): void
  onEvent(cb: (e: RunnerEvent) => void): void
  readonly done: Promise<TrajectoryStatus>
}

export interface RunnerOptions {
  g1: GearGeometry
  g2: GearGeometry
  mesh: MeshInfo
  meta: ReplayMeta
  intersector: Intersector
  /** 每批处理帧数（让出事件循环、支持取消/刷新） */
  chunkSize?: number
  /** 每批之间让出（ms） */
  yieldMs?: number
  /** 已有的已完成帧（续算/刷新恢复）；按 index 对齐，缺失槽位重算 */
  existingFrames?: ReplayFrame[]
  /** 干涉面积判定阈值 mm² */
  areaEps?: number
}

/**
 * 启动（或恢复）一条轨迹的计算。
 *
 * 关键的安全语义（对应验收“取消或刷新后可安全继续且不会重复插入帧”）：
 *  - frames 为长度 frameCount 的预分配数组，帧【按固定 index 覆盖写入】，
 *    因此重复恢复同一槽位不会产生重复帧；
 *  - existingFrames 只按其 index 回收，且 q/转角与几何严格一致时才接受；
 *  - 每帧之间检查取消信号；cancel() 后已落定帧保留，状态为 cancelled；
 *  - dispose token（App 在改参数/换案例时触发）使运行中的生成整体作废，
 *    已排队回调不再写入，状态 expired。
 */
export function startReplayRunner(opts: RunnerOptions): RunnerHandle {
  const { g1, g2, mesh, meta, intersector } = opts
  const chunkSize = opts.chunkSize ?? 24
  const yieldMs = opts.yieldMs ?? 0
  const areaEps = opts.areaEps ?? 1e-8

  const frames: (ReplayFrame | undefined)[] = new Array(meta.frameCount)
  if (opts.existingFrames) {
    for (const f of opts.existingFrames) {
      if (f && f.index >= 0 && f.index < meta.frameCount) frames[f.index] = f
    }
  }

  let cancelled = false
  let expired = false
  let finished = false
  const frameCbs = new Set<(i: number, f: ReplayFrame) => void>()
  const eventCbs = new Set<(e: RunnerEvent) => void>()
  let resolveDone!: (s: TrajectoryStatus) => void
  const done = new Promise<TrajectoryStatus>((r) => (resolveDone = r))

  const emit = (e: RunnerEvent) => {
    for (const cb of eventCbs) cb(e)
  }

  const sleep = (ms: number) =>
    new Promise<void>((resolve) => setTimeout(resolve, ms))

  const finish = (status: TrajectoryStatus, event: RunnerEvent) => {
    if (finished) return
    finished = true
    meta.status = status
    meta.updatedAt = Date.now()
    meta.framesDone = countDone()
    meta.interferenceFrames = countInterference()
    emit(event)
    resolveDone(status)
  }

  const countDone = () => {
    let n = 0
    for (const f of frames) if (f) n++
    return n
  }
  const countInterference = () => {
    let n = 0
    for (const f of frames) if (f?.interferes) n++
    return n
  }

  async function run() {
    try {
      let sinceProgress = 0
      for (let i = 0; i < meta.frameCount; i++) {
        if (expired) {
          finish('expired', { type: 'expired' })
          return
        }
        if (cancelled) {
          finish('cancelled', { type: 'cancelled' })
          return
        }
        if (frames[i]) continue // 恢复时跳过已落定槽位（绝不重复插入）

        const q = (i * meta.periodPairs * meta.basePitch) / (meta.frameCount - 1)
        const geom = buildFrameGeometry(i, q, g1, g2, mesh, meta)
        const o1 = [transformOutline(g1.outline, 0, 0, geom.phi1)]
        const o2 = [transformOutline(g2.outline, mesh.a, 0, geom.phi2)]

        let res: IntersectionInput
        try {
          res = await intersector(o1, o2)
        } catch (e) {
          if (expired) {
            finish('expired', { type: 'expired' })
            return
          }
          if (cancelled) {
            finish('cancelled', { type: 'cancelled' })
            return
          }
          throw e
        }
        if (expired) {
          finish('expired', { type: 'expired' })
          return
        }
        if (cancelled) {
          finish('cancelled', { type: 'cancelled' })
          return
        }

        const frame: ReplayFrame = {
          ...geom,
          interferenceArea: res.area,
          interferes: res.intersects || res.area > areaEps,
          regions: meta.params.includeRegions ? simplifyRegions(res.regions) : []
        }
        frames[i] = frame
        for (const cb of frameCbs) cb(i, frame)

        sinceProgress++
        if (sinceProgress >= chunkSize) {
          sinceProgress = 0
          meta.framesDone = countDone()
          meta.interferenceFrames = countInterference()
          emit({ type: 'progress', framesDone: meta.framesDone })
          await sleep(yieldMs)
        }
      }
      meta.framesDone = countDone()
      meta.interferenceFrames = countInterference()
      finish('completed', { type: 'completed' })
    } catch (e) {
      meta.error = (e as Error)?.message || String(e)
      finish('failed', { type: 'failed', error: meta.error })
    }
  }

  void run()

  return {
    meta,
    frames,
    cancel() {
      cancelled = true
    },
    expire() {
      expired = true
      cancelled = true
    },
    onFrame(cb) {
      frameCbs.add(cb)
    },
    onEvent(cb) {
      eventCbs.add(cb)
    },
    get done() {
      return done
    }
  }
}

/** 判断轨迹是否为某案例当前参数的有效结果（参数指纹一致）；轮廓指纹仅作记录/警告 */
export function isTrajectoryCurrent(meta: ReplayMeta, sig: ReplayCaseSignature): boolean {
  return meta.paramFingerprint === computeParamFingerprint(sig) && meta.status === 'completed'
}
