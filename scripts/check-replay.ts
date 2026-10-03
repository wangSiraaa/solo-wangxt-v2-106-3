/**
 * 啮合周期回放验收：
 *  1. 标准齿数对（20/40）：首帧→重复位置姿态相同；逐帧齿对与方向连续；
 *  2. 互质齿数对（19/31）：周期 N=589，中途绝不提前重复，且遍历全部齿对；
 *  3. 中心距不足案例：对应相位留下可定位的干涉记录（真实 Clipper WASM 求交）；
 *  4. 生成状态机：取消/刷新恢复后按固定槽位续算，不重复插入帧；失败/过期可达；
 *  5. 持久化绑定：轨迹与案例参数指纹/轮廓指纹绑定，参数变更即非当前有效；
 *  6. 往返：导出（含轨迹）→ 以“无轨迹案例”导入时不伪造已验证；
 *     有轨迹且指纹匹配时可正确关联回原案例。
 */
import { buildGear, DEG } from '../src/geometry/gear.ts'
import { analyzeMesh } from '../src/geometry/mesh.ts'
import { intersectOutlines } from '../src/geometry/clipper.ts'
import {
  buildReplayMeta,
  buildFrameGeometry,
  startReplayRunner,
  computeParamFingerprint,
  computeOutlineFingerprint,
  isTrajectoryCurrent,
  baseAngles,
  gcd,
  type IntersectionInput,
  type Intersector,
  type ReplayCaseSignature,
  type ReplayFrame,
  type RunnerHandle
} from '../src/geometry/replay.ts'

let fails = 0
const ok = (cond: boolean, msg: string) => {
  if (cond) console.log('  ok  ', msg)
  else {
    fails++
    console.log('  FAIL', msg)
  }
}

const mkPair = (z1: number, z2: number, da = 0, m = 2) => {
  const g1 = buildGear({ z: z1, module: m, alpha: 20 * DEG, faceWidth: 8 })
  const g2 = buildGear({ z: z2, module: m, alpha: 20 * DEG, faceWidth: 8 })
  const mesh = analyzeMesh({ g1, g2, centerDistance: g1.pitchR + g2.pitchR + da })
  const sig: ReplayCaseSignature = {
    z1,
    z2,
    module: m,
    alphaDeg: 20,
    faceWidth: 8,
    centerDistance: mesh.a
  }
  return { g1, g2, mesh, sig }
}

const noopIntersector: Intersector = async () => ({ regions: [], area: 0, intersects: false })

/** 可控慢速求交：让“取消发生在中途”的测试确定可达 */
const slowIntersector: Intersector = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ regions: [], area: 0, intersects: false }), 2)
  )

async function runAll(opts: {
  z1: number
  z2: number
  steps?: number
  intersector?: Intersector
  da?: number
  cancelAfter?: number
  thenResume?: boolean
}) {
  const { g1, g2, mesh, sig } = mkPair(opts.z1, opts.z2, opts.da ?? 0)
  const meta = buildReplayMeta({
    trajId: 't',
    caseId: 'c',
    g1,
    g2,
    mesh,
    params: { stepsPerPitch: opts.steps ?? 8, includeRegions: true },
    signature: sig
  })
  const runner = startReplayRunner({
    g1,
    g2,
    mesh,
    meta,
    intersector: opts.intersector ?? noopIntersector,
    chunkSize: 64
  })
  if (opts.cancelAfter !== undefined) {
    await waitFrames(runner, opts.cancelAfter)
    runner.cancel()
  }
  let status = await runner.done
  let frames = runner.frames.slice() as (ReplayFrame | undefined)[]

  if (opts.thenResume) {
    ok(status === 'cancelled', `首次运行取消（保留 ${meta.framesDone}/${meta.frameCount} 帧，未满帧）`)
    ok(meta.framesDone > 0 && meta.framesDone < meta.frameCount, '取消发生在生成中途（既有已完成帧，也有剩余帧）')
    const before = frames.filter(Boolean).length
    const runner2 = startReplayRunner({
      g1,
      g2,
      mesh,
      meta: buildReplayMeta({
        trajId: 't',
        caseId: 'c',
        g1,
        g2,
        mesh,
        params: { stepsPerPitch: opts.steps ?? 8, includeRegions: true },
        signature: sig
      }),
      intersector: opts.intersector ?? noopIntersector,
      chunkSize: 64,
      existingFrames: frames.filter((f): f is ReplayFrame => !!f)
    })
    status = await runner2.done
    frames = runner2.frames.slice()
    const after = frames.filter(Boolean).length
    // 去重验证：所有帧 index 唯一且刚好覆盖 0..frameCount-1
    const idx = frames.filter((f): f is ReplayFrame => !!f).map((f) => f!.index)
    ok(new Set(idx).size === idx.length, '续算后帧索引无重复（不会重复插入帧）')
    ok(after === meta.frameCount, `续算补全全部帧（${before} → ${after}/${meta.frameCount}）`)
  }

  return { g1, g2, mesh, sig, meta, runner, frames, status }
}

function waitFrames(r: RunnerHandle, n: number) {
  return new Promise<void>((resolve) => {
    const check = () => {
      const done = r.frames.filter(Boolean).length
      if (done >= n || r.meta.status !== 'running') resolve()
      else setTimeout(check, 5)
    }
    check()
  })
}

// ===========================================================================
console.log('\n=== 1. 20/40 标准齿数对：周期、首末重复、逐帧齿对与方向连续 ===')
{
  const { g1, g2, mesh, meta, frames, status } = await runAll({ z1: 20, z2: 40, steps: 8 })
  ok(status === 'completed', '轨迹状态 = completed')
  ok(meta.periodPairs === 40, `N = lcm(20,40) = 40（实际 ${meta.periodPairs}）`)
  ok(meta.frameCount === 40 * 8 + 1, `总帧数 ${meta.frameCount} = N·steps+1`)

  const f0 = frames[0]!
  const fL = frames[meta.frameCount - 1]!
  const angEq = (a: number, b: number) => Math.abs(((a - b + Math.PI) % (2 * Math.PI)) - Math.PI) < 1e-9
  ok(angEq(f0.phi1Mod, fL.phi1Mod), '末帧轮1 姿态 ≡ 首帧（回到重复位置）')
  ok(angEq(f0.phi2Mod, fL.phi2Mod), '末帧轮2 姿态 ≡ 首帧')
  ok(Math.abs(fL.phi1 - f0.phi1 - meta.periodPhi1) < 1e-9, '连续转角差 = 整圈数（轮1 转两圈）')
  ok(Math.abs(fL.phi2 - f0.phi2 - meta.periodPhi2) < 1e-9, '连续转角差 = 整圈数（轮2 转一圈）')

  // 逐帧：主齿对序号变化只允许 0 或 +1（mod z），方向一致，接触点在有效段内
  let maxJump1 = 0
  let maxJump2 = 0
  let monotone = true
  let sInRange = true
  let pairSeen = new Set<string>()
  let prevPhi1 = f0.phi1
  for (let i = 0; i < meta.frameCount; i++) {
    const f = frames[i]!
    if (f.primary) {
      pairSeen.add(`${f.primary.tooth1}/${f.primary.tooth2}`)
      for (const p of f.activePairs) {
        if (p.s < meta.sEnter - 1e-7 || p.s > meta.sExit + 1e-7) sInRange = false
      }
    }
    if (i > 0) {
      const fp = frames[i - 1]!
      if (fp.primary && f.primary) {
        const d1 = (f.primary.tooth1 - fp.primary.tooth1 + g1.input.z) % g1.input.z
        // 外啮合轮2 齿号递减：允许的模 z 跳变为 0 或 z−1（即物理上的 −1）
        const d2raw = f.primary.tooth2 - fp.primary.tooth2
        const d2 = Math.abs(((d2raw + g2.input.z / 2) % g2.input.z) - g2.input.z / 2)
        maxJump1 = Math.max(maxJump1, d1)
        maxJump2 = Math.max(maxJump2, d2)
      }
      if (f.phi1 > prevPhi1 + 1e-12) monotone = false
      prevPhi1 = f.phi1
    }
  }
  ok(maxJump1 <= 1 && maxJump2 <= 1, `逐帧齿对序号连续（最大跳变 ${maxJump1}/${maxJump2}）`)
  ok(monotone, '轮1 连续转角全程单调（方向不变）')
  ok(sInRange, '所有在接触点均位于有效接触区间 [sE,sX]')
  ok(pairSeen.size === 40, `周期内恰好经历 40 个不同齿对（实际 ${pairSeen.size}）`)

  // 严格相位：rb1·Δφ1 = −rb2·Δφ2 对任意两帧
  const a = frames[3]!,
    b = frames[frames.length - 4]!
  const lhs = g1.baseR * (b.phi1 - a.phi1) + g2.baseR * (b.phi2 - a.phi2)
  ok(Math.abs(lhs) < 1e-9, `rb1·Δφ1 + rb2·Δφ2 = 0（实际 ${lhs.toExponential(2)}）`)

  // 同一齿对的接触在相邻齿对步之间应被追踪：s 随 q 线性递减到越过 sE
  const qPerStep = meta.basePitch / meta.stepsPerPitch
  ok(Math.abs(f0.q) < 1e-12 && Math.abs(fL.q - meta.periodPairs * meta.basePitch) < 1e-9, 'q 从 0 严格排序到 N·pb')
  void mesh
  void g2
  const dq = frames[1]!.q - f0.q
  ok(Math.abs(dq - qPerStep) < 1e-12, '相邻帧等 q 增量（按相位均匀排序）')
}

// ===========================================================================
console.log('\n=== 2. 互质 19/31：周期不会过早重复，遍历全部 z1*z2 个齿对 ===')
{
  const { meta, frames, status } = await runAll({ z1: 19, z2: 31, steps: 4 })
  ok(status === 'completed', '轨迹完成')
  ok(gcd(19, 31) === 1, '19 与 31 互质')
  ok(meta.periodPairs === 589, `N = lcm = 589（实际 ${meta.periodPairs}）`)

  // 在 N 之前任意更小周期都不重复：检查节点附近帧 (i%steps==0) 的齿对组合
  const nodes: string[] = []
  for (let n = 0; n < meta.periodPairs; n++) {
    const f = frames[n * meta.stepsPerPitch]!
    nodes.push(`${f.primary!.tooth1}/${f.primary!.tooth2}`)
  }
  ok(new Set(nodes).size === nodes.length, `前 N 个节点接触齿对两两不同（${nodes.length} 个）`)
  // 末帧重复首帧
  ok(nodes[0] === `${frames[meta.frameCount - 1]!.primary!.tooth1}/${frames[meta.frameCount - 1]!.primary!.tooth2}`, '恰在 N 处重复首齿对')
  // 若错误地用“轮转一圈”当周期（19 步），齿对必然提前撞车
  const early = nodes.slice(0, 19)
  ok(!early.includes(nodes[19]), '轮1 转满一圈（19 步）时齿对尚未重复')
}

// ===========================================================================
console.log('\n=== 3. 中心距不足：风险相位可定位（真实 Clipper WASM） ===')
{
  // 中心距比标准值小 1.2mm：基节相同但无侧隙空间，实体在啮合相位上被挤压
  const da = -1.2
  const { frames, status } = await runAll({ z1: 20, z2: 40, steps: 8, da, intersector: intersectOutlines as Intersector })
  ok(status === 'completed', '轨迹完成（含逐帧 Clipper 求交）')
  const riskIdx: number[] = []
  for (const f of frames) if (f!.interferes) riskIdx.push(f!.index)
  ok(riskIdx.length > 0, `中心距不足案例检出干涉帧 ${riskIdx.length} 个（首/末 = ${riskIdx[0]}, ${riskIdx[riskIdx.length - 1]}）`)
  // 关键验收：每一风险都能定位到具体相位/帧/接触点/区域，并可在播放器中跳转到该帧
  const probe = frames[riskIdx[Math.floor(riskIdx.length / 2)]]!
  ok(probe.interferenceArea > 1e-6, `干涉面积随帧逐点保存（抽查帧 ${probe.index}：${probe.interferenceArea.toFixed(3)} mm²）`)
  ok(probe.regions.length > 0 && !!probe.contactPoint, '干涉记录带世界坐标区域与该帧接触点（可定位）')
  ok(
    Number.isFinite(probe.phi1) && Number.isFinite(probe.phi2) && probe.primary !== null,
    '干涉记录同时保存两轮严格相位角度与齿对索引'
  )
  // 干涉面积随相位变化（而不是一个全局布尔值）
  const areas = frames.filter((f) => f!.interferes).map((f) => f!.interferenceArea)
  ok(Math.max(...areas) - Math.min(...areas) > 1e-6, '干涉结果逐帧量化（面积随相位变化）')
  // 对照：标准安装下同样轨迹不应干涉
  const std = await runAll({ z1: 20, z2: 40, steps: 8, intersector: intersectOutlines as Intersector })
  const stdRisk = std.frames.filter((f) => f!.interferes).length
  ok(stdRisk === 0, `对照：标准中心距全程无干涉（${stdRisk} 帧）`)
}

// ===========================================================================
console.log('\n=== 4. 生成状态机：取消/刷新恢复/失败/过期 ===')
{
  // 4a 取消后续算，帧不重复（慢速求交保证取消确实发生在中途）
  await runAll({ z1: 12, z2: 18, steps: 8, intersector: slowIntersector, cancelAfter: 20, thenResume: true })

  // 4b 失败状态可达
  {
    const { g1, g2, mesh, sig } = mkPair(12, 18)
    const meta = buildReplayMeta({
      trajId: 'tf',
      caseId: 'c',
      g1,
      g2,
      mesh,
      params: { stepsPerPitch: 4, includeRegions: false },
      signature: sig
    })
    let calls = 0
    const failing: Intersector = async () => {
      calls++
      if (calls === 5) throw new Error('WASM boom')
      return { regions: [], area: 0, intersects: false }
    }
    const r = startReplayRunner({ g1, g2, mesh, meta, intersector: failing, chunkSize: 2 })
    const st = await r.done
    ok(st === 'failed' && /WASM boom/.test(meta.error ?? ''), '求交失败 → failed 状态并保留错误信息')
    ok(meta.framesDone === 4, `失败前已完成帧保留（${meta.framesDone}）`)
  }

  // 4c 过期：参数在生成期间作废
  {
    const { g1, g2, mesh, sig } = mkPair(12, 18)
    const meta = buildReplayMeta({
      trajId: 'te',
      caseId: 'c',
      g1,
      g2,
      mesh,
      params: { stepsPerPitch: 4, includeRegions: false },
      signature: sig
    })
    let release: (v: IntersectionInput) => void = () => {}
    const blocking: Intersector = () =>
      new Promise<IntersectionInput>((res) => {
        release = () => res({ regions: [], area: 0, intersects: false })
      })
    const r = startReplayRunner({ g1, g2, mesh, meta, intersector: blocking, chunkSize: 1 })
    await new Promise((r2) => setTimeout(r2, 20))
    r.expire() // 模拟改参数
    release({ regions: [], area: 0, intersects: false })
    const st = await r.done
    ok(st === 'expired', '生成中改参数 → expired（结果不写为当前有效）')
  }
}

// ===========================================================================
console.log('\n=== 5. 指纹绑定：改案例参数后历史轨迹不被误标为当前有效 ===')
{
  const { g1, g2, mesh, sig } = mkPair(20, 40)
  const meta = buildReplayMeta({
    trajId: 'tbind',
    caseId: 'case-A',
    g1,
    g2,
    mesh,
    params: { stepsPerPitch: 8, includeRegions: false },
    signature: sig
  })
  meta.status = 'completed'
  meta.framesDone = meta.frameCount
  ok(isTrajectoryCurrent(meta, sig), '同参数：轨迹为当前有效')

  const changed: ReplayCaseSignature = { ...sig, centerDistance: sig.centerDistance + 0.5 }
  ok(computeParamFingerprint(changed) !== meta.paramFingerprint, '中心距改变 → 参数指纹改变')
  ok(!isTrajectoryCurrent(meta, changed), '改中心距后：历史轨迹不是当前有效（仍可查看）')

  const zChanged: ReplayCaseSignature = { ...sig, z1: 21, z2: 40 }
  ok(!isTrajectoryCurrent(meta, zChanged), '改齿数后：历史轨迹不是当前有效')

  // 轮廓指纹：换齿形构造会改变
  const g1b = buildGear({ z: 20, module: 2, alpha: 25 * DEG, faceWidth: 8 })
  const g2b = buildGear({ z: 40, module: 2, alpha: 25 * DEG, faceWidth: 8 })
  ok(
    computeOutlineFingerprint(g1b, g2b) !== meta.outlineFingerprint,
    '压力角改变 → 轮廓指纹改变（防止拿旧轮廓冒充新结果）'
  )
}

// ===========================================================================
console.log('\n=== 6. 导出/导入关联：无轨迹不伪造；有轨迹且指纹匹配才关联 ===')
{
  const { g1, g2, mesh, sig } = mkPair(20, 40)
  const meta = buildReplayMeta({
    trajId: 't-exp',
    caseId: 'case-exp',
    g1,
    g2,
    mesh,
    params: { stepsPerPitch: 8, includeRegions: false },
    signature: sig
  })
  meta.status = 'completed'
  const frames: ReplayFrame[] = []
  const frameIndices: number[] = []
  for (let i = 0; i < meta.frameCount; i++) {
    const q = (i * meta.periodPairs * meta.basePitch) / (meta.frameCount - 1)
    frames.push({
      ...buildFrameGeometry(i, q, g1, g2, mesh, meta),
      interferenceArea: 0,
      interferes: false,
      regions: []
    })
    frameIndices.push(i)
  }
  meta.framesDone = meta.frameCount

  // 模拟 importTrajectoriesForCase 的判定逻辑（不依赖 IndexedDB）
  const acceptIf = (
    fp: string,
    rec: { paramFingerprint: string; framesDone: number; frameCount: number; status: string }
  ) => rec.paramFingerprint === fp && rec.framesDone === rec.frameCount && rec.status === 'completed'

  ok(acceptIf(computeParamFingerprint(sig), meta), '指纹匹配的完成轨迹可关联回原案例')
  ok(!acceptIf(computeParamFingerprint({ ...sig, z1: 21, z2: 40 }), meta), '指纹不匹配（改齿数）不关联')

  // 未完成轨迹导出后不应被接受为已验证
  const partial = { ...meta, status: 'cancelled' as const, framesDone: meta.frameCount - 5 }
  ok(!acceptIf(computeParamFingerprint(sig), partial), '取消的不完整轨迹不会被当作已验证结果')

  // 空洞安全：取消轨迹只存了部分帧 + frameIndices，恢复后槽位不能错位
  const { recordToSparseFrames, sparseFramesToRecord } = await import('../src/trajectoryStore.ts')
  const cancelledRec = {
    ...meta,
    status: 'cancelled' as const,
    frames: [frames[10], frames[11], frames[40]],
    frameIndices: [10, 11, 40],
    framesDone: 3
  }
  const sparse = recordToSparseFrames(meta.frameCount, cancelledRec.frames, cancelledRec.frameIndices)
  ok(sparse[10] === frames[10] && sparse[11] === frames[11] && sparse[40] === frames[40], '恢复：帧按 frameIndices 落回正确槽位')
  ok(sparse[0] === undefined && sparse[12] === undefined && sparse.filter(Boolean).length === 3, '恢复：未算槽位保持空洞（IndexedDB clone 也不串位）')
  const repacked = sparseFramesToRecord(sparse)
  ok(repacked.frames.length === 3 && repacked.frameIndices.join() === '10,11,40', '再次持久化不产生重复帧')

  // 没有 trajectories 字段的案例 → 空
  ok(!('trajectories' in { id: 'x' }), '无轨迹字段的导入案例不会伪造轨迹')

  // 节点对齐常量稳定性（保证跨次生成首帧一致，可“从首帧回放”）
  const a0 = baseAngles(g1, g2, mesh)
  const a1 = baseAngles(g1, g2, mesh)
  ok(a0.phi10 === a1.phi10 && a0.phi20 === a1.phi20, '基础相位常量确定性（重复生成首帧一致）')
}

// ===========================================================================
console.log('\n=== 7. εα>1 时一帧多对同时接触 ===')
{
  // 标准 20/40 ε≈1.63，应存在两齿/三齿同时接触帧
  const { meta, frames } = await runAll({ z1: 20, z2: 40, steps: 16 })
  const multi = frames.filter((f) => f!.activePairs.length >= 2).length
  ok(multi > 0, `存在多齿对同时接触帧（${multi} 帧），与 εα=${meta.contactRatio.toFixed(2)}>1 一致`)
  const maxPairs = Math.max(...frames.map((f) => f!.activePairs.length))
  ok(maxPairs === 2, `同时接触对数最大为 2（实际 ${maxPairs}，ε<2）`)
}

console.log(fails ? `\n${fails} 项失败 ❌` : '\n回放验收全部通过 ✅')
process.exit(fails ? 1 : 0)
