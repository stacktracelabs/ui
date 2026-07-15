<template>
  <DataTableEmptyResults v-slot="emptyResults" as-child>
    <DataTableEmpty
      :title="title || messages.searchEmptyTitle"
      :description="description || messages.searchEmptyDescription"
      :icon="SearchIcon"
      :class="props.class"
    >
      <slot v-bind="emptyResults">
        <Button
          v-if="emptyResults.searchApplied || emptyResults.filtersApplied"
          @click="emptyResults.clear"
        >
          <XIcon />
          {{ emptyResults.searchApplied ? messages.clearSearch : messages.clearFilters }}
        </Button>
      </slot>
    </DataTableEmpty>
  </DataTableEmptyResults>
</template>

<script setup lang="ts">
import {
  DataTableEmptyResults,
  type DataTableEmptyResultsSlotProps,
} from '@stacktrace/ui'
import { SearchIcon, XIcon } from '@lucide/vue'
import type { HTMLAttributes } from 'vue'
import { Button } from '@/Components/Button'
import DataTableEmpty from './DataTableEmpty.vue'
import messages from './messages'

const props = defineProps<{
  title?: string
  description?: string
  class?: HTMLAttributes['class']
}>()

defineSlots<{
  default?: (props: DataTableEmptyResultsSlotProps) => unknown
}>()
</script>
