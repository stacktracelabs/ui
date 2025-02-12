import { useSelectableRows } from '@/Components/Table'
import { router, useForm, usePage } from '@inertiajs/vue3'
import { onDeactivated, useFilter, useToggle } from '@stacktrace/ui'
import { computed, type ComputedRef, inject, provide, ref, toRaw } from 'vue'

export interface BaseAction {
  name: string
  label: string | null
  canRun: boolean
  isBulk: boolean
  icon: { src: string } | null
  isInline: boolean
}

export interface EventAction extends BaseAction {
  type: 'Event'
  event: string
}

export interface LinkAction extends BaseAction {
  type: 'Link'
  url: string
  isExternal: boolean
}

export interface ExecutableAction extends BaseAction {
  type: 'Executable'
  confirmable: boolean
  title: string | null
  description: string | null
  cancelLabel: string
  confirmLabel: string
  action: string
  isDestructive: boolean
  args: string
}

export type Action = EventAction | LinkAction | ExecutableAction

export interface RowActions {
  row: Array<Action>
  inline: Array<Action>
}

export interface Resource<K = string | number, V = object> {
  key: K
  value: V | null
}

// TODO: Nove akcie
export interface DataTableResourceActionsValue<ResourceKey = string | number, ResourceValue = object> {
  actions: Array<Action>
  resource: Resource<ResourceKey, ResourceValue>
}

// TODO: End nove akcie

export interface Cell {
  column: string
  component: string
  props: Record<string, any>
  align: 'left' | 'center' | 'right'
  verticalAlign: 'top' | 'middle' | 'bottom'
  asChild: boolean
  width: string | null
  minWidth: string | null
  maxWidth: string | null
  fontWeight: string | number
  noWrap: boolean
  tabularNums: boolean
  link: {
    url: string
    isExternal: boolean
  } | null
}

export interface Row<R = any> {
  key: string | number
  cells: Array<Cell>
  actions: RowActions
  resource: R
  highlightAs: string | null
}

export interface CursorPagination {
  prevPageUrl: string | null
  nextPageUrl: string | null
}

export interface Pagination {
  currentPage: number
  lastPage: number
  total: number
  prevPageUrl: string | null
  nextPageUrl: string | null
  firstPageUrl: string | null
  lastPageUrl: string | null
}

export interface Filter {
  defaultValue: Record<string, any>
  widgets: Array<{
    component: string
    props: Record<string, any>
  }>
}

export interface DataTableValue<R = any> {
  headings: Array<{
    id: string
    name: string
    align: 'left' | 'center' | 'right'
    width: string | null
    minWidth: string | null
    maxWidth: string | null
    noWrap: boolean
    sortableAs: string | null
  }>
  rows: Array<Row<R>>
  footerCells: Array<Cell | null>
  perPageOptions: Array<number>
  perPage: number
  defaultPerPage: number
  pagination: Pagination | null
  cursorPagination: CursorPagination | null
  isSearchable: boolean
  filter: Filter | null
  isEmpty: boolean
}

export const createContext = (table: ComputedRef<DataTableValue>) => {
  const rows = computed(() => table.value.rows)
  const headings = computed(() => table.value.headings)

  const execAction = ref<ExecutableAction>()
  const execActionSelection = ref<Array<number | string>>()
  const execActionDialog = useToggle()
  const execActionForm = useForm({})

  const runExecAction = (action: ExecutableAction, selection: Array<number | string>) => {
    execActionForm.transform(() => ({
      selection: toRaw(selection),
      action: action.action,
      args: action.args,
    })).post(route('ui.data-table-action'), {
      preserveScroll: true,
      onFinish: () => {
        execActionDialog.deactivate()
      }
    })
  }

  const onExecAction = (action: ExecutableAction, selection: Array<number | string>) => {
    if (action.confirmable) {
      execAction.value = action
      execActionSelection.value = selection

      execActionDialog.activate()
    } else {
      runExecAction(action, selection)
    }
  }

  onDeactivated(execActionDialog, () => {
    setTimeout(() => {
      execAction.value = undefined
      execActionSelection.value = undefined
    }, 300)
  })

  // Selection


  const shouldShowCheckboxForRow = (row: Row) => row.actions.row.some(it => it.isBulk && it.canRun) || row.actions.inline.some(it => it.isBulk && it.canRun)
  const selectableRows = useSelectableRows(
    computed(() => rows.value.map(it => it.key)),
    computed(() => rows.value.filter(row => !shouldShowCheckboxForRow(row)).map(it => it.key))
  )
  const somethingSelected = computed(() => selectableRows.somethingSelected.value)
  const selectedRows = computed(() => table.value.rows.filter(row => selectableRows.selection.value.includes(row.key)))

  // Bulk actions
  // Determine whether some row with actions is in the table.
  const hasRowActions = computed(() => table.value.rows.some(it => it.actions.row.filter(it => it.canRun).length > 0 || it.actions.inline.filter(it => it.canRun).length > 0))
  // Determine whether some row has bulk actions.
  const hasBulkActions = computed(() => table.value.rows.some(it => it.actions.row.filter(it => it.canRun && it.isBulk).length > 0 || it.actions.inline.filter(it => it.canRun && it.isBulk).length > 0))
  const showBulkActions = computed(() => somethingSelected.value)
  const inlineBulkActions = computed<Array<Action>>(() => {
    const actions: Record<string, Action> = {}

    selectedRows.value.flatMap(it => it.actions.inline.filter(action => action.canRun && action.isBulk)).forEach(action => {
      if (!actions.hasOwnProperty(action.name)) {
        actions[action.name] = action
      }
    })

    return Object.keys(actions).map(it => actions[it])
  })
  const bulkActions = computed<Array<Action>>(() => {
    const actions: Record<string, Action> = {}

    selectedRows.value.flatMap(it => it.actions.row.filter(action => action.canRun && action.isBulk)).forEach(action => {
      if (!actions.hasOwnProperty(action.name)) {
        actions[action.name] = action
      }
    })

    return Object.keys(actions).map(it => actions[it])
  })

  // Filter
  const page = usePage()
  const searchFilter = useFilter(() => ({
    search: '',
  }))
  const clearSearch = () => {
    router.visit(page.url.split('?')[0])
  }
  const filter = useFilter(() => table.value.filter?.defaultValue || {})
  const sortFilter = useFilter(() => ({
    sort_by: null,
    sort_direction: null,
  }))
  const paginationFilter = useFilter(() => ({
    limit: table.value.defaultPerPage,
  }))
  const setPerPage = (limit: number) => {
    paginationFilter.limit = limit
  }
  const hasPerPageSettings = computed(() => (table.value.pagination || table.value.cursorPagination) && table.value.perPageOptions.length > 0)

  return {
    rows,
    headings,

    // Filter
    clearSearch,
    searchFilter,
    filter,
    sortFilter,
    paginationFilter,
    setPerPage,
    hasPerPageSettings,

    // Bulk selection
    hasRowActions,
    hasBulkActions,
    showBulkActions,

    // Selectable rows
    selectableRows,
    selectedRows,
    shouldShowCheckboxForRow,
    somethingSelected,
    inlineBulkActions,
    bulkActions,

    // Exec Action
    execActionDialog,
    execAction,
    execActionSelection,
    execActionFormProcessing: computed(() => execActionForm.processing),
    onExecAction,
    runExecAction,
  }
}

export type Context = ReturnType<typeof createContext>

export const provideContext = (context: Context) => {
  provide('DataTableContext', context)
}

export const injectContext = () => inject<Context>('DataTableContext')!

interface ActionRunnerOptions {
  onSuccess: () => void
  onError: () => void
  onFinish: () => void
}

export function useActionRunner<ResourceKey = string | number>() {
  const form = useForm({})

  const run = (action: ExecutableAction, selection: Array<ResourceKey>, options?: Partial<ActionRunnerOptions>) => {
    form.transform(() => ({
      selection: toRaw(selection),
      action: action.action,
      args: action.args,
    })).post(route('ui.data-table-action'), {
      preserveScroll: true,
      onSuccess: () => {
        const callback = options?.onSuccess
        if (callback) {
          callback()
        }
      },
      onError: () => {
        const callback = options?.onError
        if (callback) {
          callback()
        }
      },
      onFinish: () => {
        const callback = options?.onFinish
        if (callback) {
          callback()
        }
      }
    })
  }

  return {
    isRunning: computed(() => form.processing),
    run,
  }
}
