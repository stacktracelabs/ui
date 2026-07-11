<template>
  <span
    data-slot="marker-icon"
    aria-hidden="true"
    :class="cn(
      'size-4 [&_svg:not([class*=\'size-\'])]:size-4 shrink-0',
      props.class,
    )"
  >
    <slot />
  </span>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/Utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
