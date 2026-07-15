<template>
  <Primitive
    v-if="context.isFiltersApplicable.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot
      :filter="context.filter"
      :applied="context.filter.applied"
      :reset="context.filter.reset"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { Filter } from '@/Composables/useFilter'

export type DataTableFiltersProps = PrimitiveProps

export interface DataTableFiltersSlotProps {
  filter: Filter<Record<string, unknown>>
  applied: boolean
  reset: VoidFunction
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableFiltersProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableFiltersSlotProps) => unknown
}>()

const context = useDataTableContext()
</script>
