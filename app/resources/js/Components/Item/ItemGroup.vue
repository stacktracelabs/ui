<template>
  <div
    role="list"
    data-slot="item-group"
    :class="cn('group/item-group flex flex-col', props.class)"
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
