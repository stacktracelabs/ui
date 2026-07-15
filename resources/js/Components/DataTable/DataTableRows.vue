<template>
  <template v-if="table.rows.value.length > 0">
    <DataTableRow
      v-for="(row, index) in table.rows.value"
      :key="row.key"
      :row="row"
      :index="index"
      as="template"
    >
      <template #default>
        <slot :row="row" :index="index" />
      </template>
    </DataTableRow>
  </template>
</template>

<script lang="ts">
import type { DataTableRowValue } from './types'

export interface DataTableRowsSlotProps {
  row: DataTableRowValue
  index: number
}
</script>

<script setup lang="ts">
import { useDataTableContext } from './context'
import DataTableRow from './DataTableRow.vue'

defineSlots<{
  default?: (props: DataTableRowsSlotProps) => unknown
}>()

const table = useDataTableContext()
</script>
