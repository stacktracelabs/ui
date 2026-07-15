import { describe, expect, it } from 'vitest'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import cellSource from '../../components/DataTable/DataTableCell.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import headingSource from '../../components/DataTable/DataTableHeading.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import rowSource from '../../components/DataTable/DataTableRow.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import tableSource from '../../components/DataTable/DataTableTable.vue?raw'
// @ts-expect-error Vite's raw loader provides the source string at test runtime.
import densitySource from '../../components/DataTable/density.ts?raw'

describe('DataTable density', () => {
  it('defines compact, compatible default, and comfortable spacing', () => {
    expect(densitySource).toContain("export type DataTableDensity = 'compact' | 'default' | 'comfortable'")
    expect(densitySource).toContain("compact: 'py-1.5'")
    expect(densitySource).toContain("default: 'py-2'")
    expect(densitySource).toContain("comfortable: 'py-3'")
    expect(densitySource).toContain("compact: 'h-9'")
    expect(densitySource).toContain("default: 'h-10'")
    expect(densitySource).toContain("comfortable: 'h-12'")
  })

  it('provides density from DataTableTable through a Reka context', () => {
    expect(densitySource).toContain("createContext<DataTableDensityContext>('DataTableTable')")
    expect(densitySource).toContain('injectDataTableDensityContext(fallbackContext)')
    expect(tableSource).toContain('provideDataTableDensityContext({ density })')
    expect(tableSource).toContain(':data-density="density"')
    expect(tableSource).toContain("density: 'default'")
  })

  it('applies the shared density to headings, cells, and row action cells', () => {
    expect(headingSource).toContain("createDataTableDensityStyle('heading', density.value)")
    expect(cellSource).toContain("createDataTableDensityStyle('cell', density.value)")
    expect(rowSource).toContain("createDataTableDensityStyle('cell', density.value)")
    expect(rowSource).toContain("createDataTableDensityStyle('actionCell', density.value)")
  })
})
