<template>
  <DataTableFooter as-child>
    <TableFooter :class="props.class">
      <slot>
        <TableRow>
          <TableCell v-if="isSelectionApplicable" :class="insetLeft" />
          <DataTableFooterCells v-slot="{ cell, index }">
            <DataTableCell
              v-if="cell"
              :class="cn(
                !isSelectionApplicable && index === 0 ? insetLeft : undefined,
                !hasRowActions && index + 1 === table.footerCells.length ? insetRight : undefined,
              )"
            />
            <TableCell
              v-else
              :class="cn(
                !isSelectionApplicable && index === 0 ? insetLeft : undefined,
                !hasRowActions && index + 1 === table.footerCells.length ? insetRight : undefined,
              )"
            />
          </DataTableFooterCells>
          <TableCell v-if="hasRowActions" :class="insetRight" />
        </TableRow>
      </slot>
    </TableFooter>
  </DataTableFooter>
</template>

<script setup lang="ts">
import { DataTableFooter, DataTableFooterCells, useDataTableContext } from '@stacktrace/ui'
import type { HTMLAttributes } from 'vue'
import { TableCell, TableFooter, TableRow } from '@/Components/Table'
import { cn } from '@/Utils'
import DataTableCell from './DataTableCell.vue'

const props = defineProps<{
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()

const { table, hasRowActions, isSelectionApplicable } = useDataTableContext()
</script>
