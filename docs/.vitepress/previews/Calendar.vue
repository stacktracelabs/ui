<template>
  <Calendar v-model="value" :weekday-format="'short'" class="rounded-md border" />
</template>

<script setup lang="ts">
import { Calendar } from '@/Components/Calendar'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import { type Ref, ref } from 'vue'

const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>
