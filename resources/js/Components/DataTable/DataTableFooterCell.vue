<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot :cell="props.cell" :index="props.index">
      <DataTableCellContent v-if="props.cell" />
    </slot>
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableCellValue } from './types'

export interface DataTableFooterCellProps extends PrimitiveProps {
  cell?: DataTableCellValue | null
  index?: number
}

export interface DataTableFooterCellSlotProps {
  cell: DataTableCellValue | null
  index: number
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import {
  provideDataTableCellContext,
  provideDataTableFooterCellContext,
  type DataTableCellContext,
  type DataTableFooterCellContext,
} from './context'
import DataTableCellContent from './DataTableCellContent.vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableFooterCellProps>(), {
  as: 'template',
  asChild: false,
  cell: null,
  index: 0,
})

defineSlots<{
  default?: (props: DataTableFooterCellSlotProps) => unknown
}>()

const footerCell = computed(() => props.cell)
const cell = computed(() => props.cell!)
const footerCellContext: DataTableFooterCellContext = { cell: footerCell }
const cellContext: DataTableCellContext = { cell }

provideDataTableFooterCellContext(footerCellContext)
provideDataTableCellContext(cellContext)
</script>
