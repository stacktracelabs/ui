<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot :cell="props.cell" :index="props.index">
      <DataTableCellContent />
    </slot>
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableCellValue } from './types'

export interface DataTableCellProps extends PrimitiveProps {
  cell: DataTableCellValue
  index?: number
}

export interface DataTableCellSlotProps {
  cell: DataTableCellValue
  index: number
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import {
  provideDataTableCellContext,
  type DataTableCellContext,
} from './context'
import DataTableCellContent from './DataTableCellContent.vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableCellProps>(), {
  as: 'template',
  asChild: false,
  index: 0,
})

defineSlots<{
  default?: (props: DataTableCellSlotProps) => unknown
}>()

const cell = computed(() => props.cell)
const cellContext: DataTableCellContext = { cell }

provideDataTableCellContext(cellContext)
</script>
