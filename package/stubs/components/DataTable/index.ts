import { registerNamespacedComponents } from "@stacktrace/ui";
import type { DefineComponent, Plugin } from "vue";

export { default as DataTable } from './DataTable.vue'
export { default as DataTableCell } from './DataTableCell.vue'

export type { DataTableValue } from './internal'

export const DataTablePlugin: Plugin = {
  install: app => {
    const columns = import.meta.glob<DefineComponent>('./Columns/**/*.vue', { eager: true })
    registerNamespacedComponents(app, columns, 'DataTable')

    const filters = import.meta.glob<DefineComponent>('./Filters/**/*.vue', { eager: true })
    registerNamespacedComponents(app, filters, 'DataTable')
  }
}
