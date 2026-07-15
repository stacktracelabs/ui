<template>
  <Primitive
    v-if="selection.somethingSelected.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="primitiveAttrs"
  >
    <slot :selection="[...selection.selection.value]" :clear="selection.clearSelection" />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableResourceKey } from './types'

export type DataTableClearSelectionProps = PrimitiveProps

export interface DataTableClearSelectionSlotProps {
  selection: Array<DataTableResourceKey>
  clear: VoidFunction
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableClearSelectionProps>(), {
  as: 'button',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableClearSelectionSlotProps) => unknown
}>()

const attrs = useAttrs()
const context = useDataTableContext()
const selection = context.selectionState
const primitiveAttrs = computed(() => ({
  ...attrs,
  type: props.as === 'button' ? 'button' : undefined,
  onClick: selection.clearSelection,
}))
</script>
