/**
 * 啮合周期回放验收测试：
 *  1. 周期推导：lcm 啮合次数、两轮转数、周期转角；
 *  2. 标准齿数对（20/40）：从首帧到重复位置，逐帧齿对与转向连续；
 *  3. 互质齿数对（20/21）：周期不过早重复（z1·z2 次啮合才复原）；
 *  4. 中心距不足：对应相位留下可定位的干涉记录（帧号/s/区域）；
 *  5. 取消/刷新后续算：幂等，不重复插入帧；
 *  6. 指纹绑定：改参数→过期；导出再导入不伪造验证；轨迹正确关联原案例。
 */
import { buildGear, DEG } from '../src/geometry/gear.ts'
import { analyzeMesh } from '../src/geometry/mesh.ts'
import {
  meshCycle,
  buildCycleFrames,
  engagementFrame,
  actionSpan,
  type FrameSpec
} from '../src/geometry/cycle.ts'
import { runTrajectoryJob, MemoryFrameSink, type TrajectoryFrame } from '../src/geometry/trajgen.ts'
import {
  caseFingerprint,
  outlineFingerprint,
  effectiveStatus,
  type TrajectoryRecord
} from '../src/trajectoryStore.ts'
import { parseCase, serializeCase, SCHEMA_VERSION, type CaseData } from '../src/store.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

const M = 2
const ALPHA = 20 * DEG

function pair(z1: number, z2: number, da = 0) {
  const g1 = buildGear({ z: z1, module: M, alpha: ALPHA, faceWidth: 8 })
  const g2 = buildGear({ z: z2, module: M, alpha: ALPHA, faceWidth: 8 })
  const mesh = analyzeMesh({ g1, g2, centerDistance: g1.pitchR + g2.pitchR + da })
  return { g1, g2, mesh }
}

/** 每次啮合取中点帧，返回 (engagement -> frame) */
function midFrames(frames: FrameSpec[]): Map<number, FrameSpec> {
  const m = new Map<number, FrameSpec>()
  for (const f of frames) {
    if (Math.abs(f.frac - 0.5) < 1e-9) m.set(f.engagement, f)
  }
  return m
}

// ---------------------------------------------------------------------------
console.log('\n=== 1. 周期推导 ===')
{
  const c1 = meshCycle(20, 40)
  ok(c1.gcd === 20 && c1.pairsPerCycle === 40, `20/40: gcd=20, 每周期 40 次啮合（得 ${c1.pairsPerCycle}）`)
  ok(c1.rev1 === 2 && c1.rev2 === 1, `20/40: 轮1 转 2 周、轮2 转 1 周复原（得 ${c1.rev1}/${c1.rev2}）`)
  ok(Math.abs(c1.periodPhi1 - 4 * Math.PI) < 1e-12, '20/40: 周期转角 φ1 = 4π')
  const c2 = meshCycle(20, 21)
  ok(c2.gcd === 1 && c2.pairsPerCycle === 420 && c2.rev1 === 21, `20/21 互质: 每周期 420 次啮合、轮1 转 21 周（得 ${c2.pairsPerCycle}/${c2.rev1}）`)
  const c3 = meshCycle(17, 17)
  ok(c3.pairsPerCycle === 17 && c3.rev1 === 1, `17/17: 每周期 17 次啮合（得 ${c3.pairsPerCycle}）`)
}

// ---------------------------------------------------------------------------
console.log('\n=== 2. 标准齿数对 20/40：相位排序、齿对与方向连续、可回放到重复位置 ===')
{
  const { g1, g2, mesh } = pair(20, 40)
  const K = 4
  const frames = buildCycleFrames(g1, g2, mesh, K)
  const cyc = meshCycle(20, 40)
  ok(frames.length === cyc.pairsPerCycle * (K + 1) + 1, `总帧数 = 40×5+1 = 201（得 ${frames.length}）`)

  // 相位排序：φ1 单调不减、φ2 单调不增（外啮合反向）
  let dirOk = true
  for (let i = 1; i < frames.length; i++) {
    if (frames[i].phi1 < frames[i - 1].phi1 - 1e-12) dirOk = false
    if (frames[i].phi2 > frames[i - 1].phi2 + 1e-12) dirOk = false
  }
  ok(dirOk, '全轨迹 φ1 单调递增、φ2 单调递减（转向相反且连续）')

  // 帧号就是数组位置（排序后赋号）
  ok(frames.every((f, i) => f.i === i), '帧号 0..N−1 连续无缺口')

  // 齿对连续：相邻两次啮合，k1、k2 各步进 ±1（mod z），且步进符号恒定
  const mids = midFrames(frames)
  ok(mids.size === cyc.pairsPerCycle, '每次啮合都有中点帧')
  const step1 = ((mids.get(1)!.k1 - mids.get(0)!.k1) % 20 + 20) % 20
  const step2 = ((mids.get(1)!.k2 - mids.get(0)!.k2) % 40 + 40) % 40
  ok(step1 === 1 || step1 === 19, `轮1 齿序步进 ±1（得 ${step1}）`)
  ok(step2 === 1 || step2 === 39, `轮2 齿序步进 ±1（得 ${step2}）`)
  let pairOk = true
  for (let n = 1; n < cyc.pairsPerCycle; n++) {
    const prev = mids.get(n - 1)!
    const cur = mids.get(n)!
    if (((cur.k1 - prev.k1) % 20 + 20) % 20 !== step1) pairOk = false
    if (((cur.k2 - prev.k2) % 40 + 40) % 40 !== step2) pairOk = false
  }
  ok(pairOk, '40 次啮合的齿对序列全程按 ±1 连续步进')

  // 同一啮合内齿对不变（接触沿同一对齿的渐开线移动）；重复位置帧单独核对
  let withinOk = true
  for (const f of frames) {
    if (f.engagement >= cyc.pairsPerCycle) continue
    const mid = mids.get(f.engagement)!
    if (f.k1 !== mid.k1 || f.k2 !== mid.k2) withinOk = false
  }
  ok(withinOk, '同一啮合内所有帧的齿对不变')

  // 首帧 → 重复位置：第 40 次啮合 = 第 0 次啮合平移一个周期
  const f0 = engagementFrame(g1, g2, mesh, 0, 0)
  const fR = engagementFrame(g1, g2, mesh, cyc.pairsPerCycle, 0)
  ok(Math.abs(fR.phi1 - f0.phi1 - cyc.periodPhi1) < 1e-9, `重复位置 φ1 恰好多 4π（Δ=${(fR.phi1 - f0.phi1).toFixed(6)}）`)
  ok(Math.abs(fR.phi2 - f0.phi2 + cyc.periodPhi2) < 1e-9, '重复位置 φ2 恰好少 2π')
  ok(fR.k1 === f0.k1 && fR.k2 === f0.k2, `重复位置齿对复原（(${f0.k1},${f0.k2}) → (${fR.k1},${fR.k2})）`)
  ok(Math.hypot(fR.cx - f0.cx, fR.cy - f0.cy) < 1e-9, '重复位置接触点世界坐标一致')

  // 轨迹中含"重复位置"帧（engagement = pairsPerCycle）：与首帧同一对齿、
  // 同一接触相位、φ1 恰好多一个周期。εα>1 时它不是末帧——末次啮合的尾段
  // 在相位上越过周期边界，排在它之后（物理上本就如此）。
  const first = frames[0]
  const closing = frames.find((f) => f.engagement === cyc.pairsPerCycle)!
  ok(!!closing, '轨迹包含重复位置帧')
  ok(closing.k1 === first.k1 && closing.k2 === first.k2, '重复位置帧与首帧同一对齿')
  ok(Math.abs(closing.phi1 - first.phi1 - cyc.periodPhi1) < 1e-9, '重复位置帧 φ1 = 首帧 + 一个周期')
  ok(Math.abs(closing.s - first.s) < 1e-9 && Math.hypot(closing.cx - first.cx, closing.cy - first.cy) < 1e-9, '重复位置帧与首帧接触位置一致')
  const tailAfter = frames.filter((f) => f.i > closing.i)
  ok(
    tailAfter.every((f) => f.engagement === cyc.pairsPerCycle - 1),
    '重复位置帧之后仅剩末次啮合的啮出尾段'
  )

  // 相位总跨度 = (pairs−1) 个齿距 + 一次啮合的 φ1 行程（= εα·2π/z1），
  // 即覆盖完整一个周期再加上末次啮合的越界尾段
  const span = frames[frames.length - 1].phi1 - frames[0].phi1
  const [s0, s1] = actionSpan(mesh)
  const expect = (cyc.pairsPerCycle - 1) * ((2 * Math.PI) / 20) + (s1 - s0) / g1.baseR
  ok(Math.abs(span - expect) < 1e-9, `首末帧相位跨度 ${span.toFixed(6)} = 理论值 ${expect.toFixed(6)}`)
}

// ---------------------------------------------------------------------------
console.log('\n=== 3. 互质齿数对 20/21：周期不过早重复 ===')
{
  const { g1, g2, mesh } = pair(20, 21)
  const cyc = meshCycle(20, 21)
  const frames = buildCycleFrames(g1, g2, mesh, 2)
  const mids = midFrames(frames)
  ok(mids.size === 420, `共 420 次啮合（得 ${mids.size}）`)
  const seen = new Set<string>()
  let firstRepeat = -1
  for (let n = 0; n < cyc.pairsPerCycle; n++) {
    const f = mids.get(n)!
    const key = `${f.k1},${f.k2}`
    if (seen.has(key) && firstRepeat < 0) firstRepeat = n
    seen.add(key)
  }
  ok(seen.size === 420, `420 个齿对两两不同（得 ${seen.size}）`)
  ok(firstRepeat === -1, `周期内无重复齿对（首次重复于第 ${firstRepeat} 次啮合）`)
  const f0 = engagementFrame(g1, g2, mesh, 0, 0.5)
  const fR = engagementFrame(g1, g2, mesh, cyc.pairsPerCycle, 0.5)
  ok(fR.k1 === f0.k1 && fR.k2 === f0.k2, '第 420 次啮合齿对才复原')
  ok(Math.abs(fR.phi1 - f0.phi1 - 42 * Math.PI) < 1e-9, '重复时轮1 恰好转 21 周（42π）')
}

// ---------------------------------------------------------------------------
console.log('\n=== 4. 中心距不足：对应相位留下可定位干涉记录 ===')
{
  const mk = async (da: number, trajId: string) => {
    const { g1, g2, mesh } = pair(20, 40, da)
    const sink = new MemoryFrameSink()
    const result = await runTrajectoryJob({
      g1, g2, mesh, trajId, framesPerEngagement: 2, sink, chunkSize: 20
    })
    return { result, sink, mesh }
  }
  const bad = await mk(-3, 'traj-bad')
  ok(bad.result === 'completed', '中心距不足案例轨迹生成完成')
  const badFrames = [...bad.sink.frames.values()]
  const hits = badFrames.filter((f) => f.interferes)
  ok(hits.length > 0, `检出 ${hits.length} 个干涉帧`)
  const [sLo, sHi] = actionSpan(bad.mesh)
  ok(
    hits.every((f) => f.s >= sLo - 1e-9 && f.s <= sHi + 1e-9 && f.i >= 0),
    '每个干涉帧都可用 (帧号 i, 相位 s) 定位'
  )
  ok(hits.every((f) => f.regions.length > 0 && f.interferenceArea > 1e-3), '干涉帧带有重叠区域多边形与面积')
  const sMin = Math.min(...hits.map((f) => f.s))
  const sMax = Math.max(...hits.map((f) => f.s))
  console.log(`  干涉相位区间 s ∈ [${sMin.toFixed(3)}, ${sMax.toFixed(3)}] mm，帧号 ${Math.min(...hits.map((f) => f.i))}..${Math.max(...hits.map((f) => f.i))}`)

  const good = await mk(0, 'traj-good')
  const goodHits = [...good.sink.frames.values()].filter((f) => f.interferes)
  ok(goodHits.length === 0, `标准中心距全周期无干涉（干涉帧 ${goodHits.length} 个）`)
}

// ---------------------------------------------------------------------------
console.log('\n=== 5. 取消/刷新后续算：幂等、不重复插入帧 ===')
{
  const { g1, g2, mesh } = pair(17, 19) // 互质：323 次啮合 × 3 帧 + 重复位置帧 = 970 帧
  const cyc = meshCycle(17, 19)
  const total = cyc.pairsPerCycle * 3 + 1 // K=2 → 每啮合 3 帧，+1 重复位置帧
  const sink = new MemoryFrameSink()
  let cancelAt = 100
  const r1 = await runTrajectoryJob({
    g1, g2, mesh, trajId: 'traj-cancel', framesPerEngagement: 2, sink,
    withInterference: false, chunkSize: 10,
    shouldCancel: () => sink.frames.size >= cancelAt
  })
  const afterCancel = sink.frames.size
  ok(r1 === 'cancelled', `生成中被取消（已写 ${afterCancel}/${total} 帧）`)
  ok(afterCancel > 0 && afterCancel < total, '取消时只写了部分帧')

  // 模拟刷新后：新任务、同一 sink（相当于同一 IndexedDB），从断点继续
  cancelAt = total + 1
  const r2 = await runTrajectoryJob({
    g1, g2, mesh, trajId: 'traj-cancel', framesPerEngagement: 2, sink,
    withInterference: false, chunkSize: 10,
    shouldCancel: () => sink.frames.size >= cancelAt
  })
  ok(r2 === 'completed', '续算跑完')
  ok(sink.frames.size === total, `帧数恰好 ${total}（得 ${sink.frames.size}）`)
  ok(sink.putCount === total, `写入次数 = 帧数，无重复插入（put ${sink.putCount} 次）`)
  let seqOk = true
  for (let i = 0; i < total; i++) {
    const f = sink.frames.get(i)
    if (!f || f.i !== i) seqOk = false
  }
  ok(seqOk, '帧号 0..N−1 齐全且与内容一一对应')

  // 再跑一遍完整任务：全部命中已存在帧，一次都不写
  const putsBefore = sink.putCount
  const r3 = await runTrajectoryJob({
    g1, g2, mesh, trajId: 'traj-cancel', framesPerEngagement: 2, sink, withInterference: false
  })
  ok(r3 === 'completed' && sink.putCount === putsBefore, '已完成轨迹重复生成时零写入（完全幂等）')
}

// ---------------------------------------------------------------------------
console.log('\n=== 6. 指纹绑定 / 过期 / 导出导入不伪造 / 关联原案例 ===')
{
  const { g1, g2 } = pair(20, 40)
  const params = { z1: 20, z2: 40, module: 2, alphaDeg: 20, faceWidth: 8, centerDistance: null as number | null }
  const fp = caseFingerprint(params, g1.outline, g2.outline)
  ok(fp === caseFingerprint({ ...params }, g1.outline, g2.outline), '同参数同轮廓指纹确定')
  ok(fp !== caseFingerprint({ ...params, z2: 41 }, g1.outline, g2.outline), '改齿数 ⇒ 指纹变化')
  ok(fp !== caseFingerprint({ ...params, centerDistance: 59 }, g1.outline, g2.outline), '改中心距 ⇒ 指纹变化')
  const o2b = g2.outline.map((p, i) => (i === 0 ? { x: p.x + 1e-3, y: p.y } : p))
  ok(outlineFingerprint(g1.outline, o2b) !== outlineFingerprint(g1.outline, g2.outline), '轮廓逐点扰动 ⇒ 轮廓指纹变化')

  const rec: TrajectoryRecord = {
    id: 'traj-t', caseId: 'case-t', name: 't', fingerprint: fp, params,
    cycle: meshCycle(20, 40), sEnter: 0, sExit: 1, framesPerEngagement: 2,
    frameCount: 120, framesDone: 120, status: 'completed', createdAt: 1, updatedAt: 1
  }
  ok(effectiveStatus(rec, fp) === 'completed', '完成且指纹一致 ⇒ 当前有效')
  ok(effectiveStatus(rec, caseFingerprint({ ...params, z2: 41 }, g1.outline, g2.outline)) === 'expired', '修改案例后 ⇒ 已过期，不得标为当前有效')

  // 导出 → 导入：案例 JSON 不含任何轨迹/验证信息
  const caseData: CaseData = {
    schemaVersion: SCHEMA_VERSION, id: 'case-t', name: '样本', createdAt: 1, updatedAt: 1, note: '',
    gear1: { z: 20, module: 2, alpha: ALPHA, alphaDeg: 20, faceWidth: 8 },
    gear2: { z: 40, module: 2, alpha: ALPHA, alphaDeg: 20, faceWidth: 8 },
    centerDistance: null, unit: 'mm'
  }
  const text = serializeCase(caseData)
  ok(!/traj|verified|frames/i.test(text), '导出 JSON 不含轨迹/验证字段')
  const back = parseCase(text)
  ok((back as Record<string, unknown>).trajectories === undefined, '导入案例无轨迹字段 ⇒ 只能显示"未生成"')
  // 生成后的轨迹通过 caseId + 指纹关联原案例
  ok(rec.caseId === back.id && rec.fingerprint === fp, '轨迹记录以 caseId + 指纹绑定原案例')
}

console.log(fails ? `\n${fails} 项失败 ❌` : '\n周期回放验收全部通过 ✅')
process.exit(fails ? 1 : 0)
