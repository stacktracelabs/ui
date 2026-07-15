<template>
  <Primitive
    v-if="context.isPaginationApplicable.value"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot :pagination="pagination" :cursor-pagination="cursorPagination" />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableCursorPaginationValue, DataTablePaginationValue } from './types'

export type DataTablePaginationProps = PrimitiveProps

export interface DataTablePaginationSlotProps {
  pagination: DataTablePaginationValue | null
  cursorPagination: DataTableCursorPaginationValue | null
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTablePaginationProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTablePaginationSlotProps) => unknown
}>()

const context = useDataTableContext()
const pagination = computed(() => context.table.value.pagination)
const cursorPagination = computed(() => context.table.value.cursorPagination)
</script>
