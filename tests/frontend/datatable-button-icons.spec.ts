import { describe, expect, it } from 'vitest'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import bulkActionsSource from '../../components/DataTable/DataTableBulkActions.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import clearSelectionSource from '../../components/DataTable/DataTableClearSelectionButton.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import emptyResultsSource from '../../components/DataTable/DataTableEmptyResults.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import filtersSource from '../../components/DataTable/DataTableFilters.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import headingSource from '../../components/DataTable/DataTableHeading.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import perPageSource from '../../components/DataTable/DataTablePerPage.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import actionButtonSource from '../../components/DataTable/DataTableActionButton.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import paginationSource from '../../components/DataTable/DataTablePagination.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import rowActionsSource from '../../components/DataTable/DataTableRowActions.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import searchSource from '../../components/DataTable/DataTableSearch.vue?raw'

describe('DataTable button icons', () => {
  it('delegates icon spacing and sizing to the base Button', () => {
    const buttonSources = [
      bulkActionsSource,
      clearSelectionSource,
      emptyResultsSource,
      filtersSource,
      headingSource,
      perPageSource,
      actionButtonSource,
      paginationSource,
      rowActionsSource,
      searchSource,
    ]

    buttonSources.forEach(source => {
      expect(source).not.toMatch(/\b(?:ml|mr)-\d/)
      expect(source).not.toMatch(/<(?:[A-Z][A-Za-z]*Icon|Icon)\b[^>]*\bclass=["'][^"']*\b(?:size|h|w)-/)
    })
  })
})
