<template>
  <DateTimeInput v-model="value" class="w-[280px]" granularity="second" />
</template>

<script setup lang="ts">
import { DateTimeInput } from '@/Components/DateTimeInput'
import { ref } from "vue";

const value = ref<string>()
</script>
