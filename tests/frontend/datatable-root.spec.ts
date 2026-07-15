import { mount } from '@vue/test-utils'
import { defineComponent, h, nextTick, ref } from 'vue'
import { describe, expect, it } from 'vitest'
import {
  DataTableCell,
  DataTableContent,
  DataTableEmptyResults,
  DataTableEmptyTable,
  DataTableFilterWidget,
  DataTableFilterWidgets,
  DataTableFilters,
  DataTableFooterCell,
  DataTableHeading,
  DataTablePaginationFirst,
  DataTablePaginationLast,
  DataTablePaginationNext,
  DataTablePaginationPrevious,
  DataTablePaginationStatus,
  DataTablePerPageOptions,
  DataTableRoot,
  DataTableRows,
  DataTableSearch,
  DataTableSelectAll,
  DataTableSelectRow,
  useDataTableCellContext,
  useDataTableContext,
  useDataTableFilterWidgetContext,
  useDataTableFooterCellContext,
  useDataTableHeadingContext,
  useDataTableRowContext,
  type DataTableCellValue,
  type DataTableContext,
  type DataTableFilterWidgetValue,
  type DataTableHeadingValue,
} from '@/Components/DataTable'
// @ts-expect-error Vite's raw loader provides the SFC source string at test runtime.
import selectAllSource from '../../components/DataTable/DataTableSelectAll.vue?raw'
// @ts-expect-error Vite's raw loader provides the SFC source string at test runtime.
import selectRowSource from '../../components/DataTable/DataTableSelectRow.vue?raw'
import { row, tableValue } from './fixtures'

const exposedContext = (wrapper: ReturnType<typeof mount>) =>
  (wrapper.vm as unknown as { context: DataTableContext<object, number> }).context

describe('DataTableRoot', () => {
  it('provides its Reka context to descendant headless parts', () => {
    const Consumer = defineComponent({
      setup() {
        const context = useDataTableContext<object, number>()
        return () => h('output', { 'data-test': 'row-count' }, `${context.rows.value.length}`)
      },
    })

    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue({ rows: [row(1), row(2)] }) },
      slots: { default: () => h(Consumer) },
    })

    expect(wrapper.get('[data-test="row-count"]').text()).toBe('2')
  })

  it('provides the current row through the renderless row iterator', () => {
    const RowConsumer = defineComponent({
      setup() {
        const context = useDataTableRowContext<number>()
        return () => h('output', { 'data-test': 'row-key' }, `${context.row.key}`)
      },
    })

    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue({ rows: [row(42)] }) },
      slots: {
        default: () => h(DataTableRows, null, {
          default: () => h(RowConsumer),
        }),
      },
    })

    expect(wrapper.get('[data-test="row-key"]').text()).toBe('42')
  })

  it('updates an injected heading ref when the provider prop object is replaced', async () => {
    const heading: DataTableHeadingValue = {
      id: 'name',
      name: 'Name',
      width: null,
      minWidth: null,
      maxWidth: null,
      style: {},
      sortableAs: null,
    }
    const Consumer = defineComponent({
      setup() {
        const { heading } = useDataTableHeadingContext()
        return () => h('output', { 'data-test': 'heading-name' }, heading.value.name)
      },
    })
    const wrapper = mount(DataTableHeading, {
      props: { heading },
      slots: { default: () => h(Consumer) },
    })

    expect(wrapper.get('[data-test="heading-name"]').text()).toBe('Name')

    await wrapper.setProps({ heading: { ...heading, name: 'Updated name' } })

    expect(wrapper.get('[data-test="heading-name"]').text()).toBe('Updated name')
  })

  it('updates an injected cell ref when the provider prop object is replaced', async () => {
    const cell: DataTableCellValue = {
      column: 'name',
      component: 'span',
      props: {},
      width: null,
      minWidth: null,
      maxWidth: null,
      style: {},
      link: null,
    }
    const Consumer = defineComponent({
      setup() {
        const { cell } = useDataTableCellContext()
        return () => h('output', { 'data-test': 'cell-column' }, cell.value.column)
      },
    })
    const wrapper = mount(DataTableCell, {
      props: { cell },
      slots: { default: () => h(Consumer) },
    })

    expect(wrapper.get('[data-test="cell-column"]').text()).toBe('name')

    await wrapper.setProps({ cell: { ...cell, column: 'email' } })

    expect(wrapper.get('[data-test="cell-column"]').text()).toBe('email')
  })

  it('updates footer contexts when an initially empty cell is replaced', async () => {
    const cell: DataTableCellValue = {
      column: 'total',
      component: 'span',
      props: {},
      width: null,
      minWidth: null,
      maxWidth: null,
      style: {},
      link: null,
    }
    const Consumer = defineComponent({
      setup() {
        const footerContext = useDataTableFooterCellContext()
        const cellContext = useDataTableCellContext()
        return () => h('output', { 'data-test': 'footer-cell-column' },
          footerContext.cell.value
            ? `${footerContext.cell.value.column}:${cellContext.cell.value.column}`
            : 'empty')
      },
    })
    const wrapper = mount(DataTableFooterCell, {
      props: { cell: null },
      slots: { default: () => h(Consumer) },
    })

    expect(wrapper.get('[data-test="footer-cell-column"]').text()).toBe('empty')

    await wrapper.setProps({ cell })

    expect(wrapper.get('[data-test="footer-cell-column"]').text()).toBe('total:total')
  })

  it('updates an injected filter widget ref when its prop object is replaced', async () => {
    const widget = ref<DataTableFilterWidgetValue>({
      component: 'span',
      props: { label: 'Status' },
    })
    const Consumer = defineComponent({
      setup() {
        const { widget } = useDataTableFilterWidgetContext()
        return () => h('output', { 'data-test': 'filter-widget-label' }, `${widget.value.props.label}`)
      },
    })
    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue() },
      slots: {
        default: () => h(DataTableFilterWidget, { widget: widget.value }, {
          default: () => h(Consumer),
        }),
      },
    })

    expect(wrapper.get('[data-test="filter-widget-label"]').text()).toBe('Status')

    widget.value = { ...widget.value, props: { label: 'Plan' } }
    await nextTick()

    expect(wrapper.get('[data-test="filter-widget-label"]').text()).toBe('Plan')
  })

  it('renders the filter widget fallback when the iterator has no custom slot', () => {
    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({
          filter: {
            defaultValue: { status: null },
            widgets: [{
              component: 'span',
              props: { 'data-test': 'fallback-filter-widget' },
            }],
          },
        }),
      },
      slots: { default: () => h(DataTableFilterWidgets) },
    })

    expect(wrapper.find('[data-test="fallback-filter-widget"]').exists()).toBe(true)
  })

  it('exposes pagination controls, status, and per-page options from their SFCs', () => {
    const paginationControl = (component: typeof DataTablePaginationFirst, name: string) =>
      h(component, { as: 'span' }, {
        default: ({ href, disabled }: { href: string | null; disabled: boolean }) =>
          h('output', { 'data-test': name }, `${href ?? 'null'}:${disabled}`),
      })

    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue() },
      slots: {
        default: () => [
          paginationControl(DataTablePaginationFirst, 'pagination-first'),
          paginationControl(DataTablePaginationPrevious, 'pagination-previous'),
          paginationControl(DataTablePaginationNext, 'pagination-next'),
          paginationControl(DataTablePaginationLast, 'pagination-last'),
          h(DataTablePaginationStatus, { as: 'span' }, {
            default: ({ currentPage, lastPage }: { currentPage: number; lastPage: number }) =>
              h('output', { 'data-test': 'pagination-status' }, `${currentPage}/${lastPage}`),
          }),
          h(DataTablePerPageOptions, null, {
            default: ({ option, selected }: { option: number; selected: boolean }) =>
              h('output', { 'data-test': 'per-page-option' }, `${option}:${selected}`),
          }),
        ],
      },
    })

    expect(wrapper.get('[data-test="pagination-first"]').text()).toBe('null:true')
    expect(wrapper.get('[data-test="pagination-previous"]').text()).toBe('null:true')
    expect(wrapper.get('[data-test="pagination-next"]').text()).toBe('/?page=2:false')
    expect(wrapper.get('[data-test="pagination-last"]').text()).toBe('/?page=2:false')
    expect(wrapper.get('[data-test="pagination-status"]').text()).toBe('1/2')
    expect(wrapper.findAll('[data-test="per-page-option"]').map(option => option.text())).toEqual([
      '10:true',
      '25:false',
    ])
  })

  it('owns selection when selection is uncontrolled', async () => {
    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue(), defaultSelection: [] },
    })
    const context = exposedContext(wrapper)

    context.selectionState.toggleRow(1)
    await nextTick()

    expect(context.selectionState.selection.value).toEqual([1])
    expect(wrapper.emitted('update:selection')).toEqual([[[1]]])
  })

  it('renders styled selection controls as native checkboxes that toggle selection', async () => {
    const checkbox = (
      selected: boolean,
      toggle: () => void,
      ariaLabel: string,
      indeterminate = false,
    ) => h('input', {
      type: 'checkbox',
      checked: selected,
      indeterminate,
      'aria-label': ariaLabel,
      onClick: (event: MouseEvent) => {
        event.stopPropagation()
        toggle()
      },
    })

    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({ rows: [row(1), row(2)] }),
        defaultSelection: [],
      },
      slots: {
        default: () => [
          h(DataTableSelectAll, { as: 'span' }, {
            default: ({ selected, indeterminate, toggle }: {
              selected: boolean
              indeterminate: boolean
              toggle: () => void
            }) => checkbox(selected, toggle, 'Select all rows', indeterminate),
          }),
          h(DataTableRows, null, {
            default: () => h(DataTableSelectRow, { as: 'span' }, {
              default: ({ selected, toggle }: { selected: boolean; toggle: () => void }) =>
                checkbox(selected, toggle, 'Select row'),
            }),
          }),
        ],
      },
    })
    const context = exposedContext(wrapper)
    const selectAll = wrapper.get('input[aria-label="Select all rows"]')
    const rows = wrapper.findAll('input[aria-label="Select row"]')

    expect(selectAll.attributes('type')).toBe('checkbox')
    expect(selectAll.attributes('aria-pressed')).toBeUndefined()
    expect((selectAll.element as HTMLInputElement).checked).toBe(false)
    expect(rows).toHaveLength(2)
    expect(rows.every(row => row.attributes('type') === 'checkbox')).toBe(true)
    expect(selectAllSource).toContain('as="span"')
    expect(selectAllSource).toContain('@click.stop="toggle"')
    expect(selectRowSource).toContain('as="span"')
    expect(selectRowSource).toContain('@click.stop="toggle"')

    await rows[0].trigger('click')

    expect(context.selectionState.selection.value).toEqual([1])
    expect((rows[0].element as HTMLInputElement).checked).toBe(true)
    expect((selectAll.element as HTMLInputElement).indeterminate).toBe(true)

    await selectAll.trigger('click')

    expect(context.selectionState.selection.value).toEqual([1, 2])
    expect((selectAll.element as HTMLInputElement).checked).toBe(true)
    expect((selectAll.element as HTMLInputElement).indeterminate).toBe(false)
    expect(rows.every(row => (row.element as HTMLInputElement).checked)).toBe(true)
  })

  it('self-hides selection controls when the table has no runnable bulk actions', () => {
    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({ rows: [row(1, [])] }),
      },
      slots: {
        default: () => [
          h(DataTableSelectAll, { as: 'span', 'data-test': 'select-all' }, {
            default: () => 'select all',
          }),
          h(DataTableRows, null, {
            default: () => h(DataTableSelectRow, { as: 'span', 'data-test': 'select-row' }, {
              default: () => 'select row',
            }),
          }),
        ],
      },
    })

    expect(exposedContext(wrapper).hasBulkActions.value).toBe(false)
    expect(exposedContext(wrapper).isSelectionApplicable.value).toBe(false)
    expect(wrapper.find('[data-test="select-all"]').exists()).toBe(false)
    expect(wrapper.find('[data-test="select-row"]').exists()).toBe(false)
  })

  it('clears rows that become non-selectable from uncontrolled selection', async () => {
    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({ rows: [row(1)] }),
        defaultSelection: [1],
      },
    })
    const context = exposedContext(wrapper)

    await wrapper.setProps({ table: tableValue({ rows: [row(1, [])] }) })
    await nextTick()

    expect(context.selectionState.selection.value).toEqual([])
    expect(context.selectionState.isRowSelected(1)).toBe(false)
    expect(wrapper.emitted('update:selection')?.at(-1)).toEqual([[]])
  })

  it('does not visually select a non-selectable row while a controlled clear is pending', async () => {
    const wrapper = mount(DataTableRoot, {
      props: {
        table: tableValue({ rows: [row(1)] }),
        selection: [1],
      },
    })
    const context = exposedContext(wrapper)

    await wrapper.setProps({ table: tableValue({ rows: [row(1, [])] }) })
    await nextTick()

    expect(context.selectionState.selection.value).toEqual([1])
    expect(context.selectionState.isRowSelected(1)).toBe(false)
    expect(wrapper.emitted('update:selection')?.at(-1)).toEqual([[]])
  })

  it('emits updates without mutating a controlled selection', async () => {
    const wrapper = mount(DataTableRoot, {
      props: { table: tableValue(), selection: [] as Array<number> },
    })
    const context = exposedContext(wrapper)

    context.selectionState.toggleRow(1)
    await nextTick()

    expect(context.selectionState.selection.value).toEqual([])
    expect(wrapper.emitted('update:selection')).toEqual([[[1]]])

    await wrapper.setProps({ selection: [1] })
    expect(context.selectionState.selection.value).toEqual([1])
  })

  it('self-hides content and empty-state parts from their derived applicability', () => {
    const renderStates = () => [
      h(DataTableContent, { as: 'span' }, { default: () => 'content' }),
      h(DataTableEmptyTable, { as: 'span' }, { default: () => 'empty-table' }),
      h(DataTableEmptyResults, { as: 'span' }, { default: () => 'empty-results' }),
      h(DataTableSearch, { as: 'span' }, { default: () => 'search' }),
      h(DataTableFilters, { as: 'span' }, { default: () => 'filters' }),
    ]

    const emptyTable = mount(DataTableRoot, {
      props: { table: tableValue({ isEmpty: true, rows: [] }) },
      slots: { default: renderStates },
    })
    expect(emptyTable.text()).toBe('empty-table')

    const emptyResults = mount(DataTableRoot, {
      props: {
        table: tableValue({
          isEmpty: false,
          rows: [],
          filter: { defaultValue: { status: null }, widgets: [] },
        }),
      },
      slots: { default: renderStates },
    })
    expect(emptyResults.text()).toContain('content')
    expect(emptyResults.text()).toContain('empty-results')
    expect(emptyResults.text()).toContain('search')
    expect(emptyResults.text()).toContain('filters')
    expect(emptyResults.text()).not.toContain('empty-table')
  })
})
