import { createContext } from 'reka-ui'
import { computed, type ComputedRef } from 'vue'

export type DataTableDensity = 'compact' | 'default' | 'comfortable'

export type DataTableDensityPart = 'cell' | 'heading' | 'actionCell'

interface DataTableDensityContext {
  density: ComputedRef<DataTableDensity>
}

const densityStyles: Record<DataTableDensityPart, Record<DataTableDensity, string>> = {
  cell: {
    compact: 'py-1.5',
    default: 'py-2',
    comfortable: 'py-3',
  },
  heading: {
    compact: 'h-9',
    default: 'h-10',
    comfortable: 'h-12',
  },
  actionCell: {
    compact: 'py-0',
    default: 'py-0.5',
    comfortable: 'py-2',
  },
}

const fallbackContext: DataTableDensityContext = {
  density: computed(() => 'default'),
}

const [injectDataTableDensityContext, provideDataTableDensityContext] =
  createContext<DataTableDensityContext>('DataTableTable')

export { provideDataTableDensityContext }

export function useDataTableDensity(): ComputedRef<DataTableDensity> {
  return injectDataTableDensityContext(fallbackContext).density
}

export function createDataTableDensityStyle(
  part: DataTableDensityPart,
  density: DataTableDensity,
): string {
  return densityStyles[part][density]
}
