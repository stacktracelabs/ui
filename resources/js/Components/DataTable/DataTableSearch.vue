<template>
  <Primitive
    v-if="context.isSearchApplicable.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot
      :model-value="context.search.value"
      :update="update"
      :clear="context.clearSearch"
      :applied="context.searchFilter.applied"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export type DataTableSearchProps = PrimitiveProps

export interface DataTableSearchSlotProps {
  modelValue: string
  update: (value: string) => void
  clear: VoidFunction
  applied: boolean
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableSearchProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableSearchSlotProps) => unknown
}>()

const context = useDataTableContext()
const update = (value: string) => {
  context.search.value = value
}
</script>
