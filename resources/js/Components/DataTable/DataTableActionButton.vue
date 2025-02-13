<template>
  <template v-if="action.canRun">
    <template v-if="action.type === 'Event'">
      <ActionButton :class="{ 'px-2': !bulk }" size="sm" :variant="bulk ? 'default' : 'ghost'" @click="emit('event', action.event)">{{ action.label }}</ActionButton>
    </template>
    <template v-else-if="action.type === 'Link'">
      <LinkButton :class="{ 'px-2': !bulk }" size="sm" :variant="bulk ? 'default' : 'ghost'" :as="action.isExternal ? 'a' : undefined" :href="action.url">{{ action.label }}</LinkButton>
    </template>
    <template v-else-if="action.type === 'Executable'">
      <ActionButton :class="{ 'px-2': !bulk }" size="sm" :variant="bulk ? 'default' : 'ghost'" @click="run(action, selection)" :processing="isRunning">
        <DataTableIcon class="w-4 h-4" v-if="action.icon" :src="action.icon.src" />
        {{ action.label }}
      </ActionButton>
    </template>
  </template>
</template>

<script setup lang="ts" generic="ResourceKey = string | number">
import { ActionButton, LinkButton } from '@/Components/Button'
import DataTableIcon from './DataTableIcon.vue'
import { type Action, useActionRunner } from './internal'

const emit = defineEmits(['event'])

withDefaults(defineProps<{
  action: Action
  selection: Array<ResourceKey>
  bulk?: boolean
}>(), {
  bulk: false,
})

const { run, isRunning } = useActionRunner<ResourceKey>()
</script>
