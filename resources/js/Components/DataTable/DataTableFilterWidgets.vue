<template>
  <template v-if="context.isFiltersApplicable.value && widgets.length > 0">
    <DataTableFilterWidget
      v-for="(widget, index) in widgets"
      :key="index"
      :widget="widget"
      :index="index"
      as="template"
    >
      <template v-if="$slots.default" #default>
        <slot :widget="widget" :index="index" :filter="context.filter" />
      </template>
    </DataTableFilterWidget>
  </template>
</template>

<script lang="ts">
import type { Filter } from '@/Composables/useFilter'
import type { DataTableFilterWidgetValue } from './types'

export interface DataTableFilterWidgetsSlotProps {
  widget: DataTableFilterWidgetValue
  index: number
  filter: Filter<Record<string, unknown>>
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { useDataTableContext } from './context'
import DataTableFilterWidget from './DataTableFilterWidget.vue'

defineSlots<{
  default?: (props: DataTableFilterWidgetsSlotProps) => unknown
}>()

const context = useDataTableContext()
const widgets = computed(() => context.table.value.filter?.widgets ?? [])
</script>
