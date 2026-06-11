<template>
  <Separator
    data-slot="item-separator"
    orientation="horizontal"
    :class="cn('my-0', props.class)"
  />
</template>

<script lang="ts" setup>
import type { SeparatorProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/Utils'
import { Separator } from '@/Components/Separator'

const props = defineProps<
  SeparatorProps & { class?: HTMLAttributes['class'] }
>()
</script>
