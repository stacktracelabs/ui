<template>
  <DateRangePicker v-model:from="from" v-model:until="until" class="w-[280px]" to=".portal" />
</template>

<script setup lang="ts">
import { DateRangePicker } from '@/components/ui/date-range-picker'
import { ref } from "vue";

const from = ref<string>()
const until = ref<string>()
</script>
