<template>
  <Primitive
    v-if="context.isPaginationApplicable.value"
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

export type DataTablePaginationPreviousProps = PrimitiveProps

export interface DataTablePaginationPreviousSlotProps {
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

const props = withDefaults(defineProps<DataTablePaginationPreviousProps>(), {
  asChild: false,
})

defineSlots<{
  default?: (props: DataTablePaginationPreviousSlotProps) => unknown
}>()

const context = useDataTableContext()
const pagination = computed(() => context.table.value.pagination)
const cursorPagination = computed(() => context.table.value.cursorPagination)
const href = computed(() => pagination.value?.prevPageUrl ?? cursorPagination.value?.prevPageUrl ?? null)
const disabled = computed(() => !href.value)
const renderAs = computed(() => props.as ?? (href.value ? Link : 'button'))
</script>
