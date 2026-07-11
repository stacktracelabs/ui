<template>
  <div class="grid w-[280px] gap-2">
    <Label for="due-date">Due date</Label>
    <DateTimeInput
      id="due-date"
      v-model="value"
    />
  </div>
</template>

<script setup lang="ts">
import { DateTimeInput } from '@/Components/Base/DateTimeInput'
import { Label } from '@/Components/Base/Label'
import { CalendarDate } from '@internationalized/date'
import { ref } from 'vue'

const value = ref(new CalendarDate(2026, 7, 11))
</script>
