<template>
  <DataTableSearch v-slot="{ modelValue, update, clear, applied }" as-child>
    <InputGroup :class="cn('h-8 w-[250px]', props.class)">
      <InputGroupAddon align="inline-start">
        <SearchIcon />
      </InputGroupAddon>
      <DebouncedInput
        data-slot="input-group-control"
        :debounce="debounce"
        :model-value="modelValue"
        class="h-8 flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent"
        :placeholder="placeholder || messages.searchPlaceholder"
        @update:model-value="updateValue(update, $event)"
      />
      <InputGroupAddon v-if="applied" align="inline-end">
        <InputGroupButton
          type="button"
          size="icon-xs"
          class="text-muted-foreground hover:text-destructive"
          @click.prevent="clear"
        >
          <CircleXIcon class="size-3" />
          <span class="sr-only">{{ messages.clearSearch }}</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </DataTableSearch>
</template>

<script setup lang="ts">
import { DataTableSearch } from '@stacktrace/ui'
import { CircleXIcon, SearchIcon } from '@lucide/vue'
import type { HTMLAttributes } from 'vue'
import { DebouncedInput } from '@/Components/Input'
import { InputGroup, InputGroupAddon, InputGroupButton } from '@/Components/InputGroup'
import { cn } from '@/Utils'
import messages from './messages'

const props = withDefaults(defineProps<{
  debounce?: number
  placeholder?: string
  class?: HTMLAttributes['class']
}>(), {
  debounce: 50,
})

const updateValue = (update: (value: string) => void, value: string | number) => {
  update(String(value))
}
</script>
