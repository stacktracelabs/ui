<template>
  <Badge :variant="variant">{{ text }}</Badge>
</template>

<script setup lang="ts">
import { type BadgeVariants, Badge } from '@/components/ui/badge'

defineProps<{
  variant?: BadgeVariants['variant']
  text: string
}>()
</script>
