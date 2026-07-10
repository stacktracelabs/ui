<template>
  <DateRangePicker
    v-model:from="from"
    v-model:until="until"
    class="w-[280px]"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DateRangePicker } from '@/Components/Base/DateRangePicker'

const from = ref<string>()
const until = ref<string>()
</script>
