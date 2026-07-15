<template>
  <Primitive
    v-if="selection.somethingSelected.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot
      :selection="[...selection.selection.value]"
      :selected-count="selection.selectedCount.value"
      :total-count="selection.totalCount.value"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableResourceKey } from './types'

export type DataTableSelectionStatusProps = PrimitiveProps

export interface DataTableSelectionStatusSlotProps {
  selection: Array<DataTableResourceKey>
  selectedCount: number
  totalCount: number
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableSelectionStatusProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableSelectionStatusSlotProps) => unknown
}>()

const context = useDataTableContext()
const selection = context.selectionState
</script>
