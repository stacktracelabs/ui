<template>
  <FilterCheckbox :title="title" v-model="filter[field]" />
</template>

<script setup lang="ts">
import { type Filter } from '@stacktrace/ui'
import { FilterCheckbox } from "@/components/ui/filter";

defineProps<{
  title: string
  field: string
  filter: Filter<any>
}>()
</script>
