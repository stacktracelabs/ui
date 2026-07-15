<template>
  <DataTableSelectionStatus v-slot="{ selectedCount, totalCount }" as-child>
    <div :class="cn('text-sm font-medium', props.class)">
      <slot :selected-count="selectedCount" :total-count="totalCount">
        {{ messages.selectedRows(selectedCount, totalCount) }}
      </slot>
    </div>
  </DataTableSelectionStatus>
</template>

<script setup lang="ts">
import { DataTableSelectionStatus } from '@stacktrace/ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/Utils'
import messages from './messages'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
