/**
 * 啮合周期回放轨迹的持久化（IndexedDB，独立 object store）。
 *
 * 与案例（store.ts）分开存储，并通过 caseId + 参数/轮廓指纹双重绑定：
 *  - 轨迹只在生成它的案例下出现；
 *  - 案例参数被修改后，旧轨迹不会被删除（仍可回放查看），但凭参数指纹
 *    不会被误认为“当前有效”的验证结果；
 *  - 刷新页面时所有停留在 running 的记录一律转成 cancelled（其已落定帧保留，
 *    可“继续计算”，按固定帧槽位覆盖写入，不会重复插入）。
 */
import { openDb, tx, TRAJ_STORE } from './store'
import type { ReplayFrame, ReplayMeta, TrajectoryStatus } from './geometry/replay'

export { TRAJ_STORE }

export interface TrajectoryRecord extends ReplayMeta {
  /**
   * 已落定帧（密集数组）。取消/过期时长度可能小于 frameCount；
   * 与 frameIndices 对齐：frames[k] 的全局帧号 = frameIndices[k]。
   * 之所以不存稀疏数组，是因为 IndexedDB structured clone 会把空洞
   * 塌缩成连续数组，丢失帧号后恢复会错位/重复插入。
   */
  frames: ReplayFrame[]
  /** frames[k] 对应的全局帧序号（完成时长度 = frameCount，且恰好为 0..frameCount-1） */
  frameIndices: number[]
}

/** 运行器的稀疏槽位数组 → 持久化记录（空洞安全） */
export function sparseFramesToRecord(
  frames: (ReplayFrame | undefined)[]
): { frames: ReplayFrame[]; frameIndices: number[] } {
  const dense: ReplayFrame[] = []
  const indices: number[] = []
  for (let i = 0; i < frames.length; i++) {
    const f = frames[i]
    if (f) {
      dense.push(f)
      indices.push(i)
    }
  }
  return { frames: dense, frameIndices: indices }
}

/** 持久化记录 → 稀疏槽位数组（恢复/续算时按固定槽位覆盖） */
export function recordToSparseFrames(
  frameCount: number,
  frames: ReplayFrame[],
  frameIndices?: number[]
): (ReplayFrame | undefined)[] {
  const sparse: (ReplayFrame | undefined)[] = new Array(frameCount)
  if (frameIndices && frameIndices.length === frames.length) {
    for (let k = 0; k < frames.length; k++) {
      const i = frameIndices[k]
      if (i >= 0 && i < frameCount) sparse[i] = frames[k]
    }
  } else {
    // 兼容旧格式：按帧自带 index 落槽
    for (const f of frames) {
      if (f.index >= 0 && f.index < frameCount) sparse[f.index] = f
    }
  }
  return sparse
}

function trajTx<T>(
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T>
): Promise<T> {
  return tx(mode, fn, TRAJ_STORE)
}

void openDb // 共享连接（store 模块内完成 v1→v2 升级）

export async function saveTrajectory(rec: TrajectoryRecord): Promise<void> {
  const toSave: TrajectoryRecord = { ...rec, updatedAt: Date.now() }
  await trajTx('readwrite', (s) => s.put(toSave))
}

export async function getTrajectory(trajId: string): Promise<TrajectoryRecord | undefined> {
  return trajTx<TrajectoryRecord | undefined>('readonly', (s) => s.get(trajId))
}

export async function listTrajectories(caseId?: string | null): Promise<TrajectoryRecord[]> {
  if (caseId !== undefined && caseId !== null) {
    const db = await openDb()
    const all = await new Promise<TrajectoryRecord[]>((resolve, reject) => {
      const t = db.transaction(TRAJ_STORE, 'readonly')
      const req = t.objectStore(TRAJ_STORE).index('caseId').getAll(caseId)
      req.onsuccess = () => resolve(req.result as TrajectoryRecord[])
      req.onerror = () => reject(req.error)
    })
    return [...all].sort((a, b) => b.updatedAt - a.updatedAt)
  }
  if (caseId === null) {
    // 只取未绑定案例的轨迹（会话内、尚未保存的）
    const all = await trajTx<TrajectoryRecord[]>(
      'readonly',
      (s) => s.getAll() as IDBRequest<TrajectoryRecord[]>
    )
    return all.filter((r) => !r.caseId).sort((a, b) => b.updatedAt - a.updatedAt)
  }
  const all = await trajTx<TrajectoryRecord[]>(
    'readonly',
    (s) => s.getAll() as IDBRequest<TrajectoryRecord[]>
  )
  return [...all].sort((a, b) => b.updatedAt - a.updatedAt)
}

export async function deleteTrajectory(trajId: string): Promise<void> {
  await trajTx('readwrite', (s) => s.delete(trajId))
}

export async function deleteTrajectoriesByCase(caseId: string): Promise<number> {
  const all = await listTrajectories(caseId)
  for (const r of all) await deleteTrajectory(r.trajId)
  return all.length
}

/**
 * 把绑定在某案例下、参数指纹已不匹配的轨迹标记为过期（帧保留，仍可查看）。
 * 正在运行的由生成器自己的过期信号处理；这里只改持久状态。
 */
export async function markTrajectoriesExpired(
  caseId: string,
  exceptFingerprints: string[]
): Promise<number> {
  const all = await listTrajectories(caseId)
  let n = 0
  for (const r of all) {
    if (exceptFingerprints.includes(r.paramFingerprint)) continue
    if (r.status === 'expired') continue
    await saveTrajectory({ ...r, status: 'expired' as TrajectoryStatus })
    n++
  }
  return n
}

/**
 * 启动时恢复：任何遗留的 running 记录都意味着上次会话在生成中被刷新/关闭，
 * 一律转为 cancelled（可安全续算）。返回被恢复的记录数。
 */
export async function reconcileOrphanedRuns(): Promise<number> {
  const all = await listTrajectories()
  let n = 0
  for (const r of all) {
    if (r.status === 'running') {
      await saveTrajectory({ ...r, status: 'cancelled' as TrajectoryStatus })
      n++
    }
  }
  return n
}

export function newTrajectoryId(): string {
  return `traj-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/**
 * 从导入案例中携带的轨迹落库。只接受结构完整、指纹自洽的记录；
 * 没有轨迹的案例不会凭空出现“已验证”结果。
 */
export async function importTrajectoriesForCase(
  caseId: string,
  records: unknown,
  expectedParamFingerprint: string
): Promise<number> {
  if (!Array.isArray(records)) return 0
  let n = 0
  for (const raw of records) {
    const rec = sanitizeTrajectoryRecord(raw)
    if (!rec) continue
    // 必须自洽：属于该案例、参数指纹与案例参数一致、帧数量完整
    if (rec.paramFingerprint !== expectedParamFingerprint) continue
    if (rec.framesDone !== rec.frameCount || rec.status !== 'completed') continue
    if (rec.frames.length !== rec.frameCount) continue
    if (rec.frameIndices && rec.frameIndices.length !== rec.frameCount) continue
    rec.caseId = caseId
    await saveTrajectory(rec)
    n++
  }
  return n
}

/** 导出用：只导出某案例下帧完整的轨迹（completed；含全部帧） */
export async function exportableTrajectories(caseId: string): Promise<TrajectoryRecord[]> {
  const all = await listTrajectories(caseId)
  return all.filter((r) => r.status === 'completed' && r.framesDone === r.frameCount)
}

function sanitizeTrajectoryRecord(raw: unknown): TrajectoryRecord | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Partial<TrajectoryRecord>
  if (
    typeof r.trajId !== 'string' ||
    typeof r.paramFingerprint !== 'string' ||
    typeof r.outlineFingerprint !== 'string' ||
    !Array.isArray(r.frames) ||
    typeof r.frameCount !== 'number' ||
    typeof r.framesDone !== 'number'
  )
    return null
  if (r.frameIndices !== undefined && !Array.isArray(r.frameIndices)) return null
  return raw as TrajectoryRecord
}

