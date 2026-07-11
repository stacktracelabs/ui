<template>
  <div class="grid w-[280px] gap-2">
    <Label for="starts-at">Starts at</Label>
    <DateTimeInput
      id="starts-at"
      v-model="value"
      granularity="second"
      locale="en-GB"
    />
  </div>
</template>

<script setup lang="ts">
import { DateTimeInput } from '@/Components/Base/DateTimeInput'
import { Label } from '@/Components/Base/Label'
import { CalendarDateTime } from '@internationalized/date'
import { ref } from 'vue'

const value = ref(new CalendarDateTime(2026, 7, 11, 14, 30, 0))
</script>
