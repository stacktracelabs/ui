<template>
  <div
    data-slot="item-header"
    :class="cn('flex basis-full items-center justify-between gap-2', props.class)"
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
