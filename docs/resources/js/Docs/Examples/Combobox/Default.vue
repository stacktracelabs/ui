<template>
  <Combobox v-model="value">
    <ComboboxAnchor class="w-64">
      <ComboboxTrigger as-child>
        <Button
          variant="outline"
          role="combobox"
          class="w-full justify-between"
        >
          {{ selectedLabel }}
          <ChevronDownIcon class="size-4 opacity-50" />
        </Button>
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxList class="w-64">
      <ComboboxInput placeholder="Search frameworks…" />
      <ComboboxEmpty>No framework found.</ComboboxEmpty>
      <ComboboxViewport>
        <ComboboxGroup heading="Frameworks">
          <ComboboxItem
            v-for="framework in frameworks"
            :key="framework.value"
            :value="framework.value"
          >
            {{ framework.label }}
            <ComboboxItemIndicator>
              <CheckIcon class="size-4" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxViewport>
    </ComboboxList>
  </Combobox>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxTrigger,
  ComboboxViewport,
} from '@/Components/Base/Combobox'
import { CheckIcon, ChevronDownIcon } from '@lucide/vue'
import { computed, ref } from 'vue'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
]

const value = ref('')
const selectedLabel = computed(() =>
  frameworks.find(framework => framework.value === value.value)?.label
  ?? 'Select a framework',
)
</script>
