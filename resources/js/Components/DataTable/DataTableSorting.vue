<template>
  <Primitive
    v-if="column"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="primitiveAttrs"
  >
    <slot
      :column="column"
      :direction="direction"
      :is-applied="isApplied"
      :is-ascending="isAscending"
      :toggle="toggle"
    >
      {{ heading?.name }}
    </slot>
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export interface DataTableSortingProps extends PrimitiveProps {
  column?: string
}

export interface DataTableSortingSlotProps {
  column: string
  direction: 'asc' | 'desc' | null
  isApplied: boolean
  isAscending: boolean
  toggle: VoidFunction
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import {
  useDataTableContext,
  useDataTableHeadingContext,
} from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableSortingProps>(), {
  as: 'button',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableSortingSlotProps) => unknown
}>()

const attrs = useAttrs()
const table = useDataTableContext()
const headingContext = props.column === undefined ? useDataTableHeadingContext() : null
const heading = computed(() => headingContext?.heading.value)
const column = computed(() => props.column ?? heading.value?.sortableAs)
const isApplied = computed(() => table.sortBy.value === column.value)
const isAscending = computed(() => isApplied.value && table.sortDirection.value === 'asc')
const direction = computed(() => isApplied.value ? table.sortDirection.value : null)
const toggle = () => {
  if (column.value) {
    table.toggleSorting(column.value)
  }
}
const primitiveAttrs = computed(() => ({
  ...attrs,
  type: props.as === 'button' ? 'button' : undefined,
  'data-state': isApplied.value ? 'active' : 'inactive',
  'data-direction': isApplied.value ? table.sortDirection.value : undefined,
  onClick: toggle,
}))
</script>
