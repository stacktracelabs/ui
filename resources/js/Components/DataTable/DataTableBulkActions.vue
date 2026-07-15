<template>
  <template v-if="table.showBulkActions.value && actions.length > 0">
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
</template>

<script lang="ts">
import type {
  DataTableAction as DataTableActionValue,
  DataTableActionPlacement,
  DataTableResourceKey,
} from './types'

export interface DataTableBulkActionsProps {
  placement?: DataTableActionPlacement
}

export interface DataTableBulkActionsSlotProps<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  EventName extends string = string,
> {
  action: DataTableActionValue<EventName>
  selection: Array<ResourceKey>
  index: number
}
</script>

<script setup lang="ts" generic="ResourceValue = object, ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string">
import { computed } from 'vue'
import { useDataTableContext } from './context'
import DataTableAction from './DataTableAction.vue'

const props = withDefaults(defineProps<DataTableBulkActionsProps>(), {
  placement: 'all',
})

defineSlots<{
  default?: (props: DataTableBulkActionsSlotProps<ResourceKey, EventName>) => unknown
}>()

const table = useDataTableContext<ResourceValue, ResourceKey, EventName>()
const actions = computed(() => table.placedBulkActions(props.placement))
const selection = computed(() => [...table.selectionState.selection.value])
</script>
