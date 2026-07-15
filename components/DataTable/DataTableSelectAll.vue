<template>
  <DataTableSelectAll v-slot="{ selected, indeterminate, toggle }" as="span">
    <Checkbox
      :model-value="selected"
      :indeterminate="indeterminate"
      :aria-label="messages.selectAllRows"
      @click.stop="toggle"
    />
  </DataTableSelectAll>
</template>

<script setup lang="ts">
import { DataTableSelectAll } from '@stacktrace/ui'
import { Checkbox } from '@/Components/Checkbox'
import messages from './messages'
</script>
