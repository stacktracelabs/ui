<template>
  <template v-if="table.isFooterApplicable.value">
    <DataTableFooterCell
      v-for="(cell, index) in table.table.value.footerCells"
      :key="cell?.column ?? `empty-${index}`"
      :cell="cell"
      :index="index"
      as="template"
    >
      <template v-if="$slots.default" #default>
        <slot :cell="cell" :index="index" />
      </template>
    </DataTableFooterCell>
  </template>
</template>

<script lang="ts">
import type { DataTableCellValue } from './types'

export interface DataTableFooterCellsSlotProps {
  cell: DataTableCellValue | null
  index: number
}
</script>

<script setup lang="ts">
import { useDataTableContext } from './context'
import DataTableFooterCell from './DataTableFooterCell.vue'

defineSlots<{
  default?: (props: DataTableFooterCellsSlotProps) => unknown
}>()

const table = useDataTableContext()
</script>
