<template>
  <TableRow
    :data-state="isSelected ? 'selected' : undefined"
    :class="cn(createDataTableRowStyle({ highlight: row.highlightAs || 'default' }), props.class)"
  >
    <slot :row="row" :index="index">
      <TableCell
        v-if="isSelectionApplicable"
        :class="cn('text-center', cellDensity, insetLeft)"
      >
        <DataTableSelectRow />
      </TableCell>

      <DataTableCells v-slot="{ index: cellIndex }">
        <DataTableCell
          :class="cn(
            !isSelectionApplicable && cellIndex === 0 ? insetLeft : undefined,
            !hasRowActions && cellIndex + 1 === row.cells.length ? insetRight : undefined,
          )"
        />
      </DataTableCells>

      <TableCell v-if="hasRowActions" :class="cn(actionCellDensity, insetRight)">
        <DataTableRowActions />
      </TableCell>
    </slot>
  </TableRow>
</template>

<script setup lang="ts">
import { DataTableCells, useDataTableContext, useDataTableRowContext } from '@stacktrace/ui'
import { computed, type HTMLAttributes } from 'vue'
import { TableCell, TableRow } from '@/Components/Table'
import { cn } from '@/Utils'
import DataTableCell from './DataTableCell.vue'
import DataTableRowActions from './DataTableRowActions.vue'
import DataTableSelectRow from './DataTableSelectRow.vue'
import { createDataTableDensityStyle, useDataTableDensity } from './density'
import { createDataTableRowStyle } from './styles'

const props = defineProps<{
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()

const { row, index, isSelected } = useDataTableRowContext()
const { hasRowActions, isSelectionApplicable } = useDataTableContext()
const density = useDataTableDensity()
const cellDensity = computed(() => createDataTableDensityStyle('cell', density.value))
const actionCellDensity = computed(() => createDataTableDensityStyle('actionCell', density.value))
</script>
