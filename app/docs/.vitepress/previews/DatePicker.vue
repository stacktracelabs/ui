<template>
  <DatePicker v-model="value" class="w-[280px]" to=".portal" />
</template>

<script setup lang="ts">
import { DatePicker } from '@/components/ui/date-picker'
import { ref } from "vue";

const value = ref<string>()
</script>
