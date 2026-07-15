<template>
  <TableCell
    :class="cn(cellDensity, createDataTableCellStyle(cell.style), props.class)"
    :style="{
      width: cell.width || undefined,
      minWidth: cell.minWidth || undefined,
      maxWidth: cell.maxWidth || undefined,
    }"
  >
    <slot :cell="cell">
      <DataTableCellContent />
    </slot>
  </TableCell>
</template>

<script setup lang="ts">
import { DataTableCellContent, useDataTableCellContext } from '@stacktrace/ui'
import { computed, type HTMLAttributes } from 'vue'
import { TableCell } from '@/Components/Table'
import { cn } from '@/Utils'
import { createDataTableDensityStyle, useDataTableDensity } from './density'
import { createDataTableCellStyle } from './styles'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { cell } = useDataTableCellContext()
const density = useDataTableDensity()
const cellDensity = computed(() => createDataTableDensityStyle('cell', density.value))
</script>
