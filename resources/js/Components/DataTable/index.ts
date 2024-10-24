import type { DefineComponent, Plugin } from "vue";
import { registerNamespacedComponents } from "@stacktrace/ui";

export { default as DataTable } from './DataTable.vue'
export { default as DataTableCell } from './DataTableCell.vue'

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
  args: string
}

export type Action = EventAction | LinkAction | ExecutableAction

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
  actions: Array<Action>
  resource: R
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
  isSearchable: boolean
  filter: Filter | null
  isEmpty: boolean
}

export const DataTablePlugin: Plugin = {
  install: app => {
    const columns = import.meta.glob<DefineComponent>('./Columns/**/*.vue', { eager: true })
    registerNamespacedComponents(app, columns, 'DataTable')

    const filters = import.meta.glob<DefineComponent>('./Filters/**/*.vue', { eager: true })
    registerNamespacedComponents(app, filters, 'DataTable')
  }
}
