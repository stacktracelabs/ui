<template>
  <Primitive :as="as" :as-child="asChild" v-bind="$attrs">
    <slot :context="context" :selection="selectionModel" />
  </Primitive>
</template>

<script setup lang="ts" generic="ResourceValue = object, ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { computed, ref, type Ref } from 'vue'
import type { DataTableActionRunnerOptions } from './actions'
import {
  createDataTableContext,
  provideDataTableActionController,
  provideDataTableContext,
} from './context'
import type {
  DataTableEventPayload,
  DataTableResourceKey,
  DataTableValue,
} from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<PrimitiveProps & {
  table: DataTableValue<ResourceValue, ResourceKey, EventName>
  /** Controlled selection. Omit to let the root own its selection state. */
  selection?: Array<ResourceKey>
  defaultSelection?: Array<ResourceKey>
  actionEndpoint?: DataTableActionRunnerOptions['endpoint']
}>(), {
  as: 'div',
  asChild: false,
  defaultSelection: () => [],
})

const emit = defineEmits<{
  event: [payload: DataTableEventPayload<ResourceKey, EventName>]
  'update:selection': [selection: Array<ResourceKey>]
}>()

const localSelection = ref<Array<ResourceKey>>([...props.defaultSelection]) as Ref<Array<ResourceKey>>
const selectionModel = computed<Array<ResourceKey>>({
  get: () => props.selection === undefined ? localSelection.value : props.selection,
  set: value => {
    const nextSelection = [...value]
    if (props.selection === undefined) {
      localSelection.value = nextSelection
    }
    emit('update:selection', nextSelection)
  },
})

const table = computed(() => props.table)
const context = createDataTableContext(
  table,
  selectionModel,
  event => emit('event', event),
  props.actionEndpoint === undefined ? {} : { endpoint: props.actionEndpoint },
)

provideDataTableContext(context as never)
provideDataTableActionController(context as never)

defineExpose({ context })
</script>
