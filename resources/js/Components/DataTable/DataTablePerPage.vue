<template>
  <Primitive
    v-if="context.hasPerPageSettings.value"
    v-bind="$attrs"
    :as="props.as"
    :as-child="props.asChild"
  >
    <slot
      :model-value="context.perPage.value"
      :options="[...context.table.value.perPageOptions]"
      :update="context.setPerPage"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'

export type DataTablePerPageProps = PrimitiveProps

export interface DataTablePerPageSlotProps {
  modelValue: number
  options: Array<number>
  update: (value: number) => void
}
</script>

<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { useDataTableContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTablePerPageProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTablePerPageSlotProps) => unknown
}>()

const context = useDataTableContext()
</script>
