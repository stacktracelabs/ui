<template>
  <optgroup data-slot="native-select-optgroup" :class="cn('bg-popover text-popover-foreground', props.class)">
    <slot />
  </optgroup>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@/Utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>
