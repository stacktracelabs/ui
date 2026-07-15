<template>
  <DataTableAction
    v-for="(action, index) in actions"
    :key="action.name"
    :action="action"
    :selection="selection"
    :index="index"
    as="template"
  >
    <template #default="actionScope">
      <slot
        :action="actionScope.action"
        :selection="actionScope.selection"
        :index="actionScope.index"
      />
    </template>
  </DataTableAction>
</template>

<script lang="ts">
import type {
  DataTableAction as DataTableActionValue,
  DataTableActionPlacement,
  DataTableResourceKey,
} from './types'

export interface DataTableResourceActionsProps {
  placement?: DataTableActionPlacement
}

export interface DataTableResourceActionsSlotProps<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> {
  action: DataTableActionValue<EventName>
  selection: Array<ResourceKey>
  index: number
}
</script>

<script setup lang="ts" generic="ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string">
import { computed } from 'vue'
import { useDataTableResourceActionsContext } from './context'
import DataTableAction from './DataTableAction.vue'

const props = withDefaults(defineProps<DataTableResourceActionsProps>(), {
  placement: 'all',
})

defineSlots<{
  default?: (props: DataTableResourceActionsSlotProps<ResourceKey, EventName>) => unknown
}>()

const resourceActions = useDataTableResourceActionsContext<ResourceKey, ResourceValue, EventName>()
const actions = computed(() => resourceActions.runnableActions.value.filter(action => {
  if (props.placement === 'inline') return action.isInline
  if (props.placement === 'menu') return !action.isInline
  return true
}))
const selection = computed(() => [resourceActions.value.value.resource.key])
</script>
