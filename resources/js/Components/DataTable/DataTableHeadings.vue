<template>
  <template v-if="table.headings.value.length > 0">
    <DataTableHeading
      v-for="(heading, index) in table.headings.value"
      :key="heading.id"
      :heading="heading"
      :index="index"
      as="template"
    >
      <template v-if="$slots.default" #default>
        <slot :heading="heading" :index="index" />
      </template>
    </DataTableHeading>
  </template>
</template>

<script lang="ts">
import type { DataTableHeadingValue } from './types'

export interface DataTableHeadingsSlotProps {
  heading: DataTableHeadingValue
  index: number
}
</script>

<script setup lang="ts">
import { useDataTableContext } from './context'
import DataTableHeading from './DataTableHeading.vue'

defineSlots<{
  default?: (props: DataTableHeadingsSlotProps) => unknown
}>()

const table = useDataTableContext()
</script>
