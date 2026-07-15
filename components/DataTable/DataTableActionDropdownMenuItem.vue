<template>
  <DataTableActionActivation v-slot="{ action, isRunning }" as-child>
    <DropdownMenuItem v-if="action.type !== 'Link'">
      <Icon v-if="action.icon" class="size-4" :src="action.icon.src" />
      <ButtonState :processing="action.type === 'Executable' && isRunning">
        {{ action.label }}
      </ButtonState>
    </DropdownMenuItem>
    <DropdownMenuItem v-else as-child>
      <component
        :is="action.isExternal ? 'a' : Link"
        class="w-full"
        :href="action.url"
      >
        <Icon v-if="action.icon" class="size-4" :src="action.icon.src" />
        {{ action.label }}
      </component>
    </DropdownMenuItem>
  </DataTableActionActivation>
</template>

<script setup lang="ts">
import { DataTableActionActivation, Icon } from '@stacktrace/ui'
import { Link } from '@inertiajs/vue3'
import { ButtonState } from '@/Components/Button'
import { DropdownMenuItem } from '@/Components/DropdownMenu'
</script>
