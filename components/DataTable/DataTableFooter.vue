<template>
  <DataTableFooter as-child>
    <TableFooter :class="props.class">
      <slot>
        <TableRow>
          <TableCell v-if="isSelectionApplicable" :class="cn(cellDensity, insetLeft)" />
          <DataTableFooterCells v-slot="{ cell, index }">
            <DataTableCell
              v-if="cell"
              :class="cn(
                !isSelectionApplicable && index === 0 ? insetLeft : undefined,
                !hasRowActions && index + 1 === table.footerCells.length ? insetRight : undefined,
                cellDensity,
              )"
            />
            <TableCell
              v-else
              :class="cn(
                !isSelectionApplicable && index === 0 ? insetLeft : undefined,
                !hasRowActions && index + 1 === table.footerCells.length ? insetRight : undefined,
                cellDensity,
              )"
            />
          </DataTableFooterCells>
          <TableCell v-if="hasRowActions" :class="cn(cellDensity, insetRight)" />
        </TableRow>
      </slot>
    </TableFooter>
  </DataTableFooter>
</template>

<script setup lang="ts">
import { DataTableFooter, DataTableFooterCells, useDataTableContext } from '@stacktrace/ui'
import { computed, type HTMLAttributes } from 'vue'
import { TableCell, TableFooter, TableRow } from '@/Components/Table'
import { cn } from '@/Utils'
import DataTableCell from './DataTableCell.vue'
import { createDataTableDensityStyle, useDataTableDensity } from './density'

const props = defineProps<{
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()

const { table, hasRowActions, isSelectionApplicable } = useDataTableContext()
const density = useDataTableDensity()
const cellDensity = computed(() => createDataTableDensityStyle('cell', density.value))
</script>
