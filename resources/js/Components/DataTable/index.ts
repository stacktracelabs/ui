import type { App, DefineComponent } from "vue";
import { registerNamespacedComponents } from "@stacktrace/ui";

export { default as DataTable } from './DataTable.vue'

export interface BaseAction {
  name: string
  label: string
  canRun: boolean
  isBulk: boolean
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
  title: string | null
  description: string | null
  cancelLabel: string
  confirmLabel: string
  action: string
  isDestructive: boolean
}

export type DataTableAction = EventAction | LinkAction | ExecutableAction

export interface DataTableRow<R = any> {
  key: string | number
  cells: Array<{
    column: string
    component: string
    props: Record<string, any>
    align: 'left' | 'center' | 'right'
    verticalAlign: 'top' | 'middle' | 'bottom'
    asChild: boolean
    width: string | null
    minWidth: string | null
    maxWidth: string | null
  }>
  actions: Array<DataTableAction>
  resource: R
}

export interface DataTablePagination {
  currentPage: number
  lastPage: number
  total: number
  prevPageUrl: string | null
  nextPageUrl: string | null
  firstPageUrl: string | null
  lastPageUrl: string | null
}

export interface DataTableFilter {
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
  rows: Array<DataTableRow<R>>
  perPageOptions: Array<number>
  perPage: number
  defaultPerPage: number
  pagination: DataTablePagination | null
  isSearchable: boolean
  filter: DataTableFilter | null
  isEmpty: boolean
}

export function registerDataTableColumns(app: App) {
  // @ts-ignore
  const columns = import.meta.glob<DefineComponent>('./Columns/**/*.vue', { eager: true })

  registerNamespacedComponents(app, columns, 'DataTable')
}

export function registerDataTableFilters(app: App) {
  // @ts-ignore
  const columns = import.meta.glob<DefineComponent>('./Filters/**/*.vue', { eager: true })

  registerNamespacedComponents(app, columns, 'DataTable')
}
