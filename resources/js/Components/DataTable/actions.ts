import { router } from '@inertiajs/vue3'
import { computed, ref, shallowRef, toRaw, type ComputedRef, type Ref } from 'vue'
import type {
  DataTableAction,
  DataTableEventAction,
  DataTableEventPayload,
  DataTableExecutableAction,
  DataTablePendingAction,
  DataTableResourceKey,
} from './types'

export interface DataTableActionRunOptions {
  onSuccess: VoidFunction
  onError: VoidFunction
  onFinish: VoidFunction
}

export interface DataTableActionRunnerOptions {
  endpoint: string | (() => string)
}

export interface DataTableActionRunner<ResourceKey extends DataTableResourceKey = DataTableResourceKey> {
  isRunning: ComputedRef<boolean>
  run: (
    action: DataTableExecutableAction,
    selection: Array<ResourceKey>,
    options?: Partial<DataTableActionRunOptions>,
  ) => void
}

export type DataTableActionExecutedHandler<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> = (action: DataTableAction<EventName>, selection: Array<ResourceKey>) => void

const defaultActionEndpoint = () => route('ui.data-table-action')
// Inertia otherwise cancels an in-flight async mutation when another visit to
// the non-page action endpoint begins. No local page props are changed.
const keepActionVisitConcurrent = () => undefined

export function useDataTableActionRunner<ResourceKey extends DataTableResourceKey = DataTableResourceKey>(
  options: Partial<DataTableActionRunnerOptions> = {},
): DataTableActionRunner<ResourceKey> {
  const runningVisits = ref(0)
  const isRunning = computed(() => runningVisits.value > 0)

  const run: DataTableActionRunner<ResourceKey>['run'] = (action, selection, runOptions) => {
    const configuredEndpoint = options.endpoint ?? defaultActionEndpoint
    const endpoint = typeof configuredEndpoint === 'function' ? configuredEndpoint() : configuredEndpoint

    runningVisits.value += 1
    let visitFinished = false
    const finishVisit = () => {
      if (visitFinished) {
        return
      }

      visitFinished = true
      runningVisits.value = Math.max(0, runningVisits.value - 1)
    }

    try {
      router.post(endpoint, {
        selection: toRaw([...selection]),
        action: action.action,
        args: action.args,
      }, {
        async: true,
        optimistic: keepActionVisitConcurrent,
        preserveScroll: true,
        onSuccess: () => runOptions?.onSuccess?.(),
        onError: () => {
          finishVisit()
          runOptions?.onError?.()
        },
        onFinish: () => {
          finishVisit()
          runOptions?.onFinish?.()
        },
      })
    } catch (error) {
      finishVisit()
      throw error
    }
  }

  return { isRunning, run }
}

export interface DataTableActionController<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> extends DataTableActionRunner<ResourceKey> {
  pendingAction: Ref<DataTablePendingAction<ResourceKey> | null>
  runningAction: Ref<DataTablePendingAction<ResourceKey> | null>
  isConfirmingAction: ComputedRef<boolean>
  isActionRunning: (action: DataTableAction<EventName>, selection: Array<ResourceKey>) => boolean
  activateAction: (action: DataTableAction<EventName>, selection: Array<ResourceKey>) => void
  cancelAction: VoidFunction
  confirmAction: VoidFunction
}

export function useDataTableActionController<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
>(
  emitEvent: (event: DataTableEventPayload<ResourceKey, EventName>) => void,
  runner: DataTableActionRunner<ResourceKey> = useDataTableActionRunner<ResourceKey>(),
  onActionExecuted?: DataTableActionExecutedHandler<ResourceKey, EventName>,
): DataTableActionController<ResourceKey, EventName> {
  const pendingAction = ref<DataTablePendingAction<ResourceKey> | null>(null) as Ref<DataTablePendingAction<ResourceKey> | null>
  const runningAction = shallowRef<DataTablePendingAction<ResourceKey> | null>(null)
  const runningExecutions = shallowRef<Array<DataTablePendingAction<ResourceKey> & { id: number }>>([])
  const isConfirmingAction = computed(() => pendingAction.value !== null)
  let nextExecutionId = 0

  const matchesExecution = (
    execution: DataTablePendingAction<ResourceKey>,
    action: DataTableAction<EventName>,
    selection: Array<ResourceKey>,
  ) => toRaw(execution.action) === toRaw(action)
    && execution.selection.length === selection.length
    && execution.selection.every((key, index) => Object.is(key, selection[index]))

  const isActionRunning = (action: DataTableAction<EventName>, selection: Array<ResourceKey>) => {
    return action.type === 'Executable'
      && runningExecutions.value.some(execution => matchesExecution(execution, action, selection))
  }

  const runAction = (
    action: DataTableExecutableAction,
    selection: Array<ResourceKey>,
    runOptions?: Partial<DataTableActionRunOptions>,
  ) => {
    const executionId = ++nextExecutionId
    const execution = { id: executionId, action, selection: [...selection] }
    runningExecutions.value = [...runningExecutions.value, execution]
    runningAction.value = execution

    const clearRunningAction = () => {
      const remainingExecutions = runningExecutions.value.filter(running => running.id !== executionId)
      if (remainingExecutions.length === runningExecutions.value.length) {
        return
      }

      runningExecutions.value = remainingExecutions
      runningAction.value = remainingExecutions.at(-1) ?? null
    }

    try {
      runner.run(action, [...selection], {
        onSuccess: () => {
          runOptions?.onSuccess?.()
          onActionExecuted?.(action, [...selection])
        },
        onError: () => {
          clearRunningAction()
          runOptions?.onError?.()
        },
        onFinish: () => {
          clearRunningAction()
          runOptions?.onFinish?.()
        },
      })
    } catch (error) {
      clearRunningAction()
      throw error
    }
  }

  const activateAction = (action: DataTableAction<EventName>, selection: Array<ResourceKey>) => {
    if (!action.canRun) {
      return
    }

    if (action.type === 'Event') {
      emitEvent({
        name: action.event,
        selection: [...selection],
        action: action as DataTableEventAction<EventName>,
      })
      onActionExecuted?.(action, [...selection])
      return
    }

    if (action.type === 'Executable') {
      if (isActionRunning(action, selection)) {
        return
      }

      if (action.confirmable) {
        pendingAction.value = { action, selection: [...selection] }
      } else {
        runAction(action, selection)
      }
    }
  }

  const cancelAction = () => {
    pendingAction.value = null
  }

  const confirmAction = () => {
    const pending = pendingAction.value
    if (!pending) {
      return
    }

    if (isActionRunning(pending.action, pending.selection)) {
      return
    }

    const confirmedPending = toRaw(pending)
    runAction(pending.action, pending.selection, {
      onSuccess: () => {
        if (pendingAction.value && toRaw(pendingAction.value) === confirmedPending) {
          cancelAction()
        }
      },
    })
  }

  return {
    ...runner,
    pendingAction,
    runningAction,
    isConfirmingAction,
    isActionRunning,
    activateAction,
    cancelAction,
    confirmAction,
  }
}
