<template>
  <RangeCalendar
    v-model="range"
    calendar-label="Travel dates"
    :number-of-months="2"
    class="rounded-md border"
  />
</template>

<script setup lang="ts">
import { RangeCalendar } from '@/Components/Base/RangeCalendar'
import { getLocalTimeZone, today } from '@internationalized/date'
import type { DateRange } from 'reka-ui'
import { shallowRef } from 'vue'

const start = today(getLocalTimeZone())
const range = shallowRef<DateRange>({
  start,
  end: start.add({ days: 6 }),
})
</script>
