<template>
  <Primitive
    v-if="context.isEmptyResultsApplicable.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot
      :table="context.table.value"
      :clear="clear"
      :clear-search="context.clearSearch"
      :reset-filters="context.filter.reset"
      :search-applied="context.searchFilter.applied"
      :filters-applied="context.filter.applied"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableValue } from './types'

export type DataTableEmptyResultsProps = PrimitiveProps

export interface DataTableEmptyResultsSlotProps {
  table: DataTableValue
  clear: VoidFunction
  clearSearch: VoidFunction
  resetFilters: VoidFunction
  searchApplied: boolean
  filtersApplied: boolean
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableEmptyResultsProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableEmptyResultsSlotProps) => unknown
}>()

const context = useDataTableContext()
const clear = () => {
  if (context.searchFilter.applied) {
    context.clearSearch()
    return
  }

  if (context.filter.applied) {
    context.filter.reset()
  }
}
</script>
