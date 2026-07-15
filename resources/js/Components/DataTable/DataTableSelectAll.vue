<template>
  <Primitive
    v-if="context.isContentApplicable.value && selection.totalCount.value > 0"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="primitiveAttrs"
  >
    <slot
      :selected="selection.everythingSelected.value"
      :indeterminate="selection.somethingSelected.value && !selection.everythingSelected.value"
      :toggle="selection.toggleEverything"
      :total-count="selection.totalCount.value"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export type DataTableSelectAllProps = PrimitiveProps

export interface DataTableSelectAllSlotProps {
  selected: boolean
  indeterminate: boolean
  toggle: VoidFunction
  totalCount: number
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableSelectAllProps>(), {
  as: 'button',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableSelectAllSlotProps) => unknown
}>()

const attrs = useAttrs()
const context = useDataTableContext()
const selection = context.selectionState
const primitiveAttrs = computed(() => ({
  ...attrs,
  type: props.as === 'button' ? 'button' : undefined,
  'aria-pressed': selection.everythingSelected.value,
  'data-state': selection.everythingSelected.value
    ? 'checked'
    : selection.somethingSelected.value ? 'indeterminate' : 'unchecked',
  onClick: selection.toggleEverything,
}))
</script>
