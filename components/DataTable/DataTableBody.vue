<template>
  <TableBody :class="props.class">
    <slot>
      <DataTableRows>
        <DataTableRow :inset-left="insetLeft" :inset-right="insetRight" />
      </DataTableRows>
    </slot>
  </TableBody>
</template>

<script setup lang="ts">
import { DataTableRows } from '@stacktrace/ui'
import type { HTMLAttributes } from 'vue'
import { TableBody } from '@/Components/Table'
import DataTableRow from './DataTableRow.vue'

const props = defineProps<{
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()
</script>
