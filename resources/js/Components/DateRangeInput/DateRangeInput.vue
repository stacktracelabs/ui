<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn(
          'w-full justify-start text-left font-normal',
          !isSelected && 'text-muted-foreground',
          $attrs.class || ''
        )"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ label || "Pick a date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <RangeCalendar locale="sk" v-model="date" initial-focus :number-of-months="2" />
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from '@/Components/Popover'
import { RangeCalendar } from "@/Components/RangeCalendar";
import { Button } from "@/Components/Button";
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { computed, type Ref, ref, watch } from 'vue'
import { cn } from '@/Utils'
import {
  DateFormatter,
  parseDate,
  getLocalTimeZone,
} from '@internationalized/date'
import type { DateRange } from 'radix-vue'

const emit = defineEmits(['update:from', 'update:until'])

const props = defineProps<{
  from?: string
  until?: string
}>()

const df = new DateFormatter('sk-SK', {
  dateStyle: 'medium',
})

const date = ref({
  start: props.from ? parseDate(props.from) : undefined,
  end: props.until ? parseDate(props.until) : undefined,
}) as Ref<DateRange>

const clear = () => {
  date.value = { start: undefined, end: undefined }
}

watch(date, newDate => {
  const start = newDate.start?.toString() || undefined
  const end = newDate.end?.toString() || undefined

  if (start !== props.from) {
    emit('update:from', start)
  }

  if (end !== props.until) {
    emit('update:until', end)
  }
})

watch(computed(() => props.from), newFrom => {
  const currentFrom = date.value.start?.toString() || undefined
  const updatedFrom = newFrom || undefined

  if (updatedFrom !== currentFrom) {
    date.value.start = updatedFrom ? parseDate(updatedFrom) : undefined
  }
})

watch(computed(() => props.until), newUntil => {
  const currentUntil = date.value.end?.toString() || undefined
  const updatedUntil = newUntil || undefined

  if (updatedUntil !== currentUntil) {
    date.value.end = updatedUntil ? parseDate(updatedUntil) : undefined
  }
})

const isSelected = computed(() => date.value.start || date.value.end)

const label = computed(() => {
  const from = date.value.start?.toDate(getLocalTimeZone()) || null
  const until = date.value.end?.toDate(getLocalTimeZone()) || null

  if (from && until) {
    const fromFormat = df.format(from)
    const untilFormat = df.format(until)

    if (fromFormat == untilFormat) {
      return fromFormat
    }

    return `${fromFormat} - ${untilFormat}`
  }

  return null
})
</script>
