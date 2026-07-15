<template>
  <Primitive
    v-if="forceMount || runnableActions.length > 0"
    :as="as"
    :as-child="asChild"
    v-bind="$attrs"
  >
    <slot
      :value="value"
      :resource="value.resource"
      :actions="runnableActions"
      :is-running="controller.isRunning.value"
    />
  </Primitive>
</template>

<script setup lang="ts" generic="ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { computed } from 'vue'
import {
  useDataTableActionController,
  useDataTableActionRunner,
  type DataTableActionRunnerOptions,
} from './actions'
import {
  provideDataTableActionController,
  provideDataTableResourceActionsContext,
} from './context'
import type {
  DataTableEventPayload,
  DataTableResourceActionsValue,
  DataTableResourceKey,
} from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<PrimitiveProps & {
  value: DataTableResourceActionsValue<ResourceKey, ResourceValue, EventName>
  forceMount?: boolean
  actionEndpoint?: DataTableActionRunnerOptions['endpoint']
}>(), {
  as: 'div',
  asChild: false,
  forceMount: false,
})

const emit = defineEmits<{
  event: [payload: DataTableEventPayload<ResourceKey, EventName>]
}>()

const value = computed(() => props.value)
const runnableActions = computed(() => props.value.actions.filter(action => action.canRun))
const controller = useDataTableActionController<ResourceKey, EventName>(
  event => emit('event', event),
  useDataTableActionRunner<ResourceKey>(
    props.actionEndpoint === undefined ? {} : { endpoint: props.actionEndpoint },
  ),
)

provideDataTableResourceActionsContext({ value, runnableActions } as never)
provideDataTableActionController(controller as never)

defineExpose({ controller })
</script>
