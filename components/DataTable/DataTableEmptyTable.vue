<template>
  <DataTableEmptyTable as-child>
    <DataTableEmpty
      :title="title || messages.emptyTableTitle"
      :description="description || messages.emptyTableDescription"
      :icon="TableIcon"
      :class="props.class"
    >
      <template v-if="$slots.default" #default>
        <slot />
      </template>
    </DataTableEmpty>
  </DataTableEmptyTable>
</template>

<script setup lang="ts">
import { DataTableEmptyTable } from '@stacktrace/ui'
import { TableIcon } from '@lucide/vue'
import type { HTMLAttributes } from 'vue'
import DataTableEmpty from './DataTableEmpty.vue'
import messages from './messages'

const props = defineProps<{
  title?: string
  description?: string
  class?: HTMLAttributes['class']
}>()
</script>
