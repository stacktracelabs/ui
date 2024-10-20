<template>
  <TableCell :class="cn({
    'font-medium': fontWeight == 'medium',
    'font-bold': fontWeight == 'bold',
    'whitespace-nowrap': noWrap
  })">
    <component :is="external ? 'a' : Link" :target="target || undefined" :href="href || undefined">{{ value || '&mdash;'}}</component>
  </TableCell>
</template>

<script setup lang="ts">
import { cn } from "@/Utils";
import { Link } from '@inertiajs/vue3'
import { TableCell } from '@/Components/Table'

defineProps<{
  value: string | null
  fontWeight: string | number
  noWrap: boolean
  href: string | null
  external: boolean
  target: string | null
}>()
</script>
