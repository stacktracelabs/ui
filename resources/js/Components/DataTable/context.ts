import { Link } from '@inertiajs/vue3'
import { createContext } from 'reka-ui'
import {
  computed,
  type Component,
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
} from 'vue'
import { useFilter, type Filter } from '@/Composables/useFilter'
import {
  useDataTableActionController,
  useDataTableActionRunner,
  type DataTableActionController,
  type DataTableActionRunnerOptions,
} from './actions'
import { useDataTableSelection, type DataTableSelectionState } from './selection'
import type {
  DataTableAction,
  DataTableActionPlacement,
  DataTableCellValue,
  DataTableEventPayload,
  DataTableFilterWidgetValue,
  DataTableHeadingValue,
  DataTableResourceActionsValue,
  DataTableResourceKey,
  DataTableRowValue,
  DataTableValue,
} from './types'

type AnyDataTableContext = DataTableContext<object, DataTableResourceKey, string>
type AnyDataTableRowContext = DataTableRowContext<DataTableResourceKey, object, string>
type AnyDataTableActionScopeContext = DataTableActionScopeContext<DataTableResourceKey, string>
type AnyDataTableActionController = DataTableActionController<DataTableResourceKey, string>
type AnyDataTableResourceActionsContext = DataTableResourceActionsContext<DataTableResourceKey, object, string>

export interface DataTableHeadingContext {
  heading: ComputedRef<DataTableHeadingValue>
}

export interface DataTableCellContext {
  cell: ComputedRef<DataTableCellValue>
}

export interface DataTableFooterCellContext {
  cell: ComputedRef<DataTableCellValue | null>
}

export interface DataTableFilterWidgetContext {
  widget: ComputedRef<DataTableFilterWidgetValue>
}

const [injectDataTableContext, provideDataTableContext] = createContext<AnyDataTableContext>('DataTableRoot')
const [injectDataTableRowContext, provideDataTableRowContext] = createContext<AnyDataTableRowContext>(['DataTableRow', 'DataTableRows'])
const [injectDataTableHeadingContext, provideDataTableHeadingContext] = createContext<DataTableHeadingContext>(['DataTableHeading', 'DataTableHeadings'])
const [injectDataTableCellContext, provideDataTableCellContext] = createContext<DataTableCellContext>(['DataTableCell', 'DataTableCells'])
const [injectDataTableFooterCellContext, provideDataTableFooterCellContext] = createContext<DataTableFooterCellContext>(['DataTableFooterCell', 'DataTableFooterCells'])
const [injectDataTableFilterWidgetContext, provideDataTableFilterWidgetContext] = createContext<DataTableFilterWidgetContext>(['DataTableFilterWidget', 'DataTableFilterWidgets'])
const [injectDataTableActionScopeContext, provideDataTableActionScopeContext] = createContext<AnyDataTableActionScopeContext>('DataTableAction')
const [injectDataTableActionController, provideDataTableActionController] = createContext<AnyDataTableActionController>(['DataTableRoot', 'DataTableResourceActionsRoot'])
const [injectDataTableResourceActionsContext, provideDataTableResourceActionsContext] = createContext<AnyDataTableResourceActionsContext>('DataTableResourceActionsRoot')

export const useDataTableContext = <
  ResourceValue = object,
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
>() => injectDataTableContext() as unknown as DataTableContext<ResourceValue, ResourceKey, EventName>

export const useDataTableRowContext = <
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  ResourceValue = object,
  EventName extends string = string,
>() => injectDataTableRowContext() as DataTableRowContext<ResourceKey, ResourceValue, EventName>

export const useDataTableHeadingContext = (): DataTableHeadingContext => injectDataTableHeadingContext()
export const useDataTableCellContext = (): DataTableCellContext => injectDataTableCellContext()
export const useDataTableFooterCellContext = (): DataTableFooterCellContext => injectDataTableFooterCellContext()
export const useDataTableFilterWidgetContext = (): DataTableFilterWidgetContext => injectDataTableFilterWidgetContext()

export const useDataTableActionScopeContext = <
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
>() => injectDataTableActionScopeContext() as DataTableActionScopeContext<ResourceKey, EventName>

export const useDataTableActionControllerContext = <
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
>() => injectDataTableActionController() as unknown as DataTableActionController<ResourceKey, EventName>

export const useDataTableResourceActionsContext = <
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  ResourceValue = object,
  EventName extends string = string,
>() => injectDataTableResourceActionsContext() as DataTableResourceActionsContext<ResourceKey, ResourceValue, EventName>

export {
  provideDataTableContext,
  provideDataTableRowContext,
  provideDataTableHeadingContext,
  provideDataTableCellContext,
  provideDataTableFooterCellContext,
  provideDataTableFilterWidgetContext,
  provideDataTableActionScopeContext,
  provideDataTableActionController,
  provideDataTableResourceActionsContext,
}

export function qualifyDataTableQueryKey(prefix: string | null | undefined, key: string): string {
  return `${prefix ?? ''}${key}`
}

export function configureDataTableStyle<T extends Record<string, string | null>>(
  style: T,
  mapping: Record<keyof T, Record<string, string>>,
): string {
  const tokens: Array<string> = []

  Object.keys(style).forEach(key => {
    const styleValue = style[key]
    const styleConfig = mapping[key]

    if (styleValue && styleConfig?.[styleValue]) {
      tokens.push(styleConfig[styleValue])
    }
  })

  return tokens.join(' ')
}

export interface DataTableRowContext<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  ResourceValue = object,
  EventName extends string = string,
> {
  row: DataTableRowValue<ResourceKey, ResourceValue, EventName>
  index: number
  isSelectable: ComputedRef<boolean>
  isSelected: ComputedRef<boolean>
}

export interface DataTableActionScopeContext<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> {
  action: DataTableAction<EventName>
  selection: Array<ResourceKey>
  index: number
}

export interface DataTableResourceActionsContext<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  ResourceValue = object,
  EventName extends string = string,
> {
  value: ComputedRef<DataTableResourceActionsValue<ResourceKey, ResourceValue, EventName>>
  runnableActions: ComputedRef<Array<DataTableAction<EventName>>>
}

export interface DataTableContext<
  ResourceValue = object,
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> extends DataTableActionController<ResourceKey, EventName> {
  table: ComputedRef<DataTableValue<ResourceValue, ResourceKey, EventName>>
  rows: ComputedRef<Array<DataTableRowValue<ResourceKey, ResourceValue, EventName>>>
  headings: ComputedRef<Array<DataTableHeadingValue>>
  selectionState: DataTableSelectionState<ResourceKey>
  selectedRows: ComputedRef<Array<DataTableRowValue<ResourceKey, ResourceValue, EventName>>>
  bulkActions: ComputedRef<Array<DataTableAction<EventName>>>
  hasRowActions: ComputedRef<boolean>
  hasBulkActions: ComputedRef<boolean>
  showBulkActions: ComputedRef<boolean>
  isContentApplicable: ComputedRef<boolean>
  isEmptyTableApplicable: ComputedRef<boolean>
  isEmptyResultsApplicable: ComputedRef<boolean>
  isSearchApplicable: ComputedRef<boolean>
  isFiltersApplicable: ComputedRef<boolean>
  isFooterApplicable: ComputedRef<boolean>
  isPaginationApplicable: ComputedRef<boolean>
  hasPerPageSettings: ComputedRef<boolean>
  searchFilter: Filter<Record<string, unknown>>
  filter: Filter<Record<string, unknown>>
  sortFilter: Filter<Record<string, unknown>>
  paginationFilter: Filter<Record<string, unknown>>
  search: WritableComputedRef<string>
  sortBy: WritableComputedRef<string | null>
  sortDirection: WritableComputedRef<'asc' | 'desc' | null>
  perPage: WritableComputedRef<number>
  clearSearch: VoidFunction
  setPerPage: (limit: number) => void
  toggleSorting: (column: string) => void
  isRowSelectable: (row: DataTableRowValue<ResourceKey, ResourceValue, EventName>) => boolean
  rowActions: (
    row: DataTableRowValue<ResourceKey, ResourceValue, EventName>,
    placement?: DataTableActionPlacement,
  ) => Array<DataTableAction<EventName>>
  placedBulkActions: (placement?: DataTableActionPlacement) => Array<DataTableAction<EventName>>
  queryKey: (key: string) => string
  internalLinkComponent: Component
}

const filterByPlacement = <EventName extends string>(
  actions: Array<DataTableAction<EventName>>,
  placement: DataTableActionPlacement = 'all',
) => actions.filter(action => {
  if (!action.canRun) {
    return false
  }
  if (placement === 'inline') {
    return action.isInline
  }
  if (placement === 'menu') {
    return !action.isInline
  }
  return true
})

export function createDataTableContext<
  ResourceValue = object,
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
>(
  table: ComputedRef<DataTableValue<ResourceValue, ResourceKey, EventName>>,
  selection: Ref<Array<ResourceKey>>,
  emitEvent: (event: DataTableEventPayload<ResourceKey, EventName>) => void,
  actionRunnerOptions: Partial<DataTableActionRunnerOptions> = {},
): DataTableContext<ResourceValue, ResourceKey, EventName> {
  const rows = computed(() => table.value.rows)
  const headings = computed(() => table.value.headings)
  const queryKey = (key: string) => qualifyDataTableQueryKey(table.value.queryPrefix, key)
  const resetQuery = [queryKey('page'), queryKey('cursor')]

  const isRowSelectable = (row: DataTableRowValue<ResourceKey, ResourceValue, EventName>) =>
    row.actions.some(action => action.canRun && action.isBulk)

  const selectionState = useDataTableSelection(
    selection,
    () => rows.value.map(row => row.key),
    () => rows.value.filter(row => !isRowSelectable(row)).map(row => row.key),
  )
  const selectedRows = computed(() => rows.value.filter(row => selection.value.includes(row.key)))

  const hasRowActions = computed(() => rows.value.some(row => row.actions.some(action => action.canRun)))
  const hasBulkActions = computed(() => rows.value.some(row => row.actions.some(action => action.canRun && action.isBulk)))
  const bulkActions = computed<Array<DataTableAction<EventName>>>(() => {
    const actions = new Map<string, DataTableAction<EventName>>()
    selectedRows.value
      .flatMap(row => row.actions.filter(action => action.canRun && action.isBulk))
      .forEach(action => {
        if (!actions.has(action.name)) {
          actions.set(action.name, action)
        }
      })
    return [...actions.values()]
  })
  const showBulkActions = computed(() => selectionState.somethingSelected.value && bulkActions.value.length > 0)

  const searchKey = queryKey('search')
  const sortByKey = queryKey('sort_by')
  const sortDirectionKey = queryKey('sort_direction')
  const limitKey = queryKey('limit')

  const searchFilter = useFilter<Record<string, unknown>>(() => ({ [searchKey]: '' }), { resetQuery })
  const filter = useFilter<Record<string, unknown>>(() => table.value.filter?.defaultValue ?? {}, { resetQuery })
  const sortFilter = useFilter<Record<string, unknown>>(() => ({
    [sortByKey]: null,
    [sortDirectionKey]: null,
  }), { resetQuery })
  const paginationFilter = useFilter<Record<string, unknown>>(() => ({
    [limitKey]: table.value.defaultPerPage,
  }), { resetQuery })

  const search = computed<string>({
    get: () => `${searchFilter[searchKey] ?? ''}`,
    set: value => { searchFilter[searchKey] = value },
  })
  const sortBy = computed<string | null>({
    get: () => sortFilter[sortByKey] == null ? null : `${sortFilter[sortByKey]}`,
    set: value => { sortFilter[sortByKey] = value },
  })
  const sortDirection = computed<'asc' | 'desc' | null>({
    get: () => sortFilter[sortDirectionKey] === 'asc' || sortFilter[sortDirectionKey] === 'desc'
      ? sortFilter[sortDirectionKey] as 'asc' | 'desc'
      : null,
    set: value => { sortFilter[sortDirectionKey] = value },
  })
  const perPage = computed<number>({
    get: () => Number(paginationFilter[limitKey] ?? table.value.defaultPerPage),
    set: value => { paginationFilter[limitKey] = value },
  })

  const clearSearch = () => searchFilter.reset()
  const setPerPage = (limit: number) => { perPage.value = limit }
  const toggleSorting = (column: string) => {
    if (sortBy.value !== column) {
      sortBy.value = column
      sortDirection.value = 'asc'
    } else if (sortDirection.value === 'asc') {
      sortDirection.value = 'desc'
    } else if (sortDirection.value === 'desc') {
      sortBy.value = null
      sortDirection.value = null
    } else {
      sortDirection.value = 'asc'
    }
  }

  const rowActions = (
    row: DataTableRowValue<ResourceKey, ResourceValue, EventName>,
    placement: DataTableActionPlacement = 'all',
  ) => filterByPlacement(row.actions, placement)
  const placedBulkActions = (placement: DataTableActionPlacement = 'all') =>
    filterByPlacement(bulkActions.value, placement)

  const isContentApplicable = computed(() => !table.value.isEmpty)
  const isEmptyTableApplicable = computed(() => table.value.isEmpty)
  const isEmptyResultsApplicable = computed(() => !table.value.isEmpty && rows.value.length === 0)
  const isSearchApplicable = computed(() => !table.value.isEmpty && table.value.isSearchable)
  const isFiltersApplicable = computed(() => !table.value.isEmpty && table.value.filter !== null)
  const isFooterApplicable = computed(() => !table.value.isEmpty && rows.value.length > 0 && table.value.footerCells.length > 0)
  const isPaginationApplicable = computed(() => !table.value.isEmpty && rows.value.length > 0 && (table.value.pagination !== null || table.value.cursorPagination !== null))
  const hasPerPageSettings = computed(() => isPaginationApplicable.value && table.value.perPageOptions.length > 0)

  const actionController = useDataTableActionController(
    emitEvent,
    useDataTableActionRunner<ResourceKey>(actionRunnerOptions),
  )

  return {
    table,
    rows,
    headings,
    selectionState,
    selectedRows,
    bulkActions,
    hasRowActions,
    hasBulkActions,
    showBulkActions,
    isContentApplicable,
    isEmptyTableApplicable,
    isEmptyResultsApplicable,
    isSearchApplicable,
    isFiltersApplicable,
    isFooterApplicable,
    isPaginationApplicable,
    hasPerPageSettings,
    searchFilter,
    filter,
    sortFilter,
    paginationFilter,
    search,
    sortBy,
    sortDirection,
    perPage,
    clearSearch,
    setPerPage,
    toggleSorting,
    isRowSelectable,
    rowActions,
    placedBulkActions,
    queryKey,
    internalLinkComponent: Link,
    ...actionController,
  }
}
