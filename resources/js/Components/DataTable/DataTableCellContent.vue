<template>
  <Primitive
    v-if="cell.link"
    :as="cell.link.isExternal ? 'a' : Link"
    :href="cell.link.url"
  >
    <slot :cell="cell">
      <component :is="cell.component" v-bind="cell.props" />
    </slot>
  </Primitive>
  <slot v-else :cell="cell">
    <component :is="cell.component" v-bind="cell.props" />
  </slot>
</template>

<script lang="ts">
import type { DataTableCellValue } from './types'

export interface DataTableCellContentSlotProps {
  cell: DataTableCellValue
}
</script>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { Primitive } from 'reka-ui'
import { useDataTableCellContext } from './context'

defineSlots<{
  default?: (props: DataTableCellContentSlotProps) => unknown
}>()

const { cell } = useDataTableCellContext()
</script>
