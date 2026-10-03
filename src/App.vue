<script setup lang="ts">
import { computed, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { buildGear, validateGearInput, DEG, transformOutline, type GearGeometry, type Pt } from './geometry/gear'
import { analyzeMesh, gearAnglesAt, mateAngle, type MeshInfo } from './geometry/mesh'
import { intersectOutlines } from './geometry/clipper'
import {
  buildReplayMeta,
  startReplayRunner,
  computeParamFingerprint,
  type ReplayCaseSignature,
  type ReplayFrame,
  type RunnerHandle
} from './geometry/replay'
import {
  deleteTrajectoriesByCase,
  deleteTrajectory,
  exportableTrajectories,
  getTrajectory,
  importTrajectoriesForCase,
  listTrajectories,
  markTrajectoriesExpired,
  newTrajectoryId,
  recordToSparseFrames,
  reconcileOrphanedRuns,
  saveTrajectory,
  sparseFramesToRecord,
  type TrajectoryRecord
} from './trajectoryStore'
import { GearViewer, type ViewerOptions } from './viewer'
import { UNITS, fromMm, toMm, fmtLen, type LengthUnit } from './units'
import {
  type CaseData,
  downloadJson,
  listCases,
  newCaseId,
  parseCase,
  saveCase,
  deleteCase
} from './store'

// ------- 参数（内部全部 mm / 度） -------
const unit = ref<LengthUnit>('mm')

const gearParams = reactive({
  z1: 20,
  z2: 40,
  m: 2, // mm
  alphaDeg: 20,
  faceWidth: 10,
  centerDistance: 60, // mm
  useStandardCenter: true
})

const g1 = shallowRef<GearGeometry>()
const g2 = shallowRef<GearGeometry>()
const mesh = shallowRef<MeshInfo>()

const errors = reactive({ g1: [] as string[], g2: [] as string[] })

function rebuild() {
  const in1 = { z: Math.round(gearParams.z1), module: gearParams.m, alpha: gearParams.alphaDeg * DEG, faceWidth: gearParams.faceWidth }
  const in2 = { z: Math.round(gearParams.z2), module: gearParams.m, alpha: gearParams.alphaDeg * DEG, faceWidth: gearParams.faceWidth }
  errors.g1 = validateGearInput(in1)
  errors.g2 = validateGearInput(in2)
  if (errors.g1.length || errors.g2.length) return
  g1.value = buildGear(in1)
  g2.value = buildGear(in2)
  const a = gearParams.useStandardCenter
    ? g1.value.pitchR + g2.value.pitchR
    : gearParams.centerDistance
  mesh.value = analyzeMesh({ g1: g1.value, g2: g2.value, centerDistance: a })
}

// ------- 单位输入辅助（数值随单位换算；内部 mm 不变） -------
const mInput = computed({
  get: () => fromMm(gearParams.m, unit.value),
  set: (v: number) => (gearParams.m = toMm(v, unit.value))
})
const faceInput = computed({
  get: () => fromMm(gearParams.faceWidth, unit.value),
  set: (v: number) => (gearParams.faceWidth = toMm(v, unit.value))
})
const centerInput = computed({
  get: () => fromMm(gearParams.centerDistance, unit.value),
  set: (v: number) => (gearParams.centerDistance = toMm(v, unit.value))
})

watch(unit, () => {})

// ------- 动画 -------
const playing = ref(true)
const phi1 = ref(0)
const speed = ref(0.25) // rad/s（轮1）
let lastT = 0
const contactS = ref(0)

const showOpts = reactive<ViewerOptions>({
  showPitchCircle: true,
  showBaseCircle: true,
  showAddendumCircle: false,
  showDedendumCircle: false,
  showActionLine: true,
  showContact: true,
  contactS: 0
})

// ------- 干涉 -------
const interferenceArea = ref<number | null>(null)
const interferenceRegions = shallowRef<Pt[][]>([])
const interferenceBusy = ref(false)
let interfereReq = 0

async function checkInterference(currentPhi1: number) {
  if (!g1.value || !g2.value || !mesh.value) return
  const p1 = currentPhi1
  const p2 = mateAngle(g1.value, g2.value, mesh.value, p1)
  const o1 = [transformOutline(g1.value.outline, 0, 0, p1)]
  const o2 = [transformOutline(g2.value.outline, mesh.value.a, 0, p2)]
  const req = ++interfereReq
  interferenceBusy.value = true
  try {
    const res = await intersectOutlines(o1, o2)
    if (req !== interfereReq) return
    interferenceArea.value = res.area
    interferenceRegions.value = res.regions
  } finally {
    if (req === interfereReq) interferenceBusy.value = false
  }
}

// ------- 啮合周期回放 -------
const replaySteps = ref(16) // 每个基节（齿对步）的采样帧数
const replayWithRegions = ref(true)
const replayBusy = ref(false)
const replayStatusText = ref('')
const replayProgress = ref(0)

const activeRunner = shallowRef<RunnerHandle | null>(null)
/** 当前载入查看器的轨迹（可能是过期轨迹） */
const activeRecord = shallowRef<TrajectoryRecord | null>(null)
const records = ref<TrajectoryRecord[]>([])
/** 回放帧游标 */
const playFrame = ref(0)
const playingReplay = ref(false)
const replayFps = ref(24)
let playLastT = 0

const replayInfo = computed(() => {
  if (!g1.value || !g2.value || !mesh.value) return null
  const N = lcmCount(g1.value.input.z, g2.value.input.z)
  return {
    N,
    frames: N * replaySteps.value + 1,
    sEnter: boundsS().sEnter,
    sExit: boundsS().sExit
  }
})

function lcmCount(a: number, b: number) {
  const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y))
  return Math.abs(a * b) / gcd(a, b)
}

function boundsS() {
  const m = mesh.value!
  const nx = Math.sin(m.alphaPrime),
    ny = Math.cos(m.alphaPrime)
  return {
    sEnter:
      (m.actionLine.p0.x - m.pitchPoint.x) * nx + (m.actionLine.p0.y - m.pitchPoint.y) * ny,
    sExit:
      (m.actionLine.p1.x - m.pitchPoint.x) * nx + (m.actionLine.p1.y - m.pitchPoint.y) * ny
  }
}

function currentSignature(): ReplayCaseSignature {
  const a = mesh.value?.a ?? gearParams.centerDistance
  return {
    z1: Math.round(gearParams.z1),
    z2: Math.round(gearParams.z2),
    module: gearParams.m,
    alphaDeg: gearParams.alphaDeg,
    faceWidth: gearParams.faceWidth,
    centerDistance: a
  }
}

function currentFingerprint(): string {
  return computeParamFingerprint(currentSignature())
}

/**
 * 最近一次已提交参数的指纹。参数 watcher 用它（而非从已变更的响应式值重算）
 * 识别“真正的旧参数”，避免载入案例时把该案例自己的轨迹误标为过期。
 */
let committedFp: string | null = null

async function refreshRecords() {
  if (!currentCaseId.value) {
    // 未绑定案例（启动后尚未载入/保存）：只显示未绑定的轨迹，不把别的案例历史混进来
    records.value = await listTrajectories(null)
    return
  }
  records.value = await listTrajectories(currentCaseId.value)
}

function expireRunningForEdit() {
  const r = activeRunner.value
  if (r) {
    // 改参数/换案例：正在运行的生成整体作废（expired），已排队结果不再写为当前有效
    r.expire()
  }
  activeRunner.value = null
  replayBusy.value = false
  activeRecord.value = null
  playingReplay.value = false
  viewer?.clearReplay()
}

async function startReplay(resumeFrom?: TrajectoryRecord) {
  if (!g1.value || !g2.value || !mesh.value) return
  expireRunningForEdit()

  type Meta = ReturnType<typeof buildReplayMeta>
  let meta: Meta | null = null
  let existing: ReplayFrame[] = []
  if (resumeFrom && resumeFrom.paramFingerprint === currentFingerprint() && resumeFrom.status !== 'completed') {
    // 安全续算：仅当案例/参数指纹与当前完全一致才允许复用槽位；否则另开新轨迹
    const fresh = buildReplayMeta({
      trajId: resumeFrom.trajId,
      caseId: currentCaseId.value,
      g1: g1.value,
      g2: g2.value,
      mesh: mesh.value,
      params: resumeFrom.params,
      signature: currentSignature()
    })
    if (
      fresh.frameCount === resumeFrom.frameCount &&
      fresh.outlineFingerprint === resumeFrom.outlineFingerprint
    ) {
      fresh.createdAt = resumeFrom.createdAt
      const full = await getTrajectory(resumeFrom.trajId)
      const src = full ?? resumeFrom
      // 按持久化的帧号映射回稀疏槽位（取消后续算绝不会错位/重复）
      const sparse = recordToSparseFrames(fresh.frameCount, src.frames, src.frameIndices)
      existing = sparse.filter((f): f is ReplayFrame => !!f)
      meta = fresh
    }
  }
  if (!meta) {
    meta = buildReplayMeta({
      trajId: newTrajectoryId(),
      caseId: currentCaseId.value,
      g1: g1.value,
      g2: g2.value,
      mesh: mesh.value,
      params: { stepsPerPitch: replaySteps.value, includeRegions: replayWithRegions.value },
      signature: currentSignature()
    })
  }

  const handle = startReplayRunner({
    g1: g1.value,
    g2: g2.value,
    mesh: mesh.value,
    meta,
    intersector: intersectOutlines,
    chunkSize: 24,
    yieldMs: 0,
    existingFrames: existing
  })
  activeRunner.value = handle
  activeRecord.value = null
  replayBusy.value = true
  replayStatusText.value = `生成中 0/${meta.frameCount}`
  replayProgress.value = 0

  let lastFlush = 0
  const flush = async (force = false) => {
    const now = performance.now()
    if (!force && now - lastFlush < 800) return
    lastFlush = now
    const packed = sparseFramesToRecord(handle.frames)
    await saveTrajectory({
      ...handle.meta,
      frames: packed.frames,
      frameIndices: packed.frameIndices
    })
    await refreshRecords()
  }

  handle.onEvent(async (e) => {
    if (e.type === 'progress') {
      replayProgress.value = e.framesDone / meta!.frameCount
      replayStatusText.value = `生成中 ${e.framesDone}/${meta!.frameCount}`
      await flush()
    } else {
      // expired：参数已改，绝不能把这批帧写进新参数下的轨迹列表
      if (e.type !== 'expired') await flush(true)
      replayBusy.value = false
      replayProgress.value = e.type === 'completed' ? 1 : replayProgress.value
      replayStatusText.value =
        e.type === 'completed'
          ? `完成：${meta!.frameCount} 帧，干涉帧 ${meta!.interferenceFrames}`
          : e.type === 'cancelled'
            ? `已取消（保留 ${meta!.framesDone}/${meta!.frameCount} 帧，可继续）`
            : e.type === 'expired'
              ? '已过期：参数在生成期间被修改，结果不作为当前有效'
              : `失败：${'error' in e ? e.error : ''}`
      activeRunner.value = null
      await refreshRecords()
      if (e.type === 'completed') {
        const rec = await getTrajectory(meta!.trajId)
        if (rec) loadRecordForPlayback(rec, true)
      }
    }
  })
}

function cancelReplay() {
  activeRunner.value?.cancel()
}

/** 载入一条历史轨迹进行回放（过期轨迹允许查看，但明确标记） */
async function loadRecordForPlayback(rec: TrajectoryRecord, autostart = false) {
  activeRecord.value = rec
  playFrame.value = 0
  playingReplay.value = autostart
  showReplayFrame(0)
  const allFrames = rec.frames
  const locus = allFrames
    .filter((f) => !!f.contactPoint)
    .map((f) => f.contactPoint!)
  const risk = allFrames
    .filter((f) => f.interferes && !!f.contactPoint)
    .map((f) => f.contactPoint!)
  viewer?.setReplayLocus({
    contactLocus: locus,
    riskPoints: risk,
    visible: showOpts.showContact
  })
}

/** 从（可能是取消后未满帧的）记录中按全局帧号取帧 */
function getRecordFrame(rec: TrajectoryRecord, i: number): ReplayFrame | null {
  if (rec.frameIndices && rec.frameIndices.length === rec.frames.length) {
    // 二分查找帧号
    let lo = 0,
      hi = rec.frameIndices.length - 1
    while (lo <= hi) {
      const mid = (lo + hi) >> 1
      if (rec.frameIndices[mid] === i) return rec.frames[mid]
      if (rec.frameIndices[mid] < i) lo = mid + 1
      else hi = mid - 1
    }
    return null
  }
  // 兼容：完整轨迹的密集数组按 index 直取
  return rec.frames[i] ?? null
}

function currentFrame(): ReplayFrame | null {
  const rec = activeRecord.value
  if (!rec) return null
  return getRecordFrame(rec, playFrame.value)
}

function showReplayFrame(i: number) {
  const rec = activeRecord.value
  if (!rec || !viewer) return
  const f = getRecordFrame(rec, i)
  if (!f) return
  viewer.setAngles(f.phi1Mod, f.phi2Mod)
  viewer.setReplayFrame({
    contactPoint: f.contactPoint,
    regions: f.regions,
    interferes: f.interferes
  })
  // 面板接触点读数跟随轨迹（不改动接触滑块的拖动逻辑）
  showOpts.contactS = f.contactS
  contactS.value = f.contactS
}

function playReplay() {
  const rec = activeRecord.value
  if (!rec || rec.framesDone < rec.frameCount) return // 未满帧轨迹不自动播放，可逐帧查看已有帧
  if (playFrame.value >= rec.frameCount - 1) playFrame.value = 0
  playingReplay.value = true
  playLastT = 0
}

function pauseReplay() {
  playingReplay.value = false
}

function stopReplay() {
  playingReplay.value = false
  playFrame.value = 0
  showReplayFrame(0)
}

/** 退出回放，回到实时啮合动画（轨迹保留，可随时重新载入） */
function exitReplay() {
  playingReplay.value = false
  activeRecord.value = null
  renderedFrameIndex = -1
  viewer?.clearReplay()
}

function seekFrame(i: number) {
  const rec = activeRecord.value
  if (!rec) return
  playFrame.value = Math.max(0, Math.min(rec.frameCount - 1, Math.round(i)))
  showReplayFrame(playFrame.value)
}

function stepFrame(delta: number) {
  seekFrame(playFrame.value + delta)
}

/** 跳到下一干涉帧（精确定位风险相位） */
function jumpRisk(dir: 1 | -1) {
  const rec = activeRecord.value
  if (!rec) return
  const n = rec.frameCount
  for (let k = 1; k <= n; k++) {
    const i = (playFrame.value + dir * k + n) % n
    if (getRecordFrame(rec, i)?.interferes) {
      seekFrame(i)
      return
    }
  }
}

function isRecordCurrent(rec: TrajectoryRecord) {
  return rec.status === 'completed' && rec.paramFingerprint === currentFingerprint()
}

async function continueRecord(rec: TrajectoryRecord) {
  if (rec.status === 'completed') {
    await loadRecordForPlayback(rec)
    return
  }
  // 未完成轨迹（取消/失败）：只允许在完全相同的参数下续算；否则只查看已有帧
  if (rec.paramFingerprint !== currentFingerprint()) {
    await loadRecordForPlayback(rec)
    return
  }
  if (!g1.value || !g2.value || !mesh.value) return
  await startReplay(rec)
}

async function removeRecord(rec: TrajectoryRecord) {
  if (activeRecord.value?.trajId === rec.trajId) {
    activeRecord.value = null
    playingReplay.value = false
    viewer?.clearReplay()
  }
  await deleteTrajectory(rec.trajId)
  await refreshRecords()
}

const currentPlayFrame = computed(() => currentFrame())

function statusLabel(r: TrajectoryRecord) {
  const stale = r.paramFingerprint !== currentFingerprint()
  if (stale && r.status === 'completed') return '过期（旧参数）'
  switch (r.status) {
    case 'running':
      return '运行中'
    case 'cancelled':
      return '已取消（可续算）'
    case 'failed':
      return '失败'
    case 'expired':
      return '过期'
    case 'completed':
      return '完成 · 当前有效'
  }
}

function statusClass(r: TrajectoryRecord) {
  if (r.paramFingerprint !== currentFingerprint()) return 'stale'
  return r.status === 'completed' ? 'good' : r.status === 'failed' ? 'bad' : ''
}

// ------- 视图 -------
const host = ref<HTMLDivElement>()
let viewer: GearViewer | null = null
/** RAF 中最近一次实际渲染的回放帧（避免每帧重复写几何体） */
let renderedFrameIndex = -1

function pushOverlay() {
  if (!viewer || !mesh.value) return
  viewer.setMeshOverlay(mesh.value, {
    ...showOpts,
    contactS: contactS.value,
    contactRegions: [interferenceRegions.value]
  })
}

onMounted(async () => {
  rebuild()
  committedFp = currentFingerprint()
  viewer = new GearViewer(host.value!)
  if (g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)

  // 刷新后恢复：上次会话遗留的 running 轨迹一律转 cancelled（可续算、不重复插帧）
  await reconcileOrphanedRuns()
  await refreshRecords()

  const loop = (t: number) => {
    const dt = Math.min(0.05, (t - lastT) / 1000 || 0)
    lastT = t

    // 回放模式优先：严格按轨迹帧驱动（帧帧来自严格相位，不做实时转速积分）
    const rec = activeRecord.value
    if (rec) {
      const complete = rec.framesDone >= rec.frameCount
      if (playingReplay.value && complete) {
        if (!playLastT) playLastT = t
        const step = ((t - playLastT) / 1000) * replayFps.value
        playLastT = t
        let next = playFrame.value + step
        if (next >= rec.frameCount - 1) {
          // 到重复位置即停（首帧 ↔ 末帧为同一姿态）
          next = rec.frameCount - 1
          playingReplay.value = false
        }
        playFrame.value = next
      } else {
        playLastT = 0
      }
      const i = Math.round(playFrame.value)
      if (i !== renderedFrameIndex) {
        renderedFrameIndex = i
        // 未完成轨迹可能有空槽：只在帧存在时渲染，不伪造帧
        if (getRecordFrame(rec, i)) showReplayFrame(i)
      }
      requestAnimationFrame(loop)
      return
    }
    renderedFrameIndex = -1

    if (playing.value && g1.value && g2.value && mesh.value) {
      phi1.value += speed.value * dt
      // 归一到一个齿距周期，避免数值增长
      const period = (2 * Math.PI) / g1.value.input.z
      phi1.value = ((phi1.value % period) + period) % period
      // 接触点 s 随 φ1 同步：dφ1/ds = 1/rb1，相位常量按节点对齐
      const s = (phi1.value - (gearAnglesAt(mesh.value, g1.value, g2.value, 0).phi1)) * g1.value.baseR
      contactS.value = clampS(s)
    }
    if (g1.value && g2.value && mesh.value) {
      const p2 = mateAngle(g1.value, g2.value, mesh.value, phi1.value)
      viewer!.setAngles(phi1.value, p2)
      showOpts.contactS = contactS.value
      pushOverlay()
    }
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)
})

function clampS(s: number) {
  if (!mesh.value) return 0
  const a = mesh.value.actionLine
  const ap = mesh.value.alphaPrime
  const nx = Math.sin(ap),
    ny = Math.cos(ap)
  const sLo =
    (a.p0.x - mesh.value.pitchPoint.x) * nx + (a.p0.y - mesh.value.pitchPoint.y) * ny
  const sHi =
    (a.p1.x - mesh.value.pitchPoint.x) * nx + (a.p1.y - mesh.value.pitchPoint.y) * ny
  // 超出区间则循环到下一齿（让接触点重新进入）
  if (s < sLo) return sHi - ((sLo - s) % (sHi - sLo))
  if (s > sHi) return sLo + ((s - sHi) % (sHi - sLo))
  return s
}

watch(
  () => [gearParams.z1, gearParams.z2, gearParams.m, gearParams.alphaDeg, gearParams.faceWidth, gearParams.useStandardCenter, gearParams.centerDistance],
  async () => {
    // 变化前的参数指纹取自上一次提交快照（此时响应式值已被修改，不能现场重算）
    const oldCaseId = currentCaseId.value
    const oldFp = committedFp

    // 作废正在运行的生成与当前回放视图
    expireRunningForEdit()
    rebuild()
    if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
    phi1.value = 0
    contactS.value = 0
    interferenceArea.value = null
    interferenceRegions.value = []

    if (oldCaseId && oldFp !== null && oldFp !== currentFingerprint()) {
      // 载入案例后又改了参数：该案例下所有历史轨迹都标为过期（仍可查看，不作当前有效）
      await markTrajectoriesExpired(oldCaseId, [])
      currentCaseId.value = null
    }
    committedFp = currentFingerprint()
    await refreshRecords()
  }
)

watch(showOpts, () => {
  pushOverlay()
  if (activeRecord.value) {
    const rec = activeRecord.value
    viewer?.setReplayLocus({
      visible: showOpts.showContact,
      contactLocus: rec.frames.filter((f) => !!f.contactPoint).map((f) => f.contactPoint!),
      riskPoints: rec.frames.filter((f) => f.interferes && !!f.contactPoint).map((f) => f.contactPoint!)
    })
  }
})
watch(contactS, () => (showOpts.contactS = contactS.value))

// ------- 暂停时手动检查 -------
function pause() {
  playing.value = false
}
function resume() {
  playing.value = true
}

/** 暂停时手动拖动接触点：把轮1 转到与该 s 严格对应的相位（同一条渐开线接触） */
function scrubContact() {
  if (playing.value || !g1.value || !g2.value || !mesh.value) return
  phi1.value = gearAnglesAt(mesh.value, g1.value, g2.value, contactS.value).phi1
}

// ------- 案例库 -------
const cases = ref<CaseData[]>([])
const caseName = ref('未命名案例')
const caseNote = ref('')
/** 当前参数所属的案例 id（载入案例后沿用；编辑参数则换绑新 id，旧案例轨迹保留） */
const currentCaseId = ref<string | null>(null)

async function refreshCases() {
  cases.value = await listCases()
  await refreshCaseTrajCounts()
}
onMounted(refreshCases)

/** 已存案例的已完成轨迹数量（列表标注用） */
const caseTrajCounts = ref<Record<string, number>>({})
async function refreshCaseTrajCounts() {
  const counts: Record<string, number> = {}
  for (const c of cases.value) {
    const ts = await listTrajectories(c.id)
    counts[c.id] = ts.filter((t) => t.status === 'completed').length
  }
  caseTrajCounts.value = counts
}

function currentCaseData(withOutlines: boolean, withTrajectories = false): CaseData {
  const a = mesh.value?.a ?? gearParams.centerDistance
  const id = currentCaseId.value ?? newCaseId()
  const data: CaseData = {
    schemaVersion: 1,
    id,
    name: caseName.value,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    note: caseNote.value,
    gear1: {
      z: gearParams.z1,
      module: gearParams.m,
      alpha: gearParams.alphaDeg * DEG,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    gear2: {
      z: gearParams.z2,
      module: gearParams.m,
      alpha: gearParams.alphaDeg * DEG,
      alphaDeg: gearParams.alphaDeg,
      faceWidth: gearParams.faceWidth
    },
    centerDistance: gearParams.useStandardCenter ? null : a,
    unit: unit.value,
    outlines:
      withOutlines && g1.value && g2.value
        ? { gear1: g1.value.outline, gear2: g2.value.outline }
        : undefined
  }
  void withTrajectories // 轨迹由 saveCurrent 异步附加（需要查库）
  return data
}

async function saveCurrent(withOutlines: boolean) {
  // 首次保存时沿用 currentCaseId；之后保存沿用同一 id，轨迹始终关联本案例
  const isNew = !currentCaseId.value
  if (isNew) currentCaseId.value = newCaseId()
  const newId = currentCaseId.value!
  const data = currentCaseData(withOutlines)
  await saveCase(data)
  if (isNew) {
    // 生成轨迹时尚未保存案例：把未绑定轨迹绑定到新案例 id
    const loose = await listTrajectories(null)
    for (const r of loose) await saveTrajectory({ ...r, caseId: newId })
  }
  await refreshCases()
  await refreshRecords()
}

async function exportCase(withOutlines: boolean, withTrajectories = false) {
  // 导出不改变当前案例绑定：没有 id 时只生成一次性 id 给 JSON，轨迹为空数组
  const hadId = !!currentCaseId.value
  const exportId = currentCaseId.value ?? newCaseId()
  if (!hadId) currentCaseId.value = exportId
  const data = currentCaseData(withOutlines)
  if (withTrajectories) {
    // 仅附带帧完整的 completed 轨迹；没有轨迹就是空数组，不会伪造“已验证”
    data.trajectories = await exportableTrajectories(exportId)
  }
  downloadJson(data)
  if (!hadId) currentCaseId.value = null
}

async function loadCase(c: CaseData) {
  expireRunningForEdit()
  gearParams.z1 = c.gear1.z
  gearParams.z2 = c.gear2.z
  gearParams.m = c.gear1.module
  gearParams.alphaDeg = c.gear1.alphaDeg
  gearParams.faceWidth = c.gear1.faceWidth
  if (c.centerDistance == null) {
    gearParams.useStandardCenter = true
  } else {
    gearParams.useStandardCenter = false
    gearParams.centerDistance = c.centerDistance
  }
  unit.value = c.unit || 'mm'
  caseName.value = c.name
  caseNote.value = c.note
  currentCaseId.value = c.id
  rebuild()
  // 关键：在参数 watcher（下一个 tick）触发前提交新指纹，
  // 否则它会拿载入前的旧指纹把本案例自己的轨迹误标为过期。
  committedFp = currentFingerprint()
  if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
  phi1.value = 0
  contactS.value = 0

  // 载入后重新计算参数指纹：导入文件里附带的轨迹只有指纹匹配才关联为当前结果
  if (c.trajectories?.length) {
    await importTrajectoriesForCase(c.id, c.trajectories, currentFingerprint())
  }
  await refreshRecords()
}

async function removeCase(id: string) {
  if (currentCaseId.value === id) expireRunningForEdit()
  await deleteTrajectoriesByCase(id)
  await deleteCase(id)
  await refreshCases()
  await refreshRecords()
}

function importFile(ev: Event) {
  const input = ev.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = async () => {
    try {
      const c = parseCase(String(reader.result))
      await saveCase(c)
      await loadCase(c)
      await refreshCases()
    } catch (e) {
      alert('导入失败：' + (e as Error).message)
    }
  }
  reader.readAsText(file)
  input.value = ''
}

// ------- 派生显示 -------
const dims = computed(() => {
  if (!g1.value || !g2.value || !mesh.value) return null
  return { g1: g1.value, g2: g2.value, mesh: mesh.value }
})

/** 实际啮合线参数 s 的两端（用于接触点滑块） */
const sBounds = computed<[number, number]>(() => {
  if (!mesh.value) return [-30, 30]
  const m = mesh.value
  const nx = Math.sin(m.alphaPrime),
    ny = Math.cos(m.alphaPrime)
  const lo = (m.actionLine.p0.x - m.pitchPoint.x) * nx + (m.actionLine.p0.y - m.pitchPoint.y) * ny
  const hi = (m.actionLine.p1.x - m.pitchPoint.x) * nx + (m.actionLine.p1.y - m.pitchPoint.y) * ny
  return [Math.floor(lo * 10) / 10, Math.ceil(hi * 10) / 10]
})

function fmt(mm: number) {
  return fmtLen(mm, unit.value)
}

// 预设样本：标准齿数与极少齿数，便于核对
function preset(z1: number, z2: number, m = 2, alphaDeg = 20) {
  gearParams.z1 = z1
  gearParams.z2 = z2
  gearParams.m = m
  gearParams.alphaDeg = alphaDeg
  gearParams.useStandardCenter = true
}
</script>

<template>
  <div class="app">
    <header>
      <h1>直齿圆柱齿轮参数化实验室</h1>
      <div class="sub">外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）</div>
    </header>

    <main>
      <aside class="panel">
        <section>
          <h2>显示单位（不改变实际尺寸）</h2>
          <div class="units">
            <button v-for="u in Object.keys(UNITS)" :key="u" :class="{ active: unit === u }" @click="unit = u as LengthUnit">
              {{ UNITS[u as LengthUnit].label }}
            </button>
          </div>
        </section>

        <section>
          <h2>齿轮参数</h2>
          <label>压力角 α（度）
            <input type="number" v-model.number="gearParams.alphaDeg" min="1" max="45" step="0.5" />
          </label>
          <label>模数 m（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="mInput" :step="UNITS[unit].step" />
          </label>
          <label>齿宽 b（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="faceInput" :step="UNITS[unit].step" />
          </label>
          <div class="two">
            <label>齿数 z₁
              <input type="number" v-model.number="gearParams.z1" min="4" step="1" />
            </label>
            <label>齿数 z₂
              <input type="number" v-model.number="gearParams.z2" min="4" step="1" />
            </label>
          </div>
          <div v-if="errors.g1.length" class="err">{{ errors.g1.join('；') }}</div>
          <div v-if="errors.g2.length" class="err">{{ errors.g2.join('；') }}</div>
        </section>

        <section>
          <h2>中心距</h2>
          <label class="row">
            <input type="checkbox" v-model="gearParams.useStandardCenter" /> 使用标准中心距 a₀ = m(z₁+z₂)/2
          </label>
          <label v-if="!gearParams.useStandardCenter">实际中心距 a（{{ UNITS[unit].label }}）
            <input type="number" v-model.number="centerInput" :step="UNITS[unit].step" />
          </label>
        </section>

        <section>
          <h2>运动 / 检查</h2>
          <div class="row">
            <button @click="pause" :disabled="!playing">暂停</button>
            <button @click="resume" :disabled="playing">继续</button>
          </div>
          <label>轮1 角速度（rad/s）
            <input type="range" v-model.number="speed" min="0" max="1.5" step="0.01" />
          </label>
          <label>接触点沿啮合线 s（mm，暂停可拖动）
            <input type="range" :disabled="playing" v-model.number="contactS" :min="sBounds[0]" :max="sBounds[1]" step="0.05" @input="scrubContact" />
          </label>
          <button class="wide" @click="checkInterference(phi1)" :disabled="playing || interferenceBusy">
            {{ interferenceBusy ? 'Clipper 求交中…' : '在当前帧做局部干涉求交（Clipper2 WASM）' }}
          </button>
          <div v-if="interferenceArea !== null" class="report">
            重叠面积 = {{ interferenceArea.toExponential(3) }} mm²
            <b :class="interferenceArea > 1e-6 ? 'bad' : 'good'">
              {{ interferenceArea > 1e-6 ? '存在实体干涉 ❗' : '当前帧无干涉 ✅' }}
            </b>
          </div>
        </section>

        <section>
          <h2>显示选项</h2>
          <label class="row"><input type="checkbox" v-model="showOpts.showPitchCircle" /> 节圆/分度圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showBaseCircle" /> 基圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showAddendumCircle" /> 齿顶圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showDedendumCircle" /> 齿根圆</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showActionLine" /> 啮合线（理论/实际）</label>
          <label class="row"><input type="checkbox" v-model="showOpts.showContact" /> 接触点</label>
        </section>

        <section>
          <h2>核对样本</h2>
          <div class="samples">
            <button @click="preset(20,40)">20/40 标准</button>
            <button @click="preset(17,17)">17/17 临界</button>
            <button @click="preset(16,40)">16/40 根切</button>
            <button @click="preset(12,40)">12/40 极少齿</button>
          </div>
        </section>

        <section class="replay-panel">
          <h2>啮合周期回放</h2>
          <div v-if="replayInfo" class="replay-meta">
            <div>真正重复周期 N = lcm(z₁,z₂) = <b>{{ replayInfo.N }}</b> 个齿对步</div>
            <div class="sub">周期末轮1 转 {{ replayInfo.N / gearParams.z1 }} 圈、轮2 转 {{ replayInfo.N / gearParams.z2 }} 圈后同一齿对回到原位</div>
            <div>有效接触段 s：[{{ replayInfo.sEnter.toFixed(2) }}, {{ replayInfo.sExit.toFixed(2) }}] mm</div>
            <div class="row">
              <label>每齿对步采样
                <select v-model.number="replaySteps" :disabled="replayBusy">
                  <option :value="8">8 帧（粗）</option>
                  <option :value="16">16 帧（标准）</option>
                  <option :value="32">32 帧（细）</option>
                </select>
              </label>
              <label class="row"><input type="checkbox" v-model="replayWithRegions" :disabled="replayBusy" /> 保存干涉区域</label>
            </div>
            <div>总帧数 ≈ <b>{{ replayInfo.frames }}</b>（每帧一次 Clipper 求交）</div>
          </div>
          <div class="row">
            <button class="wide" @click="startReplay()" :disabled="replayBusy || !dims">
              {{ replayBusy ? '生成中…' : '生成整个啮合周期轨迹' }}
            </button>
            <button @click="cancelReplay" :disabled="!replayBusy">取消</button>
          </div>
          <div v-if="replayStatusText" class="report" :class="{ 'replay-done': replayProgress >= 1 && !replayBusy }">
            {{ replayStatusText }}
          </div>
          <progress v-if="replayBusy || replayProgress > 0" :value="replayProgress" max="1" style="width:100%"></progress>

          <div v-if="activeRecord" class="player">
            <h3>播放器<span v-if="!isRecordCurrent(activeRecord)" class="badge stale">过期轨迹 · 旧参数</span><span v-else class="badge current">当前参数有效</span></h3>
            <div class="row">
              <button @click="exitReplay" class="del">✕ 退出回放</button>
            </div>
            <div class="row">
              <button @click="playReplay" :disabled="playingReplay || activeRecord.framesDone < activeRecord.frameCount">▶ 播放</button>
              <button @click="pauseReplay" :disabled="!playingReplay">⏸ 暂停</button>
              <button @click="stopReplay">⏹ 回到首帧</button>
            </div>
            <div class="row">
              <button @click="stepFrame(-1)">◀ 帧</button>
              <button @click="stepFrame(1)">帧 ▶</button>
              <button @click="jumpRisk(-1)">↑ 上一干涉帧</button>
              <button @click="jumpRisk(1)">下一干涉帧 ↓</button>
            </div>
            <label>精确跳转：帧 <input type="number" :value="Math.round(playFrame)" min="0" :max="activeRecord.frameCount - 1" step="1" @input="seekFrame(Number(($event.target as HTMLInputElement).value))" /> / {{ activeRecord.frameCount - 1 }}</label>
            <input type="range" :value="Math.round(playFrame)" min="0" :max="activeRecord.frameCount - 1" step="1" @input="seekFrame(Number(($event.target as HTMLInputElement).value))" />
            <label>播放速度（帧/秒）
              <input type="range" v-model.number="replayFps" min="2" max="120" step="1" />
            </label>
            <div v-if="currentPlayFrame" class="frameinfo">
              <div>帧 {{ currentPlayFrame.index }} / {{ activeRecord.frameCount - 1 }}（q = {{ currentPlayFrame.q.toFixed(3) }} mm）</div>
              <div>φ₁ = {{ (currentPlayFrame.phi1Mod / DEG).toFixed(2) }}°，φ₂ = {{ (currentPlayFrame.phi2Mod / DEG).toFixed(2) }}°（连续：{{ currentPlayFrame.phi1.toFixed(3) }} / {{ currentPlayFrame.phi2.toFixed(3) }} rad）</div>
              <div>
                主齿对：
                <template v-if="currentPlayFrame.primary">
                  （轮1 齿 <b>{{ currentPlayFrame.primary.tooth1 }}</b>，轮2 齿 <b>{{ currentPlayFrame.primary.tooth2 }}</b>）
                  · s = {{ currentPlayFrame.contactS.toFixed(3) }} mm
                  <span class="phase-tag" :class="currentPlayFrame.contactS < -0.02 ? 'enter' : currentPlayFrame.contactS > 0.02 ? 'exit' : 'pitch'">
                    {{ currentPlayFrame.contactS < -0.02 ? '啮入' : currentPlayFrame.contactS > 0.02 ? '啮出' : '过节点' }}
                  </span>
                </template>
                <span v-else>无接触（εα&lt;1 空程）</span>
              </div>
              <div>同时接触齿对数：{{ currentPlayFrame.activePairs.length }}
                <span v-for="p in currentPlayFrame.activePairs" :key="p.pairId" class="pairchip">({{ p.tooth1 }},{{ p.tooth2 }})@{{ p.s.toFixed(2) }}</span>
              </div>
              <div :class="currentPlayFrame.interferes ? 'bad' : 'good'">
                局部干涉：{{ currentPlayFrame.interferes ? `重叠 ${currentPlayFrame.interferenceArea.toExponential(2)} mm² ❗` : '无 ✅' }}
              </div>
            </div>
          </div>
        </section>

        <section class="replay-history">
          <h2>本案例轨迹历史</h2>
          <ul class="trajlist">
            <li v-for="r in records" :key="r.trajId" :class="{ stale: !isRecordCurrent(r) }">
              <div class="ci">
                <b>N={{ r.periodPairs }} · {{ r.framesDone }}/{{ r.frameCount }} 帧</b>
                <span>
                  <i :class="statusClass(r)">{{ statusLabel(r) }}</i>
                  · 干涉帧 {{ r.interferenceFrames }}
                </span>
              </div>
              <div class="ca">
                <button @click="continueRecord(r)">{{ r.status === 'completed' ? '回放' : '继续/回放' }}</button>
                <button class="del" @click="removeRecord(r)">删</button>
              </div>
            </li>
            <li v-if="!records.length" class="empty">暂无轨迹（未生成不会被标记为已验证）</li>
          </ul>
        </section>
      </aside>

      <section class="viewport">
        <div ref="host" class="canvas-host"></div>

        <div class="readouts">
          <div v-if="dims" class="dim-grid">
            <table>
              <thead><tr><th></th><th>齿轮 1（z₁={{ gearParams.z1 }}）</th><th>齿轮 2（z₂={{ gearParams.z2 }}）</th></tr></thead>
              <tbody>
                <tr><td>分度圆直径 d</td><td>{{ fmt(dims.g1.pitchR * 2) }}</td><td>{{ fmt(dims.g2.pitchR * 2) }}</td></tr>
                <tr><td>基圆直径 d_b</td><td>{{ fmt(dims.g1.baseR * 2) }}</td><td>{{ fmt(dims.g2.baseR * 2) }}</td></tr>
                <tr><td>齿顶圆 d_a</td><td>{{ fmt(dims.g1.addendumR * 2) }}</td><td>{{ fmt(dims.g2.addendumR * 2) }}</td></tr>
                <tr><td>齿根圆 d_f</td><td>{{ fmt(dims.g1.dedendumR * 2) }}</td><td>{{ fmt(dims.g2.dedendumR * 2) }}</td></tr>
                <tr><td>齿距 p = πm</td><td>{{ fmt(dims.g1.circularPitch) }}</td><td>{{ fmt(dims.g2.circularPitch) }}</td></tr>
                <tr><td>基节 p_b</td><td>{{ fmt(dims.g1.basePitch) }}</td><td>{{ fmt(dims.g2.basePitch) }}</td></tr>
                <tr><td>齿顶压力角 α_a</td><td>{{ (dims.g1.alphaTip / DEG).toFixed(2) }}°</td><td>{{ (dims.g2.alphaTip / DEG).toFixed(2) }}°</td></tr>
                <tr><td>根切风险 (z&lt;{{ dims.g1.zMinValue.toFixed(1) }})</td>
                  <td :class="dims.g1.undercut ? 'bad' : 'good'">{{ dims.g1.undercut ? '根切 ❗' : '安全' }}</td>
                  <td :class="dims.g2.undercut ? 'bad' : 'good'">{{ dims.g2.undercut ? '根切 ❗' : '安全' }}</td></tr>
              </tbody>
            </table>

            <div class="mesh-report">
              <h3>啮合检查</h3>
              <div>标准中心距 a₀：<b>{{ fmt(dims.mesh.a0) }}</b></div>
              <div>实际中心距 a：<b>{{ fmt(dims.mesh.a) }}</b>（Δa = {{ fmt(dims.mesh.deltaA) }}）</div>
              <div>啮合角 α′：<b>{{ (dims.mesh.alphaPrime / DEG).toFixed(3) }}°</b></div>
              <div>节圆半径 r₁′/r₂′：<b>{{ fmt(dims.mesh.pitchR1) }} / {{ fmt(dims.mesh.pitchR2) }}</b></div>
              <div>实际啮合线长度 g_α：<b>{{ fmt(dims.mesh.pathOfContact) }}</b></div>
              <div>重合度 ε_α = g_α/p_b：<b :class="dims.mesh.contactRatio < 1 ? 'bad' : 'good'">{{ dims.mesh.contactRatio.toFixed(3) }}</b></div>
              <div>圆周/法向侧隙：<b>{{ fmt(dims.mesh.backlashTangential) }} / {{ fmt(dims.mesh.backlashNormal) }}</b></div>
              <div>顶隙 c：<b>{{ fmt(dims.mesh.clearance12) }}</b></div>
              <div>基节一致：<b :class="dims.mesh.basePitchMatch ? 'good' : 'bad'">{{ dims.mesh.basePitchMatch ? '是 ✅' : '否 ❌' }}</b></div>
              <ul v-if="dims.mesh.warnings.length" class="warns">
                <li v-for="(w, i) in dims.mesh.warnings" :key="i">⚠️ {{ w }}</li>
              </ul>
              <div class="formula">
                渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α；
                啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。
              </div>
            </div>
          </div>
        </div>
      </section>

      <aside class="panel right">
        <section>
          <h2>案例（IndexedDB）</h2>
          <input v-model="caseName" placeholder="案例名称" />
          <textarea v-model="caseNote" placeholder="备注（可选）" rows="2"></textarea>
          <div class="row">
            <button @click="saveCurrent(true)">保存（含轮廓）</button>
            <button @click="saveCurrent(false)">仅参数</button>
          </div>
          <div class="row">
            <button @click="exportCase(true)">导出 JSON+轮廓</button>
            <button @click="exportCase(false)">导出参数</button>
          </div>
          <button class="wide" @click="exportCase(true, true)">导出 JSON（含轮廓 + 已完成轨迹）</button>
          <label class="wide filebtn">导入 JSON
            <input type="file" accept="application/json,.json" @change="importFile" hidden />
          </label>
        </section>
        <section>
          <h2>已存案例</h2>
          <ul class="caselist">
            <li v-for="c in cases" :key="c.id">
              <div class="ci">
                <b>{{ c.name }}</b>
                <span>{{ c.gear1.z }}/{{ c.gear2.z }} · m={{ c.gear1.module }} · α={{ c.gear1.alphaDeg }}°{{ c.outlines ? ' · 含轮廓' : '' }}<template v-if="caseTrajCounts[c.id]"> · ✅ {{ caseTrajCounts[c.id] }} 条周期轨迹</template></span>
              </div>
              <div class="ca">
                <button @click="loadCase(c)">载入</button>
                <button class="del" @click="removeCase(c.id)">删</button>
              </div>
            </li>
            <li v-if="!cases.length" class="empty">暂无案例</li>
          </ul>
        </section>
      </aside>
    </main>
  </div>
</template>
