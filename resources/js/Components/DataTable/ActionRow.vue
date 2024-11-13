<template>
  <template v-for="action in actions">
    <template v-if="action.canRun">
      <template v-if="action.type === 'Event'">
        <ActionButton :class="{ 'px-2': !bulk }" size="sm" :variant="bulk ? 'default' : 'ghost'" @click="emit('event', action.event)">{{ action.label }}</ActionButton>
      </template>
      <template v-else-if="action.type === 'Link'">
        <LinkButton :class="{ 'px-2': !bulk }" size="sm" :variant="bulk ? 'default' : 'ghost'" :as="action.isExternal ? 'a' : undefined" :href="action.url">{{ action.label }}</LinkButton>
      </template>
      <template v-else-if="action.type === 'Executable'">
        <ExecutableActionButton :action="action" :bulk="bulk" :selection="selection" />
      </template>
    </template>
  </template>
</template>

<script setup lang="ts">
import { ActionButton, LinkButton } from "@/Components/Button";
import { type Action } from "./internal";
import ExecutableActionButton from './ExecutableActionButton.vue'

const emit = defineEmits(['event'])

withDefaults(defineProps<{
  actions: Array<Action>
  bulk?: boolean
  selection: Array<number | string>
}>(), {
  bulk: false
})
</script>
