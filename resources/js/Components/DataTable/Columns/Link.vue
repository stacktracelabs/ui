<template>
  <TableCell :class="cn({
    'font-medium': fontWeight == 'medium',
    'font-bold': fontWeight == 'bold',
    'whitespace-nowrap': noWrap
  })">
    <Link :target="target || undefined" :external="external" :href="href || undefined">{{ value || '&mdash;'}}</Link>
  </TableCell>
</template>

<script setup lang="ts">
import { cn } from "@/Utils";

defineProps<{
  value: string | null
  fontWeight: string | number
  noWrap: boolean
  href: string | null
  external: boolean
  target: string | null
}>()
</script>
