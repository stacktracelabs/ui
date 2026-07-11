<template>
  <span
    data-slot="button-state"
    :class="cn('relative inline-grid place-items-center', props.class)"
    aria-live="polite"
  >
    <span
      :class="cn(
        'col-start-1 row-start-1 inline-flex items-center justify-center gap-2',
        (processing || recentlySuccessful) && 'invisible',
        'group-data-[loading]/button:invisible',
      )"
    >
      <slot />
    </span>

    <span
      :class="cn(
        'absolute inset-0 hidden items-center justify-center',
        processing && 'flex',
        'group-data-[loading]/button:flex',
      )"
    >
      <Spinner aria-hidden="true" />
      <span class="sr-only" role="status">{{ processingLabel }}</span>
    </span>

    <span
      v-if="recentlySuccessful && !processing"
      class="absolute inset-0 flex items-center justify-center gap-2 group-data-[loading]/button:hidden"
    >
      <CheckIcon data-icon="inline-start" />
      <slot name="success">{{ recentlySuccessfulLabel }}</slot>
    </span>
  </span>
</template>

<script setup lang="ts">
import { CheckIcon } from '@lucide/vue'
import { Spinner } from '@/Components/Spinner'
import { cn } from '@/Utils'
import type { ButtonStateProps } from '.'

const props = withDefaults(defineProps<ButtonStateProps>(), {
  processing: false,
  recentlySuccessful: false,
  processingLabel: 'Processing',
  recentlySuccessfulLabel: 'Saved',
})
</script>
