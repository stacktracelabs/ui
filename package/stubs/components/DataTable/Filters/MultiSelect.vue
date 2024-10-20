<template>
  <FilterMultiSelect :title="title" :options="options" v-model="filter[field]" />
</template>

<script setup lang="ts">
import type { Filter, SelectOption } from '@stacktrace/ui'

defineProps<{
  title: string
  field: string
  filter: Filter<any>
  options: Array<SelectOption>
}>()
</script>
