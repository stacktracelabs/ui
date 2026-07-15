<template>
  <DataTableSelectRow v-slot="{ selected, toggle }" as="span">
    <Checkbox
      :model-value="selected"
      :aria-label="messages.selectRow"
      @click.stop="toggle"
    />
  </DataTableSelectRow>
</template>

<script setup lang="ts">
import { DataTableSelectRow } from '@stacktrace/ui'
import { Checkbox } from '@/Components/Checkbox'
import messages from './messages'
</script>
