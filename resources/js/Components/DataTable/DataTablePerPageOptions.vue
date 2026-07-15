<template>
  <template v-if="context.hasPerPageSettings.value">
    <slot
      v-for="(option, index) in context.table.value.perPageOptions"
      :option="option"
      :selected="context.perPage.value === option"
      :select="() => context.setPerPage(option)"
      :index="index"
    />
  </template>
</template>

<script lang="ts">
export interface DataTablePerPageOptionsProps {}

export interface DataTablePerPageOptionsSlotProps {
  option: number
  selected: boolean
  select: VoidFunction
  index: number
}
</script>

<script setup lang="ts">
import { useDataTableContext } from './context'

defineProps<DataTablePerPageOptionsProps>()

defineSlots<{
  default?: (props: DataTablePerPageOptionsSlotProps) => unknown
}>()

const context = useDataTableContext()
</script>
