<template>
  <div
    :class="cn(
      'flex flex-row justify-between',
      insetLeft || 'pl-2',
      insetRight || 'pr-2',
      borderless ? 'pb-3' : 'border-b py-2',
      props.class,
    )"
  >
    <slot>
      <div class="inline-flex items-center gap-4">
        <DataTableSearch />
      </div>

      <div class="flex flex-row items-center gap-2">
        <DataTableSelectionStatus class="mr-4" />
        <DataTableBulkActions />
        <DataTableClearSelectionButton />
        <DataTablePerPage />
      </div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/Utils'
import DataTableBulkActions from './DataTableBulkActions.vue'
import DataTableClearSelectionButton from './DataTableClearSelectionButton.vue'
import DataTablePerPage from './DataTablePerPage.vue'
import DataTableSearch from './DataTableSearch.vue'
import DataTableSelectionStatus from './DataTableSelectionStatus.vue'

const props = defineProps<{
  borderless?: boolean
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()
</script>
