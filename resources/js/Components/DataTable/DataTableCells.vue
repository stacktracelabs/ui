<template>
  <template v-if="row.row.cells.length > 0">
    <DataTableCell
      v-for="(cell, index) in row.row.cells"
      :key="cell.column || index"
      :cell="cell"
      :index="index"
      as="template"
    >
      <template v-if="$slots.default" #default>
        <slot :cell="cell" :index="index" :row="row.row" />
      </template>
    </DataTableCell>
  </template>
</template>

<script lang="ts">
import type { DataTableCellValue, DataTableRowValue } from './types'

export interface DataTableCellsSlotProps {
  cell: DataTableCellValue
  index: number
  row: DataTableRowValue
}
</script>

<script setup lang="ts">
import { useDataTableRowContext } from './context'
import DataTableCell from './DataTableCell.vue'

defineSlots<{
  default?: (props: DataTableCellsSlotProps) => unknown
}>()

const row = useDataTableRowContext()
</script>
