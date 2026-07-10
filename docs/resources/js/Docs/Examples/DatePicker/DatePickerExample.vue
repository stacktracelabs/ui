<template>
  <DatePicker v-model="value" class="w-[280px]" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from '@/Components/Base/DatePicker'

const value = ref<string>()
</script>
