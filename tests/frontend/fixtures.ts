import type {
  DataTableAction,
  DataTableExecutableAction,
  DataTableRowValue,
  DataTableValue,
} from '@/Components/DataTable'

export const executableAction = (
  overrides: Partial<DataTableExecutableAction> = {},
): DataTableExecutableAction => ({
  type: 'Executable',
  name: 'archive',
  label: 'Archive',
  canRun: true,
  isBulk: true,
  icon: null,
  isInline: false,
  confirmable: false,
  title: 'Archive resource?',
  description: null,
  cancelLabel: 'Cancel',
  confirmLabel: 'Archive',
  action: 'archive',
  isDestructive: false,
  args: '{}',
  ...overrides,
})

export const row = (
  key: number,
  actions: Array<DataTableAction> = [executableAction()],
): DataTableRowValue<number> => ({
  key,
  cells: [],
  actions,
  resource: null,
  highlightAs: null,
})

export const tableValue = (
  overrides: Partial<DataTableValue<object, number>> = {},
): DataTableValue<object, number> => ({
  headings: [],
  rows: [row(1)],
  footerCells: [],
  perPageOptions: [10, 25],
  perPage: 10,
  defaultPerPage: 10,
  pagination: {
    currentPage: 1,
    lastPage: 2,
    total: 12,
    prevPageUrl: null,
    nextPageUrl: '/?page=2',
    firstPageUrl: null,
    lastPageUrl: '/?page=2',
  },
  cursorPagination: null,
  isSearchable: true,
  filter: null,
  isEmpty: false,
  queryPrefix: null,
  ...overrides,
})

