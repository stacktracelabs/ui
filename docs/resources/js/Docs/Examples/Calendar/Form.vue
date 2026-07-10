<template>
  <form
    class="grid w-full max-w-sm gap-6"
    @submit.prevent
  >
    <div class="grid gap-2">
      <Label for="birth-date">Date of birth</Label>
      <Popover>
        <PopoverTrigger as-child>
          <Button
            id="birth-date"
            variant="outline"
            :class="cn(
              'w-full justify-start text-left font-normal',
              !value && 'text-muted-foreground',
            )"
          >
            <span>
              {{ value ? formatter.format(toDate(value)) : 'Pick a date' }}
            </span>
            <CalendarIcon class="ml-auto size-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar
            v-model="value"
            v-model:placeholder="placeholder"
            calendar-label="Date of birth"
            initial-focus
            :min-value="new CalendarDate(1900, 1, 1)"
            :max-value="today(getLocalTimeZone())"
          />
        </PopoverContent>
      </Popover>
      <p class="text-sm text-muted-foreground">
        Your date of birth is used to calculate your age.
      </p>
    </div>

    <Button type="submit">
      Submit
    </Button>
  </form>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import { Calendar } from '@/Components/Base/Calendar'
import { Label } from '@/Components/Base/Label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/Base/Popover'
import { cn } from '@/Utils'
import {
  CalendarDate,
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { CalendarIcon } from '@lucide/vue'
import { toDate } from 'reka-ui/date'
import { type Ref, ref } from 'vue'

const formatter = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const value = ref<DateValue>()
const placeholder = ref(today(getLocalTimeZone())) as Ref<DateValue>
</script>
