<template>
  <DataTableRoot
    :table="table"
    :selection="selection"
    :default-selection="defaultSelection"
    :action-endpoint="actionEndpoint"
    as-child
    v-bind="emitsAsProps"
  >
    <div :class="props.class">
      <DataTableEmptyTable
        :title="emptyTableMessage || messages.emptyTableTitle"
        :description="emptyTableDescription || messages.emptyTableDescription"
      />

      <DataTableContent as-child>
        <div>
          <DataTableToolbar
            :borderless="borderless"
            :inset-left="insetLeft"
            :inset-right="insetRight"
          />

          <DataTableFilters
            :borderless="borderless"
            :inset-left="insetLeft"
            :inset-right="insetRight"
          />

          <DataTableTable>
            <DataTableHeader :inset-left="insetLeft" :inset-right="insetRight" />
            <DataTableBody :inset-left="insetLeft" :inset-right="insetRight" />
            <DataTableFooter :inset-left="insetLeft" :inset-right="insetRight" />
          </DataTableTable>

          <DataTablePagination
            :inset-left="insetLeft"
            :inset-right="insetRight"
          />

          <DataTableEmptyResults
            :title="emptyResultsMessage || messages.searchEmptyTitle"
            :description="emptyResultsDescription || messages.searchEmptyDescription"
          />

          <DataTableActionDialog />
        </div>
      </DataTableContent>
    </div>
  </DataTableRoot>
</template>

<script setup lang="ts" generic="ResourceValue = object, ResourceKey extends DataTableResourceKey = DataTableResourceKey, EventName extends string = string">
import {
  DataTableContent,
  DataTableRoot,
  type DataTableActionRunnerOptions,
  type DataTableEventPayload,
  type DataTableResourceKey,
  type DataTableValue,
} from '@stacktrace/ui'
import { useEmitAsProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import DataTableActionDialog from './DataTableActionDialog.vue'
import DataTableBody from './DataTableBody.vue'
import DataTableEmptyResults from './DataTableEmptyResults.vue'
import DataTableEmptyTable from './DataTableEmptyTable.vue'
import DataTableFilters from './DataTableFilters.vue'
import DataTableFooter from './DataTableFooter.vue'
import DataTableHeader from './DataTableHeader.vue'
import DataTablePagination from './DataTablePagination.vue'
import DataTableTable from './DataTableTable.vue'
import DataTableToolbar from './DataTableToolbar.vue'
import messages from './messages'

const props = defineProps<{
  table: DataTableValue<ResourceValue, ResourceKey, EventName>
  selection?: Array<ResourceKey>
  defaultSelection?: Array<ResourceKey>
  actionEndpoint?: DataTableActionRunnerOptions['endpoint']
  emptyTableMessage?: string | null
  emptyTableDescription?: string | null
  emptyResultsMessage?: string | null
  emptyResultsDescription?: string | null
  borderless?: boolean
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits<{
  event: [payload: DataTableEventPayload<ResourceKey, EventName>]
  'update:selection': [selection: Array<ResourceKey>]
}>()

const emitsAsProps = useEmitAsProps(emit)
</script>
