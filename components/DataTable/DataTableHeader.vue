<template>
  <TableHeader :class="props.class">
    <slot>
      <TableRow>
        <TableHead v-if="isSelectionApplicable" :class="cn('w-10 text-center', insetLeft)">
          <DataTableSelectAll />
        </TableHead>

        <DataTableHeadings v-slot="{ heading, index }">
          <DataTableHeading
            :is-last="index + 1 === headings.length"
            :inset-right="insetRight"
            :class="!isSelectionApplicable && index === 0 ? insetLeft : undefined"
          />
        </DataTableHeadings>

        <TableHead v-if="hasRowActions" :class="cn('w-10', insetRight)" />
      </TableRow>
    </slot>
  </TableHeader>
</template>

<script setup lang="ts">
import { DataTableHeadings, useDataTableContext } from '@stacktrace/ui'
import type { HTMLAttributes } from 'vue'
import { TableHead, TableHeader, TableRow } from '@/Components/Table'
import { cn } from '@/Utils'
import DataTableHeading from './DataTableHeading.vue'
import DataTableSelectAll from './DataTableSelectAll.vue'

const props = defineProps<{
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()

const { headings, hasRowActions, isSelectionApplicable } = useDataTableContext()
</script>
