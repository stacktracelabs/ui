<template>
  <DataTableActionActivation v-slot="{ action, isRunning }" as-child>
    <Button
      :as="action.type === 'Link' ? (action.isExternal ? 'a' : Link) : 'button'"
      :class="cn({ 'px-2': !bulk }, props.class)"
      size="sm"
      :variant="bulk ? 'default' : 'ghost'"
    >
      <ButtonState :processing="action.type === 'Executable' && isRunning">
        <DataTableIcon v-if="action.icon" class="size-4" :src="action.icon.src" />
        {{ action.label }}
      </ButtonState>
    </Button>
  </DataTableActionActivation>
</template>

<script setup lang="ts">
import { DataTableActionActivation } from '@stacktrace/ui'
import { Link } from '@inertiajs/vue3'
import type { HTMLAttributes } from 'vue'
import { Button, ButtonState } from '@/Components/Button'
import { cn } from '@/Utils'
import DataTableIcon from './DataTableIcon.vue'

const props = withDefaults(defineProps<{
  bulk?: boolean
  class?: HTMLAttributes['class']
}>(), {
  bulk: false,
})
</script>
