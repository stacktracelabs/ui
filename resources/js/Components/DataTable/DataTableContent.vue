<template>
  <Primitive
    v-if="context.isContentApplicable.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot :table="context.table.value" />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableValue } from './types'

export type DataTableContentProps = PrimitiveProps

export interface DataTableContentSlotProps {
  table: DataTableValue
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableContentProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableContentSlotProps) => unknown
}>()

const context = useDataTableContext()
</script>
