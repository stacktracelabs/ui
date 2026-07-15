<template>
  <DataTableEmptyResults v-slot="{ clear }" as-child>
    <DataTableEmpty
      :title="title || messages.searchEmptyTitle"
      :description="description || messages.searchEmptyDescription"
      :icon="SearchIcon"
      :class="props.class"
    >
      <slot :clear="clear">
        <Button @click="clear">
          <XIcon class="mr-2 size-4" />
          {{ messages.clearSearch }}
        </Button>
      </slot>
    </DataTableEmpty>
  </DataTableEmptyResults>
</template>

<script setup lang="ts">
import { DataTableEmptyResults } from '@stacktrace/ui'
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
</script>
