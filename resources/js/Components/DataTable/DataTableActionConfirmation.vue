<template>
  <Primitive
    v-if="pending"
    v-bind="$attrs"
    :as="props.as"
    :as-child="props.asChild"
  >
    <slot
      :action="pending.action"
      :selection="[...pending.selection]"
      :confirm="controller.confirmAction"
      :cancel="controller.cancelAction"
      :is-running="isRunning"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type {
  DataTableExecutableAction,
  DataTableResourceKey,
} from './types'

export type DataTableActionConfirmationProps = PrimitiveProps

export interface DataTableActionConfirmationSlotProps<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
> {
  action: DataTableExecutableAction
  selection: Array<ResourceKey>
  confirm: VoidFunction
  cancel: VoidFunction
  isRunning: boolean
}
</script>

<script setup lang="ts" generic="ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import { useDataTableActionControllerContext } from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableActionConfirmationProps>(), {
  as: 'template',
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableActionConfirmationSlotProps<ResourceKey>) => unknown
}>()

const controller = useDataTableActionControllerContext<ResourceKey, EventName>()
const pending = controller.pendingAction
const isRunning = computed(() => pending.value
  ? controller.isActionRunning(pending.value.action, pending.value.selection)
  : false)
</script>
