<template>
  <DateRangeInput v-model:from="from" v-model:until="until" class="w-[280px]" />
</template>

<script setup lang="ts">
import { DateRangeInput } from '@/Components/DateRangeInput'
import { ref } from "vue";

const from = ref<string>()
const until = ref<string>()
</script>
