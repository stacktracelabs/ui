<template>
  <DateTimeInput v-model="value" class="w-[280px]" granularity="second" />
</template>

<script setup lang="ts">
import { DateTimeInput } from '@/components/ui/date-time-input'
import { ref } from "vue";

const value = ref<string>()
</script>
