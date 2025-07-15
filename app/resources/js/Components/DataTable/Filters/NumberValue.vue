<template>
  <FilterNumberInput :title="title" v-model="filter[field]" />
</template>

<script setup lang="ts">
import type { Filter } from '@stacktrace/ui'
import { FilterNumberInput } from "@/components/ui/filter";

defineProps<{
  title: string
  field: string
  filter: Filter<any>
}>()
</script>
