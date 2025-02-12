<template>
  <DataTableActionButton
    v-for="action in inlineActions"
    :action="action"
    :selection="selection"
    @event="onEvent"
  />

  <DropdownMenu v-if="menuActions.length > 0">
    <DropdownMenuTrigger as-child>
      <Button size="sm"><ChevronDownIcon class="w-4 h-4 mr-1" /> {{ messages.actions }}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DataTableActionDropdownMenuItem
        v-for="action in menuActions"
        :action="action"
        :selection="selection"
        @event="onEvent"
        @exec="onExecAction"
      />
    </DropdownMenuContent>
  </DropdownMenu>

  <DataTableActionDialog
    v-if="actionToRun"
    :control="actionDialog"
    :action="actionToRun"
    :selection="selection"
  />
</template>

<script setup lang="ts" generic="ResourceKey = string | number">
import { Button } from '@/Components/Button'
import messages from './messages'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/Components/DropdownMenu'
import { useToggle } from '@stacktrace/ui'
import { ChevronDownIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { type Action, type ExecutableAction, useActionRunner } from './internal'
import DataTableActionDropdownMenuItem from './DataTableActionDropdownMenuItem.vue'
import DataTableActionButton from './DataTableActionButton.vue'
import DataTableActionDialog from './DataTableActionDialog.vue'

const emit = defineEmits(['event'])

const props = defineProps<{
  actions: Array<Action>
  selection: Array<ResourceKey>
}>()

const onEvent = (event: string) => {
  emit('event', { name: event, selection: [...props.selection] })
}

const { run } = useActionRunner<ResourceKey>()
const actionToRun = ref<ExecutableAction>()
const actionDialog = useToggle()
const onExecAction = (action: ExecutableAction) => {
  if (action.isInline) {
    run(action, [...props.selection])
    return
  } else {
    actionToRun.value = action
    actionDialog.activate()
  }
}

const inlineActions = computed(() => props.actions.filter(it => it.canRun && it.isInline && it.isBulk))
const menuActions = computed(() => props.actions.filter(it => it.canRun && !it.isInline && it.isBulk))
</script>
