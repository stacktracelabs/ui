<template>
  <DataTableClearSelection as-child>
    <Button size="sm" variant="outline">
      <XIcon class="mr-1 size-4" />
      <slot>{{ messages.cancelSelection }}</slot>
    </Button>
  </DataTableClearSelection>
</template>

<script setup lang="ts">
import { DataTableClearSelection } from '@stacktrace/ui'
import { XIcon } from '@lucide/vue'
import { Button } from '@/Components/Button'
import messages from './messages'
</script>
