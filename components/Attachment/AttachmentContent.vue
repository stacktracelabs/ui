<template>
  <div
    data-slot="attachment-content"
    :class="cn(
      'leading-tight group-data-[orientation=vertical]/attachment:px-1 max-w-full min-w-0 flex-1',
      props.class,
    )"
    v-bind="props"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/Utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
