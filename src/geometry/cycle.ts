/**
 * 啮合周期：由齿数推导真正的重复周期与逐帧相位轨迹（纯几何，无 DOM/WASM 依赖）。
 *
 * 重复周期（不是"转速比对了就重复"）：
 *   啮合状态（哪一对齿接触 + 接触相位）要复原，必须两轮都转过整数个齿。
 *   每过一次啮合，两轮各转过一个齿距；第 N 次啮合后轮1 转过 N 个齿距。
 *   同一对齿再次相遇 ⟺ N ≡ 0 (mod z1) 且 N ≡ 0 (mod z2)，即 N = lcm(z1, z2)。
 *   因此一个完整周期内：
 *     啮合次数 pairsPerCycle = lcm(z1, z2)
 *     轮1 转数 rev1 = z2/gcd(z1,z2)，轮2 转数 rev2 = z1/gcd(z1,z2)
 *     轮1 周期转角 periodPhi1 = 2π·rev1
 *   互质（gcd=1）时 pairsPerCycle = z1·z2：每颗齿都要与其余所有齿各啮合一次，
 *   周期不会提前重复——这正是"互质不过早重复"的判定依据。
 *
 * 相位轨迹：第 n 次啮合 = 第 0 次啮合整体平移 n 个齿距（轮1 +n·2π/z1，轮2 −n·2π/z2，
 * 外啮合反向）。每帧的本体角由 gearAnglesAt（严格渐开线相位，见 mesh.ts）给出，
 * 再按 φ1 全局升序排序——重合度 εα>1 时相邻两次啮合在相位上重叠，必须排序后
 * 才是"按相位排列"的真实接触序列。
 */

import type { GearGeometry, Pt } from './gear'
import { gearAnglesAt, contactPoint, type MeshInfo } from './mesh'

export interface MeshCycle {
  /** gcd(z1, z2) */
  gcd: number
  /** lcm(z1, z2) = 每周期的啮合次数（齿对相遇次数） */
  pairsPerCycle: number
  /** 一个周期内轮1 转数 = z2/gcd */
  rev1: number
  /** 一个周期内轮2 转数 = z1/gcd */
  rev2: number
  /** 轮1 周期转角（rad）= 2π·rev1 */
  periodPhi1: number
  /** 轮2 周期转角幅值（rad）= 2π·rev2（转向与轮1 相反） */
  periodPhi2: number
}

export function gcdInt(a: number, b: number): number {
  a = Math.abs(Math.round(a))
  b = Math.abs(Math.round(b))
  while (b) {
    const t = a % b
    a = b
    b = t
  }
  return a || 1
}

export function meshCycle(z1: number, z2: number): MeshCycle {
  const g = gcdInt(z1, z2)
  const pairs = (z1 / g) * z2 // = lcm，先除防溢出
  const rev1 = z2 / g
  const rev2 = z1 / g
  return {
    gcd: g,
    pairsPerCycle: pairs,
    rev1,
    rev2,
    periodPhi1: 2 * Math.PI * rev1,
    periodPhi2: 2 * Math.PI * rev2
  }
}

/** 实际啮合线两端点的 s 参数（世界坐标沿作用线方向 n 的投影） */
export function actionSpan(mesh: MeshInfo): [number, number] {
  const nx = Math.sin(mesh.alphaPrime)
  const ny = Math.cos(mesh.alphaPrime)
  const lo =
    (mesh.actionLine.p0.x - mesh.pitchPoint.x) * nx + (mesh.actionLine.p0.y - mesh.pitchPoint.y) * ny
  const hi =
    (mesh.actionLine.p1.x - mesh.pitchPoint.x) * nx + (mesh.actionLine.p1.y - mesh.pitchPoint.y) * ny
  return [lo, hi]
}

/**
 * 接触点落在哪颗齿上：把世界接触点变换到齿轮本体坐标，取其极角相对
 * 齿厚中心（π/2 + k·2π/z）的位置。左齿面接触时相对量 ∈ (k, k+0.5)，
 * 右齿面接触时 ∈ (k−0.5, k)，两种情形 round 后都等于 k。
 * （z ≲ 100 的教学范围内接触不会越过半齿距边界，见测试核对。）
 */
export function toothIndexAt(g: GearGeometry, centerX: number, phi: number, p: Pt): number {
  const dx = p.x - centerX
  const dy = p.y
  const c = Math.cos(-phi)
  const s = Math.sin(-phi)
  const lx = dx * c - dy * s
  const ly = dx * s + dy * c
  const ang = Math.atan2(ly, lx)
  const z = g.input.z
  const rel = (ang - Math.PI / 2) / ((2 * Math.PI) / z)
  const k = Math.round(rel)
  return ((k % z) + z) % z
}

/** 一帧轨迹（未含干涉结果；i 由 buildCycleFrames 排序后赋号） */
export interface FrameSpec {
  /** 按相位（φ1 升序）排序后的全局帧号 */
  i: number
  /** 第几次啮合（0 .. pairsPerCycle−1） */
  engagement: number
  /** 该次啮合内的归一化位置 0..1（0=啮入，1=啮出） */
  frac: number
  /** 接触齿对：轮1 第 k1 齿 × 轮2 第 k2 齿 */
  k1: number
  k2: number
  /** 两轮本体转角（rad，未取模，全程连续单调） */
  phi1: number
  phi2: number
  /** 接触点沿啮合线位置 s（mm，节点为 0） */
  s: number
  /** 接触点世界坐标 */
  cx: number
  cy: number
}

/**
 * 第 n 次啮合、归一化位置 frac 的帧。
 * 相位关系严格来自 gearAnglesAt（同一条渐开线接触），再平移 n 个齿距：
 *   φ1 = φ1_base(s) + n·2π/z1，  φ2 = φ2_base(s) − n·2π/z2（外啮合反向）
 * 注意：gearAnglesAt 中 ψ2 = atan2(...) 以 −x 为零角，接触点恰在 s=0（节点）
 * 跨过该射线，故 s<0 时 φ2_base 被 atan2 折返了 −2π。这里按 s 连续展开
 * （s<0 时 +2π），使整条轨迹的 φ2 随相位严格单调、跨啮合可比。
 */
export function engagementFrame(
  g1: GearGeometry,
  g2: GearGeometry,
  mesh: MeshInfo,
  engagement: number,
  frac: number
): FrameSpec {
  const [s0, s1] = actionSpan(mesh)
  const s = s0 + (s1 - s0) * frac
  const base = gearAnglesAt(mesh, g1, g2, s)
  const p1 = (2 * Math.PI) / g1.input.z
  const p2 = (2 * Math.PI) / g2.input.z
  const phi1 = base.phi1 + engagement * p1
  const phi2 = base.phi2 + (s < 0 ? 2 * Math.PI : 0) - engagement * p2
  const c = contactPoint(mesh, s)
  return {
    i: -1,
    engagement,
    frac,
    k1: toothIndexAt(g1, 0, phi1, c),
    k2: toothIndexAt(g2, mesh.a, phi2, c),
    phi1,
    phi2,
    s,
    cx: c.x,
    cy: c.y
  }
}

/**
 * 生成完整周期的相位排序帧序列：每次啮合取 K+1 个采样点（含啮入/啮出端），
 * 再加 1 帧"重复位置"帧（第 pairsPerCycle 次啮合的啮入点 = 第 0 帧平移一个
 * 周期），共 pairsPerCycle·(K+1)+1 帧；按 φ1 升序（相位）排序后赋帧号 i。
 * 注意 εα>1 时最后一次啮合的啮出尾段在相位上越过周期边界，故重复位置帧
 * 不一定排在末尾——它精确落在"首帧 + 一个周期"的相位处，其后的帧是本轮
 * 最后一次啮合尚未完成的尾段（物理上本就如此）。
 * 结果只依赖 (g1, g2, mesh, K)，完全确定——同一轨迹重复生成/断点续算时
 * 帧号逐帧一致，可按 i 幂等写库。
 */
export function buildCycleFrames(
  g1: GearGeometry,
  g2: GearGeometry,
  mesh: MeshInfo,
  framesPerEngagement: number
): FrameSpec[] {
  const K = Math.max(1, Math.round(framesPerEngagement))
  const cyc = meshCycle(g1.input.z, g2.input.z)
  const out: FrameSpec[] = []
  for (let n = 0; n < cyc.pairsPerCycle; n++) {
    for (let j = 0; j <= K; j++) {
      out.push(engagementFrame(g1, g2, mesh, n, j / K))
    }
  }
  // 重复位置帧：engagement === pairsPerCycle，齿对与第 0 帧相同，φ1 恰好多一个周期
  out.push(engagementFrame(g1, g2, mesh, cyc.pairsPerCycle, 0))
  out.sort((a, b) => a.phi1 - b.phi1 || a.engagement - b.engagement)
  out.forEach((f, i) => (f.i = i))
  return out
}
