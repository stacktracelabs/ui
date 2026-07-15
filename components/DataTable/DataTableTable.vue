<template>
  <Table v-if="rows.length > 0" :class="props.class">
    <slot />
  </Table>
</template>

<script setup lang="ts">
import { useDataTableContext } from '@stacktrace/ui'
import type { HTMLAttributes } from 'vue'
import { Table } from '@/Components/Table'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { rows } = useDataTableContext()
</script>
