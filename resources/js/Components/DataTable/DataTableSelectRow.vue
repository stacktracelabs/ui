<template>
  <Primitive
    v-if="selectable"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="primitiveAttrs"
  >
    <slot :row="row" :selected="selected" :toggle="toggle" />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableRowValue } from './types'

export interface DataTableSelectRowProps extends PrimitiveProps {
  row?: DataTableRowValue
}

export interface DataTableSelectRowSlotProps {
  row: DataTableRowValue
  selected: boolean
  toggle: VoidFunction
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { useDataTableContext, useDataTableRowContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableSelectRowProps>(), {
  as: 'button',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableSelectRowSlotProps) => unknown
}>()

const attrs = useAttrs()
const context = useDataTableContext()
const rowContext = props.row === undefined ? useDataTableRowContext() : null
const row = computed<DataTableRowValue>(() => props.row ?? rowContext!.row)
const selectable = computed(() => context.isSelectionApplicable.value && context.isRowSelectable(row.value))
const selected = computed(() => context.selectionState.isRowSelected(row.value.key))
const toggle = () => context.selectionState.toggleRow(row.value.key)
const primitiveAttrs = computed(() => ({
  ...attrs,
  type: props.as === 'button' ? 'button' : undefined,
  'aria-pressed': selected.value,
  'data-state': selected.value ? 'checked' : 'unchecked',
  onClick: toggle,
}))
</script>
