<template>
  <DataTableFooter as-child>
    <TableFooter :class="props.class">
      <slot>
        <TableRow>
          <TableCell :class="insetLeft" />
          <DataTableFooterCells v-slot="{ cell, index }">
            <DataTableCell
              v-if="cell"
              :class="!hasRowActions && index + 1 === table.footerCells.length ? insetRight : undefined"
            />
            <TableCell
              v-else
              :class="!hasRowActions && index + 1 === table.footerCells.length ? insetRight : undefined"
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
import DataTableCell from './DataTableCell.vue'

const props = defineProps<{
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()

const { table, hasRowActions } = useDataTableContext()
</script>
