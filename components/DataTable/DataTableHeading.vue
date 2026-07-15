<template>
  <TableHead
    :class="cn(
      { 'px-0': !!heading.sortableAs },
      headingDensity,
      createDataTableHeadingStyle(heading.style),
      isLast && !hasRowActions ? insetRight : undefined,
      props.class,
    )"
    :style="{
      width: heading.width || undefined,
      minWidth: heading.minWidth || undefined,
      maxWidth: heading.maxWidth || undefined,
    }"
  >
    <DataTableSorting v-slot="{ isApplied, isAscending }" as-child>
      <Button class="h-8 px-1 text-sm" variant="ghost" size="sm">
        {{ heading.name }}
        <ChevronsUpIcon v-if="isApplied && isAscending" class="ml-1.5 size-4" />
        <ChevronsDownIcon v-else-if="isApplied" class="ml-1.5 size-4" />
        <ChevronsUpDownIcon v-else class="ml-1.5 size-4" />
      </Button>
    </DataTableSorting>
    <template v-if="!heading.sortableAs">{{ heading.name }}</template>
  </TableHead>
</template>

<script setup lang="ts">
import { DataTableSorting, useDataTableContext, useDataTableHeadingContext } from '@stacktrace/ui'
import { ChevronsDownIcon, ChevronsUpDownIcon, ChevronsUpIcon } from '@lucide/vue'
import { computed, type HTMLAttributes } from 'vue'
import { Button } from '@/Components/Button'
import { TableHead } from '@/Components/Table'
import { cn } from '@/Utils'
import { createDataTableDensityStyle, useDataTableDensity } from './density'
import { createDataTableHeadingStyle } from './styles'

const props = defineProps<{
  isLast?: boolean
  insetRight?: string
  class?: HTMLAttributes['class']
}>()

const { heading } = useDataTableHeadingContext()
const { hasRowActions } = useDataTableContext()
const density = useDataTableDensity()
const headingDensity = computed(() => createDataTableDensityStyle('heading', density.value))
</script>
