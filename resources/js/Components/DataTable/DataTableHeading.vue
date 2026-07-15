<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot :heading="props.heading" :index="props.index">
      {{ props.heading.name }}
    </slot>
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableHeadingValue } from './types'

export interface DataTableHeadingProps extends PrimitiveProps {
  heading: DataTableHeadingValue
  index?: number
}

export interface DataTableHeadingSlotProps {
  heading: DataTableHeadingValue
  index: number
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import {
  provideDataTableHeadingContext,
  type DataTableHeadingContext,
} from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableHeadingProps>(), {
  as: 'template',
  asChild: false,
  index: 0,
})

defineSlots<{
  default?: (props: DataTableHeadingSlotProps) => unknown
}>()

const heading = computed(() => props.heading)
const headingContext: DataTableHeadingContext = { heading }

provideDataTableHeadingContext(headingContext)
</script>
