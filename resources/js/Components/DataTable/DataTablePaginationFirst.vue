<template>
  <Primitive
    v-if="isApplicable"
    v-bind="$attrs"
    :as="renderAs"
    :as-child="props.asChild"
    :href="href ?? undefined"
    :disabled="renderAs === 'button' ? disabled : undefined"
    :type="renderAs === 'button' ? 'button' : undefined"
    :aria-disabled="disabled"
  >
    <slot
      :href="href"
      :disabled="disabled"
      :pagination="pagination"
      :cursor-pagination="cursorPagination"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableCursorPaginationValue, DataTablePaginationValue } from './types'

export type DataTablePaginationFirstProps = PrimitiveProps

export interface DataTablePaginationFirstSlotProps {
  href: string | null
  disabled: boolean
  pagination: DataTablePaginationValue | null
  cursorPagination: DataTableCursorPaginationValue | null
}
</script>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTablePaginationFirstProps>(), {
  asChild: false,
})

defineSlots<{
  default?: (props: DataTablePaginationFirstSlotProps) => unknown
}>()

const context = useDataTableContext()
const pagination = computed(() => context.table.value.pagination)
const cursorPagination = computed(() => context.table.value.cursorPagination)
const isApplicable = computed(() => context.isPaginationApplicable.value && pagination.value !== null)
const href = computed(() => pagination.value?.firstPageUrl ?? null)
const disabled = computed(() => !href.value)
const renderAs = computed(() => props.as ?? (href.value ? Link : 'button'))
</script>
