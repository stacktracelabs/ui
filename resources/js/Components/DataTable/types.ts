export type DataTableResourceKey = string | number

export type DataTableTextStyleProperty =
  | 'fontWeight'
  | 'fontFamily'
  | 'whitespace'
  | 'fontVariantNumeric'
  | 'textDecorationLine'
  | 'verticalAlign'
  | 'textAlign'
  | 'fontStyle'
  | 'color'

export type DataTableTextStyle = Record<DataTableTextStyleProperty | string, string | null>

export interface DataTableIconValue {
  src: string
}

export interface DataTableBaseAction {
  name: string
  label: string | null
  canRun: boolean
  isBulk: boolean
  icon: DataTableIconValue | null
  /** Controls whether a composed UI places the action inline or in a menu. */
  isInline: boolean
}

export interface DataTableEventAction<EventName extends string = string> extends DataTableBaseAction {
  type: 'Event'
  event: EventName
}

export interface DataTableLinkAction extends DataTableBaseAction {
  type: 'Link'
  url: string
  isExternal: boolean
}

export interface DataTableExecutableAction extends DataTableBaseAction {
  type: 'Executable'
  /** Controls execution only; placement is controlled independently by isInline. */
  confirmable: boolean
  title: string | null
  description: string | null
  cancelLabel: string
  confirmLabel: string
  action: string
  isDestructive: boolean
  args: string
}

export type DataTableAction<EventName extends string = string> =
  | DataTableEventAction<EventName>
  | DataTableLinkAction
  | DataTableExecutableAction

export interface DataTableResource<ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object> {
  key: ResourceKey
  value: ResourceValue | null
}

export interface DataTableResourceActionsValue<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  ResourceValue = object,
  EventName extends string = string,
> {
  actions: Array<DataTableAction<EventName>>
  resource: DataTableResource<ResourceKey, ResourceValue>
}

export interface DataTableCellLink {
  url: string
  isExternal: boolean
}

export interface DataTableCellValue {
  column: string
  component: string
  props: Record<string, unknown>
  width: string | null
  minWidth: string | null
  maxWidth: string | null
  style: DataTableTextStyle
  link: DataTableCellLink | null
}

export interface DataTableHeadingValue {
  id: string
  name: string
  width: string | null
  minWidth: string | null
  maxWidth: string | null
  style: DataTableTextStyle
  sortableAs: string | null
}

export interface DataTableRowValue<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  ResourceValue = object,
  EventName extends string = string,
> {
  key: ResourceKey
  cells: Array<DataTableCellValue>
  actions: Array<DataTableAction<EventName>>
  resource: ResourceValue | null
  highlightAs: string | null
}

export interface DataTableCursorPaginationValue {
  prevPageUrl: string | null
  nextPageUrl: string | null
}

export interface DataTablePaginationValue {
  currentPage: number
  lastPage: number
  total: number
  prevPageUrl: string | null
  nextPageUrl: string | null
  firstPageUrl: string | null
  lastPageUrl: string | null
}

export interface DataTableFilterWidgetValue {
  component: string
  props: Record<string, unknown>
}

export interface DataTableFilterValue {
  defaultValue: Record<string, unknown>
  widgets: Array<DataTableFilterWidgetValue>
}

export interface DataTableValue<
  ResourceValue = object,
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> {
  headings: Array<DataTableHeadingValue>
  rows: Array<DataTableRowValue<ResourceKey, ResourceValue, EventName>>
  footerCells: Array<DataTableCellValue | null>
  perPageOptions: Array<number>
  perPage: number
  defaultPerPage: number
  pagination: DataTablePaginationValue | null
  cursorPagination: DataTableCursorPaginationValue | null
  isSearchable: boolean
  filter: DataTableFilterValue | null
  isEmpty: boolean
  /** Additive prefix for this table's search/sort/limit/page/cursor query keys. */
  queryPrefix?: string | null
}

export interface DataTableEventPayload<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> {
  name: EventName
  selection: Array<ResourceKey>
  action: DataTableEventAction<EventName>
}

export interface DataTablePendingAction<ResourceKey extends DataTableResourceKey = DataTableResourceKey> {
  action: DataTableExecutableAction
  selection: Array<ResourceKey>
}

export type DataTableActionPlacement = 'all' | 'inline' | 'menu'

