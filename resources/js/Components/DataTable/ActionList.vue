<template>
  <template v-for="action in actions">
    <template v-if="action.canRun">
      <template v-if="action.type === 'Event'">
        <DropdownMenuItem @select="emit('event', action.event)">{{ action.label }}</DropdownMenuItem>
      </template>
      <template v-else-if="action.type === 'Link'">
        <DropdownMenuItem as-child>
          <component :is="action.isExternal ? 'a' : Link" :href="action.url">{{ action.label }}</component>
        </DropdownMenuItem>
      </template>
      <template v-else-if="action.type === 'Executable'">
        <DropdownMenuItem @select="emit('exec', action)">{{ action.label }}</DropdownMenuItem>
      </template>
    </template>
  </template>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { DropdownMenuItem } from "@/Components/DropdownMenu";
import type { DataTableAction } from "./";

const emit = defineEmits(['event', 'exec'])

defineProps<{
  actions: Array<DataTableAction>
}>()
</script>
