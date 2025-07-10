<template>
  <DateInput v-model="value" class="w-[280px]" />
</template>

<script setup lang="ts">
import { DateInput } from '@/Components/DateInput'
import { ref } from "vue";

const value = ref<string>()
</script>
