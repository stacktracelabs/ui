<template>
  <div class="flex flex-wrap items-center gap-2">
    <FilterSearchInput v-model="search" />
    <FilterCheckbox v-model="active" title="Active only" />
    <FilterNumberInput v-model="amount" title="Amount" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  FilterCheckbox,
  FilterNumberInput,
  FilterSearchInput,
} from '@/Components/Base/Filter'

const search = ref('')
const active = ref(false)
const amount = ref<string | null>(null)
</script>
