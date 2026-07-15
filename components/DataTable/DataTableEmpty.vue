<template>
  <Empty :class="props.class">
    <EmptyHeader v-if="icon || title || description">
      <EmptyMedia v-if="icon" variant="icon">
        <component :is="icon" />
      </EmptyMedia>
      <EmptyTitle v-if="title">{{ title }}</EmptyTitle>
      <EmptyDescription v-if="description">{{ description }}</EmptyDescription>
    </EmptyHeader>
    <EmptyContent v-if="$slots.default">
      <slot />
    </EmptyContent>
  </Empty>
</template>

<script setup lang="ts">
import type { Component, HTMLAttributes } from 'vue'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/Components/Empty'

const props = defineProps<{
  title?: string
  description?: string
  icon?: Component
  class?: HTMLAttributes['class']
}>()
</script>
