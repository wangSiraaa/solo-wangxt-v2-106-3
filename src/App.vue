<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import { buildGear, validateGearInput, DEG, transformOutline, type GearGeometry, type Pt } from './geometry/gear'
import { analyzeMesh, gearAnglesAt, mateAngle, type MeshInfo } from './geometry/mesh'
import { meshCycle, actionSpan } from './geometry/cycle'
import { runTrajectoryJob, type TrajectoryFrame } from './geometry/trajgen'
import { intersectOutlines } from './geometry/clipper'
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
import {
  type TrajectoryRecord,
  type TrajectoryParams,
  type EffectiveStatus,
  caseFingerprint,
  effectiveStatus,
  newTrajectoryId,
  saveTrajectory,
  getTrajectory,
  listTrajectoriesForCase,
  deleteTrajectory,
  recoverInterruptedTrajectories,
  countFrames,
  getFrames,
  idbFrameSink
} from './trajectoryStore'

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

/** 当前几何的（参数+轮廓）指纹：轨迹有效性以此为基准 */
const currentFingerprint = ref('')

function currentTrajParams(): TrajectoryParams {
  return {
    z1: Math.round(gearParams.z1),
    z2: Math.round(gearParams.z2),
    module: gearParams.m,
    alphaDeg: gearParams.alphaDeg,
    faceWidth: gearParams.faceWidth,
    centerDistance: gearParams.useStandardCenter ? null : gearParams.centerDistance
  }
}

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
  currentFingerprint.value = caseFingerprint(currentTrajParams(), g1.value.outline, g2.value.outline)
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
const cycleInfo = computed(() =>
  g1.value && g2.value ? meshCycle(g1.value.input.z, g2.value.input.z) : null
)
const framesPerEngagement = ref(6)
const estimatedFrames = computed(() =>
  cycleInfo.value ? cycleInfo.value.pairsPerCycle * (Math.max(1, framesPerEngagement.value) + 1) + 1 : 0
)

const trajectories = ref<TrajectoryRecord[]>([])
const trajJob = reactive({ running: false, done: 0, total: 0, id: '' })
let trajCancelFlag = false

const replay = reactive({
  active: false,
  trajId: '',
  frames: [] as TrajectoryFrame[],
  index: 0,
  playing: false,
  fps: 30,
  expired: false,
  pairsPerCycle: 0
})
let replayAcc = 0

const currentFrame = computed<TrajectoryFrame | null>(() =>
  replay.active && replay.frames.length ? replay.frames[replay.index] : null
)

async function refreshTrajectories() {
  trajectories.value = currentCaseId.value ? await listTrajectoriesForCase(currentCaseId.value) : []
}

function trajStatus(rec: TrajectoryRecord): EffectiveStatus {
  return effectiveStatus(rec, currentFingerprint.value || null)
}

const STATUS_LABELS: Record<EffectiveStatus, string> = {
  running: '生成中…',
  cancelled: '已取消（可继续）',
  failed: '失败',
  completed: '完成 ✅（当前有效）',
  expired: '已过期（历史，仅供查看）'
}
function statusLabel(s: EffectiveStatus) {
  return STATUS_LABELS[s]
}

/** 生成（或继续生成）一条轨迹；长任务，逐帧 Clipper 求交，可取消 */
async function runTrajJob(rec: TrajectoryRecord) {
  if (!g1.value || !g2.value || !mesh.value) return
  trajJob.running = true
  trajJob.id = rec.id
  trajCancelFlag = false
  try {
    const result = await runTrajectoryJob({
      g1: g1.value,
      g2: g2.value,
      mesh: mesh.value,
      trajId: rec.id,
      framesPerEngagement: rec.framesPerEngagement,
      sink: idbFrameSink(rec.id),
      shouldCancel: () => trajCancelFlag,
      onProgress: (done, total) => {
        trajJob.done = done
        trajJob.total = total
      },
      yieldControl: () => new Promise((r) => setTimeout(r, 0))
    })
    const fresh = await getTrajectory(rec.id)
    if (fresh) {
      fresh.status = result === 'completed' ? 'completed' : 'cancelled'
      fresh.framesDone = await countFrames(rec.id)
      await saveTrajectory(fresh)
    }
  } catch (e) {
    const fresh = await getTrajectory(rec.id)
    if (fresh) {
      fresh.status = 'failed'
      fresh.error = String((e as Error)?.message ?? e)
      fresh.framesDone = await countFrames(rec.id)
      await saveTrajectory(fresh)
    }
  } finally {
    trajJob.running = false
    await refreshTrajectories()
  }
}

async function generateTrajectory() {
  if (!g1.value || !g2.value || !mesh.value || trajJob.running) return
  // 轨迹必须绑定持久化案例：参数未保存或已修改时先存一个快照案例
  if (!currentCaseId.value || paramsDirty) await saveCurrent(false)
  const caseId = currentCaseId.value!
  const cycle = cycleInfo.value!
  const [sEnter, sExit] = actionSpan(mesh.value)
  const rec: TrajectoryRecord = {
    id: newTrajectoryId(),
    caseId,
    name: `${caseName.value || '案例'} · ${new Date().toLocaleString()}`,
    fingerprint: currentFingerprint.value,
    params: currentTrajParams(),
    cycle,
    sEnter,
    sExit,
    framesPerEngagement: Math.max(1, Math.round(framesPerEngagement.value)),
    frameCount: cycle.pairsPerCycle * (Math.max(1, Math.round(framesPerEngagement.value)) + 1) + 1,
    framesDone: 0,
    status: 'running',
    createdAt: Date.now(),
    updatedAt: Date.now()
  }
  await saveTrajectory(rec)
  await refreshTrajectories()
  await runTrajJob(rec)
}

function cancelTrajectory() {
  trajCancelFlag = true
}

/** 续算：仅当轨迹指纹与当前参数一致才有意义（几何相同，帧号确定，幂等） */
async function resumeTrajectory(rec: TrajectoryRecord) {
  if (trajJob.running) return
  if (rec.fingerprint !== currentFingerprint.value) return
  await saveTrajectory({ ...rec, status: 'running' })
  await refreshTrajectories()
  await runTrajJob(rec)
}

async function removeTrajectory(id: string) {
  if (replay.trajId === id) exitReplay()
  await deleteTrajectory(id)
  await refreshTrajectories()
}

async function startReplay(rec: TrajectoryRecord) {
  const frames = await getFrames(rec.id)
  if (!frames.length) return
  playing.value = false
  replay.active = true
  replay.trajId = rec.id
  replay.frames = frames
  replay.index = 0
  replay.playing = false
  replay.expired = trajStatus(rec) === 'expired'
  replay.pairsPerCycle = rec.cycle.pairsPerCycle
  replayAcc = 0
}

function exitReplay() {
  replay.active = false
  replay.playing = false
  replay.trajId = ''
  replay.frames = []
  interferenceArea.value = null
  interferenceRegions.value = []
}

/** 跳到下一个/上一个有干涉记录的帧（干涉记录可定位） */
function jumpInterference(dir: 1 | -1) {
  const n = replay.frames.length
  if (!n) return
  for (let step = 1; step <= n; step++) {
    const idx = (replay.index + dir * step + n * step) % n
    if (replay.frames[idx].interferes) {
      replay.index = idx
      replay.playing = false
      return
    }
  }
}

// ------- 视图 -------
const host = ref<HTMLDivElement>()
let viewer: GearViewer | null = null

function pushOverlay() {
  if (!viewer || !mesh.value) return
  viewer.setMeshOverlay(mesh.value, {
    ...showOpts,
    contactS: contactS.value,
    contactRegions: [interferenceRegions.value]
  })
}

onMounted(() => {
  rebuild()
  viewer = new GearViewer(host.value!)
  if (g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)

  const loop = (t: number) => {
    const dt = Math.min(0.05, (t - lastT) / 1000 || 0)
    lastT = t
    if (replay.active && replay.frames.length) {
      // 周期回放：角度/接触点/干涉全部取自轨迹帧（严格相位序列），不做自由旋转
      if (replay.playing) {
        replayAcc += dt * replay.fps
        while (replayAcc >= 1) {
          replayAcc -= 1
          if (replay.index < replay.frames.length - 1) replay.index++
          else {
            replay.playing = false // 播到重复位置停止；拖回滑块可重播
            break
          }
        }
      }
      const f = replay.frames[replay.index]
      viewer!.setAngles(f.phi1, f.phi2)
      contactS.value = f.s
      interferenceArea.value = f.interferenceArea
      interferenceRegions.value = f.regions
      showOpts.contactS = f.s
      pushOverlay()
    } else {
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
  () => {
    paramsDirty = true
    trajCancelFlag = true // 参数变了：正在生成的轨迹失去意义，安全取消（已写帧保留为历史）
    if (replay.active) exitReplay()
    rebuild()
    if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
    phi1.value = 0
    contactS.value = 0
    interferenceArea.value = null
    interferenceRegions.value = []
  }
)

watch(showOpts, pushOverlay)
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
/** 当前参数对应的已存案例 id；轨迹记录挂在它下面 */
const currentCaseId = ref<string | null>(null)
/** 参数自上次保存/载入后是否被修改过 */
let paramsDirty = true

async function refreshCases() {
  cases.value = await listCases()
}
onMounted(async () => {
  // 上次会话若有"生成中"的轨迹，说明页面被刷新/关闭中断：降级为"已取消"，可安全续算
  await recoverInterruptedTrajectories()
  await refreshCases()
  await refreshTrajectories()
})

function currentCaseData(withOutlines: boolean): CaseData {
  const a = mesh.value?.a ?? gearParams.centerDistance
  return {
    schemaVersion: 1,
    id: newCaseId(),
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
}

async function saveCurrent(withOutlines: boolean) {
  const data = currentCaseData(withOutlines)
  await saveCase(data)
  currentCaseId.value = data.id
  paramsDirty = false
  await refreshCases()
  await refreshTrajectories()
}

function exportCase(withOutlines: boolean) {
  downloadJson(currentCaseData(withOutlines))
}

async function loadCase(c: CaseData) {
  if (replay.active) exitReplay()
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
  rebuild()
  if (viewer && g1.value && g2.value && mesh.value) viewer.setGears(g1.value, g2.value, mesh.value.a)
  await nextTick() // 等参数 watcher 跑完再落定"未修改"状态，避免被误标为已修改
  currentCaseId.value = c.id
  paramsDirty = false
  await refreshTrajectories()
}

async function removeCase(id: string) {
  // 级联删除该案例下的轨迹（记录 + 帧）
  for (const tr of await listTrajectoriesForCase(id)) await deleteTrajectory(tr.id)
  if (currentCaseId.value === id) {
    currentCaseId.value = null
    trajectories.value = []
  }
  await deleteCase(id)
  await refreshCases()
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
            <button @click="pause" :disabled="!playing || replay.active">暂停</button>
            <button @click="resume" :disabled="playing || replay.active">继续</button>
          </div>
          <label>轮1 角速度（rad/s）
            <input type="range" v-model.number="speed" min="0" max="1.5" step="0.01" :disabled="replay.active" />
          </label>
          <label>接触点沿啮合线 s（mm，暂停可拖动）
            <input type="range" :disabled="playing || replay.active" v-model.number="contactS" :min="sBounds[0]" :max="sBounds[1]" step="0.05" @input="scrubContact" />
          </label>
          <button class="wide" @click="checkInterference(phi1)" :disabled="playing || interferenceBusy || replay.active">
            {{ interferenceBusy ? 'Clipper 求交中…' : '在当前帧做局部干涉求交（Clipper2 WASM）' }}
          </button>
          <div v-if="interferenceArea !== null && !replay.active" class="report">
            重叠面积 = {{ interferenceArea.toExponential(3) }} mm²
            <b :class="interferenceArea > 1e-6 ? 'bad' : 'good'">
              {{ interferenceArea > 1e-6 ? '存在实体干涉 ❗' : '当前帧无干涉 ✅' }}
            </b>
          </div>
        </section>

        <section>
          <h2>啮合周期回放</h2>
          <div v-if="cycleInfo" class="report">
            <div>每周期啮合次数 lcm(z₁,z₂)：<b>{{ cycleInfo.pairsPerCycle }}</b>（gcd = {{ cycleInfo.gcd }}）</div>
            <div>重复周期：轮1 转 <b>{{ cycleInfo.rev1 }}</b> 周 / 轮2 转 <b>{{ cycleInfo.rev2 }}</b> 周</div>
            <div>周期转角 φ₁：<b>{{ cycleInfo.periodPhi1.toFixed(3) }}</b> rad（{{ (cycleInfo.periodPhi1 / DEG).toFixed(1) }}°）</div>
            <div v-if="cycleInfo.gcd === 1" class="dim">z₁、z₂ 互质：每颗齿都要与对方全部齿各啮合一次才重复，周期最长。</div>
          </div>
          <label>每次啮合采样帧数（含两端）
            <input type="number" v-model.number="framesPerEngagement" min="1" max="40" step="1" :disabled="trajJob.running" />
          </label>
          <div class="dim">预计 {{ estimatedFrames }} 帧，逐帧 Clipper 求交；帧数大时耗时较长，可随时取消、稍后继续。</div>
          <div class="row">
            <button @click="generateTrajectory" :disabled="trajJob.running || !!errors.g1.length || !!errors.g2.length || replay.active">
              {{ trajJob.running ? `生成中 ${trajJob.done}/${trajJob.total}…` : '生成周期轨迹' }}
            </button>
            <button v-if="trajJob.running" @click="cancelTrajectory">取消</button>
          </div>
          <div v-if="trajJob.running" class="progress"><div class="bar" :style="{ width: (100 * trajJob.done / Math.max(1, trajJob.total)) + '%' }"></div></div>
          <ul class="caselist trajlist">
            <li v-for="tr in trajectories" :key="tr.id" :class="{ expired: trajStatus(tr) === 'expired' }">
              <div class="ci">
                <b>{{ tr.name }}</b>
                <span>{{ tr.framesDone }}/{{ tr.frameCount }} 帧 · {{ statusLabel(trajStatus(tr)) }}</span>
                <span v-if="tr.status === 'failed' && tr.error" class="bad">{{ tr.error }}</span>
              </div>
              <div class="ca">
                <button @click="startReplay(tr)" :disabled="tr.framesDone === 0 || trajJob.running">回放</button>
                <button v-if="(tr.status === 'cancelled' || tr.status === 'failed') && trajStatus(tr) !== 'expired'"
                        @click="resumeTrajectory(tr)" :disabled="trajJob.running">继续</button>
                <button class="del" @click="removeTrajectory(tr.id)" :disabled="trajJob.running && trajJob.id === tr.id">删</button>
              </div>
            </li>
            <li v-if="!trajectories.length" class="empty">当前案例暂无轨迹（生成时自动保存案例快照）</li>
          </ul>
          <div v-if="replay.active" class="replay">
            <div class="row">
              <button @click="replay.playing = true" :disabled="replay.playing">播放</button>
              <button @click="replay.playing = false" :disabled="!replay.playing">暂停</button>
              <button @click="exitReplay">退出回放</button>
            </div>
            <label>帧 {{ replay.index + 1 }} / {{ replay.frames.length }}（可精确跳转）
              <input type="range" min="0" :max="Math.max(0, replay.frames.length - 1)" step="1"
                     v-model.number="replay.index" @input="replay.playing = false" />
            </label>
            <div class="row">
              <button @click="jumpInterference(-1)">← 上一干涉帧</button>
              <button @click="jumpInterference(1)">下一干涉帧 →</button>
            </div>
            <div v-if="currentFrame" class="report">
              <div>
                <template v-if="currentFrame.engagement >= replay.pairsPerCycle"><b>重复位置</b>（与首帧同一对齿、同一接触相位）·</template>
                <template v-else>啮合序号 <b>{{ currentFrame.engagement + 1 }}</b>/{{ replay.pairsPerCycle }} ·</template>
                齿对：轮1 第 <b>{{ currentFrame.k1 }}</b> 齿 × 轮2 第 <b>{{ currentFrame.k2 }}</b> 齿
              </div>
              <div>s = {{ currentFrame.s.toFixed(3) }} mm · 接触点 ({{ currentFrame.cx.toFixed(2) }}, {{ currentFrame.cy.toFixed(2) }})</div>
              <div>φ₁ = {{ currentFrame.phi1.toFixed(4) }} rad · φ₂ = {{ currentFrame.phi2.toFixed(4) }} rad</div>
              <div>局部干涉面积 = {{ currentFrame.interferenceArea.toExponential(3) }} mm²
                <b :class="currentFrame.interferes ? 'bad' : 'good'">{{ currentFrame.interferes ? '干涉 ❗' : '无干涉 ✅' }}</b>
              </div>
            </div>
            <div v-if="replay.expired" class="warns">⚠️ 历史轨迹：案例参数已修改，仅供回看，不代表当前参数的有效结果。</div>
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
                <span>{{ c.gear1.z }}/{{ c.gear2.z }} · m={{ c.gear1.module }} · α={{ c.gear1.alphaDeg }}°{{ c.outlines ? ' · 含轮廓' : '' }}</span>
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
