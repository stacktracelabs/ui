<template>
  <form class="space-y-8">
    <FormControl label="Date of birth" help="Your date of birth is used to calculate your age.">
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline" :class="cn(
              'w-[240px] ps-3 text-start font-normal',
              !value && 'text-muted-foreground',
            )"
          >
            <span>{{ value ? df.format(toDate(value)) : "Pick a date" }}</span>
            <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar
            v-model:placeholder="placeholder"
            v-model="value"
            calendar-label="Date of birth"
            initial-focus
            :min-value="new CalendarDate(1900, 1, 1)"
            :max-value="today(getLocalTimeZone())"
          />
        </PopoverContent>
      </Popover>
    </FormControl>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormControl } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CalendarDate, DateFormatter, getLocalTimeZone, today } from '@internationalized/date'
import { CalendarIcon } from 'lucide-vue-next'
import { toDate } from 'reka-ui/date'
import { ref } from 'vue'

const df = new DateFormatter('sk-SK', {
  dateStyle: 'long',
})

const value = ref()

const placeholder = ref()
</script>
