<template>
  <Primitive
    v-if="context.isPaginationApplicable.value && pagination"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot
      :current-page="pagination.currentPage"
      :last-page="pagination.lastPage"
      :total="pagination.total"
      :pagination="pagination"
    >
      {{ pagination.currentPage }} / {{ pagination.lastPage }}
    </slot>
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTablePaginationValue } from './types'

export type DataTablePaginationStatusProps = PrimitiveProps

export interface DataTablePaginationStatusSlotProps {
  currentPage: number
  lastPage: number
  total: number
  pagination: DataTablePaginationValue
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTablePaginationStatusProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTablePaginationStatusSlotProps) => unknown
}>()

const context = useDataTableContext()
const pagination = computed(() => context.table.value.pagination)
</script>
