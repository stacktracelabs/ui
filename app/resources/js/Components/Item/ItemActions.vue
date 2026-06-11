<template>
  <div
    data-slot="item-actions"
    :class="cn('flex items-center gap-2', props.class)"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/Utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
