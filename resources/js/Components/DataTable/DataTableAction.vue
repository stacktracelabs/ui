<template>
  <Primitive
    v-if="props.action.canRun"
    v-bind="$attrs"
    :as="props.as"
    :as-child="props.asChild"
  >
    <slot
      :action="props.action"
      :selection="[...props.selection]"
      :index="props.index"
    />
  </Primitive>
</template>

<script lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { DataTableAction, DataTableResourceKey } from './types'

export interface DataTableActionProps<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> extends PrimitiveProps {
  action: DataTableAction<EventName>
  selection: Array<ResourceKey>
  index?: number
}

export interface DataTableActionSlotProps<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> {
  action: DataTableAction<EventName>
  selection: Array<ResourceKey>
  index: number
}
</script>

<script setup lang="ts" generic="ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string">
import { Primitive } from 'reka-ui'
import {
  provideDataTableActionScopeContext,
  type DataTableActionScopeContext,
} from './context'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<DataTableActionProps<ResourceKey, EventName>>(), {
  as: 'template',
  asChild: false,
  index: 0,
})

defineSlots<{
  default?: (props: DataTableActionSlotProps<ResourceKey, EventName>) => unknown
}>()

const scope: DataTableActionScopeContext<ResourceKey, EventName> = {
  get action() { return props.action },
  get selection() { return props.selection },
  get index() { return props.index },
}

provideDataTableActionScopeContext(scope)
</script>
