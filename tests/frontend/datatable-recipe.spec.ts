import { describe, expect, it } from 'vitest'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import dataTableSource from '../../components/DataTable/DataTable.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import emptyResultsSource from '../../components/DataTable/DataTableEmptyResults.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import emptyTableSource from '../../components/DataTable/DataTableEmptyTable.vue?raw'

describe('DataTable visual recipe', () => {
  it('keeps the empty table customizable without owning empty-state props', () => {
    expect(dataTableSource).toContain('<slot />')
    expect(dataTableSource).not.toContain('emptyTableMessage')
    expect(dataTableSource).not.toContain('emptyTableDescription')
    expect(dataTableSource).not.toContain('emptyResultsMessage')
    expect(dataTableSource).not.toContain('emptyResultsDescription')
    expect(dataTableSource).not.toContain("import DataTableEmptyTable from './DataTableEmptyTable.vue'")
  })

  it('renders standard empty results as part of the ready recipe', () => {
    expect(dataTableSource).toContain('<DataTableEmptyResults />')
    expect(dataTableSource).toContain("import DataTableEmptyResults from './DataTableEmptyResults.vue'")
  })

  it('keeps title, description, and actions on the explicit empty-state parts', () => {
    expect(emptyTableSource).toContain('title?: string')
    expect(emptyTableSource).toContain('description?: string')
    expect(emptyTableSource).toContain('<slot />')
    expect(emptyResultsSource).toContain('title?: string')
    expect(emptyResultsSource).toContain('description?: string')
    expect(emptyResultsSource).toContain('<slot v-bind="emptyResults">')
  })
})
