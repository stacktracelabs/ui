<template>
  <TableCell :class="cn({
    'font-medium': fontWeight == 'medium',
    'font-bold': fontWeight == 'bold',
    'whitespace-nowrap': noWrap,
    'tabular-nums': tabularNums,
  })">
    {{ value !== null ? value : '&mdash;'}}
  </TableCell>
</template>

<script setup lang="ts">
import { cn } from "@/Utils";

defineProps<{
  value: string | null
  fontWeight: string | number
  noWrap: boolean
  tabularNums: boolean
}>()
</script>
