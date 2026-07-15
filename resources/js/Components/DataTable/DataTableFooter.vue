<template>
  <Primitive
    v-if="table.isFooterApplicable.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot :cells="table.table.value.footerCells" />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableCellValue } from './types'

export type DataTableFooterProps = PrimitiveProps

export interface DataTableFooterSlotProps {
  cells: Array<DataTableCellValue | null>
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableFooterProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableFooterSlotProps) => unknown
}>()

const table = useDataTableContext()
</script>
