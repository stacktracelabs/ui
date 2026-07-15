<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot :widget="props.widget" :index="props.index" :filter="context.filter">
      <component :is="props.widget.component" v-bind="widgetProps" />
    </slot>
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { Filter } from '@/Composables/useFilter'
import type { DataTableFilterWidgetValue } from './types'

export interface DataTableFilterWidgetProps extends PrimitiveProps {
  widget: DataTableFilterWidgetValue
  index?: number
}

export interface DataTableFilterWidgetSlotProps {
  widget: DataTableFilterWidgetValue
  index: number
  filter: Filter<Record<string, unknown>>
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed, type ComputedRef } from 'vue'
import {
  provideDataTableFilterWidgetContext,
  useDataTableContext,
  type DataTableFilterWidgetContext,
} from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableFilterWidgetProps>(), {
  as: 'template',
  asChild: false,
  index: 0,
})

defineSlots<{
  default?: (props: DataTableFilterWidgetSlotProps) => unknown
}>()

const context = useDataTableContext()
const widget: ComputedRef<DataTableFilterWidgetValue> = computed(() => props.widget)
const widgetContext: DataTableFilterWidgetContext = { widget }
const widgetProps = computed(() => ({
  ...props.widget.props,
  filter: context.filter,
}))

provideDataTableFilterWidgetContext(widgetContext)
</script>
