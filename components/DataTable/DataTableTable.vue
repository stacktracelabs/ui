<template>
  <Table
    v-if="rows.length > 0"
    :data-density="density"
    :class="props.class"
  >
    <slot :density="density" />
  </Table>
</template>

<script setup lang="ts">
import { useDataTableContext } from '@stacktrace/ui'
import { computed, type HTMLAttributes } from 'vue'
import { Table } from '@/Components/Table'
import {
  provideDataTableDensityContext,
  type DataTableDensity,
} from './density'

const props = withDefaults(defineProps<{
  density?: DataTableDensity
  class?: HTMLAttributes['class']
}>(), {
  density: 'default',
})

defineSlots<{
  default?: (props: { density: DataTableDensity }) => unknown
}>()

const { rows } = useDataTableContext()
const density = computed(() => props.density)

provideDataTableDensityContext({ density })
</script>
