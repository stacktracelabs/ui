<template>
  <DataTableAction
    v-for="(action, index) in actions"
    :key="action.name"
    :action="action"
    :selection="[row.key]"
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
  DataTableRowValue,
} from './types'

export interface DataTableRowActionsProps<
  ResourceKey extends DataTableResourceKey = DataTableResourceKey,
  ResourceValue = object,
  EventName extends string = string,
> {
  placement?: DataTableActionPlacement
  row?: DataTableRowValue<ResourceKey, ResourceValue, EventName>
}

export interface DataTableRowActionsSlotProps<
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
import {
  useDataTableContext,
  useDataTableRowContext,
} from './context'
import DataTableAction from './DataTableAction.vue'

const props = withDefaults(defineProps<DataTableRowActionsProps<ResourceKey, ResourceValue, EventName>>(), {
  placement: 'all',
})

defineSlots<{
  default?: (props: DataTableRowActionsSlotProps<ResourceKey, EventName>) => unknown
}>()

const table = useDataTableContext<ResourceValue, ResourceKey, EventName>()
const rowContext = props.row === undefined
  ? useDataTableRowContext<ResourceKey, ResourceValue, EventName>()
  : null
const row = computed(() => props.row ?? rowContext!.row)
const actions = computed(() => table.rowActions(row.value, props.placement))
</script>
