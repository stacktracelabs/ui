<template>
  <div
    role="group"
    data-slot="field"
    :data-orientation="orientation"
    :class="cn(
      fieldVariants({ orientation }),
      props.class,
    )"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import type { FieldVariants } from '.'
import { cn } from '@/Utils'
import { fieldVariants } from '.'

const props = defineProps<{
  class?: HTMLAttributes['class']
  orientation?: FieldVariants['orientation']
}>()
</script>
