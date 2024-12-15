<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        :class="cn('w-full justify-between text-left', $attrs.class || '')"
      >
        {{ value ? options.find((framework) => framework.value === value)?.label : selectLabel }}
        <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Command>
        <CommandInput class="h-9" :placeholder="searchLabel" />
        <CommandEmpty>{{ notFoundLabel }}</CommandEmpty>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="option in options"
              :key="option.value"
              :value="option.value"
              @select="onSelected(option)"
            >
              {{ option.label }}
              <CheckIcon
                :class="cn(
                  'ml-auto h-4 w-4',
                  value === option.value ? 'opacity-100' : 'opacity-0',
                )"
              />
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>
<script setup lang="ts">
import { Button } from '@/Components/Button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/Components/Command'
import { Popover, PopoverContent, PopoverTrigger } from '@/Components/Popover'
import { cn } from '@/Utils'
import { CaretSortIcon, CheckIcon } from '@radix-icons/vue'
import { useVModel } from '@vueuse/core'
import { ref } from 'vue'
import { type SelectOption } from '@stacktrace/ui'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<{
  options: Array<SelectOption>
  searchLabel?: string | undefined
  selectLabel?: string | null
  notFoundLabel?: string | null
  nullable?: boolean
  modelValue?: string | null
}>(), {
  searchLabel: 'Search options…',
  selectLabel: 'Select option…',
  notFoundLabel: 'No options found.',
  nullable: false,
})

const open = ref(false)
const value = useVModel(props, 'modelValue', emit)

const onSelected = (option: SelectOption) => {
  if (props.nullable && value.value === option.value) {
    value.value = null
  } else {
    value.value = option.value
  }

  open.value = false
}
</script>
