<template>
  <DateInput v-model="value" class="w-[280px]" to=".portal" />
</template>

<script setup lang="ts">
import { DateInput } from '@/components/ui/date-input'
import { ref } from "vue";

const value = ref<string>()
</script>
