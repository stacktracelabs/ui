import { registerNamespacedComponents } from "@stacktrace/ui";
import type { DefineComponent, Plugin } from "vue";
import { type VariantProps, cva } from 'class-variance-authority'

export { default as DataTable } from './DataTable.vue'
export { default as DataTableCell } from './DataTableCell.vue'
export { default as DataTableResourceActions } from './DataTableResourceActions.vue'

export type { DataTableValue, DataTableResourceActionsValue } from './internal'

export const DataTablePlugin: Plugin = {
  install: app => {
    const columns = import.meta.glob<DefineComponent>('./Columns/**/*.vue', { eager: true })
    registerNamespacedComponents(app, columns, 'DataTable')

    const filters = import.meta.glob<DefineComponent>('./Filters/**/*.vue', { eager: true })
    registerNamespacedComponents(app, filters, 'DataTable')
  }
}

export const tableRowHighlightVariants = cva('', {
  variants: {
    highlight: {
      default: 'hover:bg-muted/50 data-[state=selected]:bg-muted',
      muted: 'bg-muted/20 text-muted-foreground hover:bg-muted/50 data-[state=selected]:bg-muted',
      destructive: 'bg-destructive/10 text-destructive hover:bg-destructive/20 data-[state=selected]:bg-destructive/30',
    },
  },
  defaultVariants: {
    highlight: 'default',
  }
})

export type TableRowHighlightVariants = VariantProps<typeof tableRowHighlightVariants>
