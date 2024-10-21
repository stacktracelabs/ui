<template>
  <DateInput v-model="value" />
</template>

<script setup lang="ts">
import { DateInput } from '@/Components/DateInput'
import { ref } from "vue";

const value = ref<string>()
</script>
