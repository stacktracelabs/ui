<template>
  <DataTableResourceActionsRoot
    v-slot="{ resource, actions: runnableActions }"
    :value="actions"
    :force-mount="visible"
    :action-endpoint="actionEndpoint"
    as-child
    v-bind="emitsAsProps"
  >
    <div class="contents">
      <DataTableResourceActions placement="inline">
        <DataTableActionButton />
      </DataTableResourceActions>

      <DropdownMenu v-if="menuActions.length > 0 || visible">
        <DropdownMenuTrigger as-child>
          <Button
            :variant="variant"
            :size="size"
            :class="cn('px-2 data-[state=open]:bg-muted', props.class)"
          >
            <EllipsisIcon data-icon="inline-start" />
            <template v-if="label">{{ label }}</template>
            <span v-else class="sr-only">{{ messages.actions }}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent :align="align">
          <slot :resource="resource" :runnable-actions="runnableActions" />

          <DataTableResourceActions placement="menu">
            <DataTableActionDropdownMenuItem />
          </DataTableResourceActions>
        </DropdownMenuContent>
      </DropdownMenu>

      <DataTableActionDialog />
    </div>
  </DataTableResourceActionsRoot>
</template>

<script setup lang="ts" generic="ResourceKey extends DataTableResourceKey = DataTableResourceKey, ResourceValue = object, EventName extends string = string">
import {
  DataTableResourceActions,
  DataTableResourceActionsRoot,
  type DataTableActionRunnerOptions,
  type DataTableEventPayload,
  type DataTableResourceActionsValue,
  type DataTableResourceKey,
} from '@stacktrace/ui'
import { EllipsisIcon } from '@lucide/vue'
import { useEmitAsProps } from 'reka-ui'
import { computed } from 'vue'
import { Button, type ButtonVariants } from '@/Components/Button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/Components/DropdownMenu'
import { cn } from '@/Utils'
import DataTableActionButton from './DataTableActionButton.vue'
import DataTableActionDialog from './DataTableActionDialog.vue'
import DataTableActionDropdownMenuItem from './DataTableActionDropdownMenuItem.vue'
import messages from './messages'

const props = withDefaults(defineProps<{
  actions: DataTableResourceActionsValue<ResourceKey, ResourceValue, EventName>
  actionEndpoint?: DataTableActionRunnerOptions['endpoint']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  visible?: boolean
  align?: 'center' | 'end' | 'start'
  label?: string
  class?: string
}>(), {
  size: 'sm',
  variant: 'ghost',
  visible: false,
  align: 'end',
})

const emit = defineEmits<{
  event: [payload: DataTableEventPayload<ResourceKey, EventName>]
}>()

const emitsAsProps = useEmitAsProps(emit)

const menuActions = computed(() => props.actions.actions.filter(action => action.canRun && !action.isInline))
</script>
