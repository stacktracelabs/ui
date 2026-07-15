<template>
  <Primitive
    v-if="context.isEmptyResultsApplicable.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot :table="context.table.value" :clear="context.clearSearch" />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableValue } from './types'

export type DataTableEmptyResultsProps = PrimitiveProps

export interface DataTableEmptyResultsSlotProps {
  table: DataTableValue
  clear: VoidFunction
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableEmptyResultsProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableEmptyResultsSlotProps) => unknown
}>()

const context = useDataTableContext()
</script>
