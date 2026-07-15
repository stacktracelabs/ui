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

export type DataTablePaginationNextProps = PrimitiveProps

export interface DataTablePaginationNextSlotProps {
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

const props = withDefaults(defineProps<DataTablePaginationNextProps>(), {
  asChild: false,
})

defineSlots<{
  default?: (props: DataTablePaginationNextSlotProps) => unknown
}>()

const context = useDataTableContext()
const pagination = computed(() => context.table.value.pagination)
const cursorPagination = computed(() => context.table.value.cursorPagination)
const href = computed(() => pagination.value?.nextPageUrl ?? cursorPagination.value?.nextPageUrl ?? null)
const disabled = computed(() => !href.value)
const renderAs = computed(() => props.as ?? (href.value ? Link : 'button'))
</script>
