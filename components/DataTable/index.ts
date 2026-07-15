import { registerNamespacedComponents } from '@stacktrace/ui'
import type { DefineComponent, Plugin } from 'vue'

export { default as DataTable } from './DataTable.vue'
export { default as DataTableToolbar } from './DataTableToolbar.vue'
export { default as DataTableSearch } from './DataTableSearch.vue'
export { default as DataTableFilters } from './DataTableFilters.vue'
export { default as DataTableFilter } from './DataTableFilter.vue'

export { default as DataTableTable } from './DataTableTable.vue'
export { default as DataTableHeader } from './DataTableHeader.vue'
export { default as DataTableHeading } from './DataTableHeading.vue'
export { default as DataTableBody } from './DataTableBody.vue'
export { default as DataTableRow } from './DataTableRow.vue'
export { default as DataTableCell } from './DataTableCell.vue'
export { default as DataTableFooter } from './DataTableFooter.vue'

export { default as DataTableSelectAll } from './DataTableSelectAll.vue'
export { default as DataTableSelectRow } from './DataTableSelectRow.vue'
export { default as DataTableSelectionStatus } from './DataTableSelectionStatus.vue'
export { default as DataTableClearSelectionButton } from './DataTableClearSelectionButton.vue'

export { default as DataTableActionButton } from './DataTableActionButton.vue'
export { default as DataTableActionDropdownMenuItem } from './DataTableActionDropdownMenuItem.vue'
export { default as DataTableActionDialog } from './DataTableActionDialog.vue'
export { default as DataTableBulkActions } from './DataTableBulkActions.vue'
export { default as DataTableRowActions } from './DataTableRowActions.vue'
export { default as DataTableResourceActions } from './DataTableResourceActions.vue'

export { default as DataTablePagination } from './DataTablePagination.vue'
export { default as DataTablePerPage } from './DataTablePerPage.vue'
export { default as DataTableViewSettings } from './DataTableViewSettings.vue'

export { default as DataTableEmpty } from './DataTableEmpty.vue'
export { default as DataTableEmptyTable } from './DataTableEmptyTable.vue'
export { default as DataTableEmptyResults } from './DataTableEmptyResults.vue'

export { bindDataTableEvents } from '@stacktrace/ui'
export type {
  DataTableAction,
  DataTableActionPlacement,
  DataTableActionRunOptions,
  DataTableActionRunnerOptions,
  DataTableBaseAction,
  DataTableCellLink,
  DataTableCellValue,
  DataTableCursorPaginationValue,
  DataTableEventAction,
  DataTableEventHandler,
  DataTableEventHandlerMap,
  DataTableEventPayload,
  DataTableExecutableAction,
  DataTableFilterValue,
  DataTableFilterWidgetValue,
  DataTableHeadingValue,
  DataTableIconValue,
  DataTableLinkAction,
  DataTablePaginationValue,
  DataTablePendingAction,
  DataTableResource,
  DataTableResourceActionsValue,
  DataTableResourceKey,
  DataTableRowValue,
  DataTableTextStyle,
  DataTableTextStyleProperty,
  DataTableValue,
} from '@stacktrace/ui'

export {
  createDataTableCellStyle,
  createDataTableHeadingStyle,
  createDataTableRowStyle,
  createDataTableCellStyle as createCellStyle,
  createDataTableHeadingStyle as createHeadingStyle,
  createDataTableRowStyle as createRowStyle,
} from './styles'
export type { DataTableRowStyle, DataTableRowStyleProperty } from './styles'

export const DataTablePlugin: Plugin = {
  install: app => {
    const columns = import.meta.glob<DefineComponent>('./Columns/**/*.vue', { eager: true })
    registerNamespacedComponents(app, columns, 'DataTable')

    const filters = import.meta.glob<DefineComponent>('./Filters/**/*.vue', { eager: true })
    registerNamespacedComponents(app, filters, 'DataTable')
  },
}
