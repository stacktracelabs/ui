<template>
  <TableRow
    :data-state="isSelected ? 'selected' : undefined"
    :class="cn(createDataTableRowStyle({ highlight: row.highlightAs || 'default' }), props.class)"
  >
    <slot :row="row" :index="index">
      <TableCell :class="cn('text-center', insetLeft)">
        <DataTableSelectRow />
      </TableCell>

      <DataTableCells v-slot="{ index: cellIndex }">
        <DataTableCell
          :class="!hasRowActions && cellIndex + 1 === row.cells.length ? insetRight : undefined"
        />
      </DataTableCells>

      <TableCell v-if="hasRowActions" :class="cn('py-0.5', insetRight)">
        <DataTableRowActions />
      </TableCell>
    </slot>
  </TableRow>
</template>

<script setup lang="ts">
import { DataTableCells, useDataTableContext, useDataTableRowContext } from '@stacktrace/ui'
import type { HTMLAttributes } from 'vue'
import { TableCell, TableRow } from '@/Components/Table'
import { cn } from '@/Utils'
import DataTableCell from './DataTableCell.vue'
import DataTableRowActions from './DataTableRowActions.vue'
import DataTableSelectRow from './DataTableSelectRow.vue'
import { createDataTableRowStyle } from './styles'

const props = defineProps<{
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()

const { row, index, isSelected } = useDataTableRowContext()
const { hasRowActions } = useDataTableContext()
</script>
