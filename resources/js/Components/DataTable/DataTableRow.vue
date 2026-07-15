<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
    :data-state="rowContext.isSelected.value ? 'selected' : undefined"
  >
    <slot
      :row="props.row"
      :index="props.index"
      :is-selectable="rowContext.isSelectable.value"
      :is-selected="rowContext.isSelected.value"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableRowValue } from './types'

export interface DataTableRowProps extends PrimitiveProps {
  row: DataTableRowValue
  index?: number
}

export interface DataTableRowSlotProps {
  row: DataTableRowValue
  index: number
  isSelectable: boolean
  isSelected: boolean
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import {
  provideDataTableRowContext,
  useDataTableContext,
  type DataTableRowContext,
} from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableRowProps>(), {
  as: 'template',
  asChild: false,
  index: 0,
})

defineSlots<{
  default?: (props: DataTableRowSlotProps) => unknown
}>()

const table = useDataTableContext()
const rowContext: DataTableRowContext = {
  get row() { return props.row },
  get index() { return props.index },
  isSelectable: computed(() => table.isRowSelectable(props.row)),
  isSelected: computed(() => table.selectionState.isRowSelected(props.row.key)),
}

provideDataTableRowContext(rowContext)
</script>
