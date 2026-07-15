<template>
  <Primitive
    v-if="action.canRun"
    v-bind="activationProps"
    :as="renderAs"
    :as-child="props.asChild"
  >
    <slot
      :action="action"
      :selection="[...selection]"
      :activate="activate"
      :is-running="isRunning"
    >
      {{ action.label }}
    </slot>
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableAction, DataTableResourceKey } from './types'

export type DataTableActionActivationProps = PrimitiveProps

export interface DataTableActionActivationSlotProps<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> {
  action: DataTableAction<EventName>
  selection: Array<ResourceKey>
  activate: VoidFunction
  isRunning: boolean
}
</script>

<script setup lang="ts" generic="ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string">
import { Link } from '@inertiajs/vue3'
import { Primitive } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import {
  useDataTableActionControllerContext,
  useDataTableActionScopeContext,
} from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableActionActivationProps>(), {
  asChild: false,
})

defineSlots<{
  default?: (props: DataTableActionActivationSlotProps<ResourceKey, EventName>) => unknown
}>()

const scope = useDataTableActionScopeContext<ResourceKey, EventName>()
const controller = useDataTableActionControllerContext<ResourceKey, EventName>()
const attrs = useAttrs()
const action = computed(() => scope.action)
const selection = computed(() => scope.selection)
const isRunning = computed(() => controller.isActionRunning(action.value, selection.value))
const activate = () => {
  if (!isRunning.value) {
    controller.activateAction(action.value, [...selection.value])
  }
}
const renderAs = computed(() => props.as ?? (action.value.type === 'Link'
  ? action.value.isExternal ? 'a' : Link
  : 'button'))
const activationProps = computed<Record<string, unknown>>(() => ({
  ...attrs,
  href: action.value.type === 'Link' ? action.value.url : undefined,
  type: renderAs.value === 'button' ? 'button' : undefined,
  disabled: action.value.type === 'Executable' && isRunning.value ? true : undefined,
  onClick: action.value.type === 'Link' ? undefined : activate,
}))
</script>
