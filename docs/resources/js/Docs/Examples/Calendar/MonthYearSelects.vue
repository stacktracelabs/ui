<template>
  <CalendarRoot
    v-slot="{ date, grid, weekDays }"
    v-model="value"
    v-model:placeholder="placeholder"
    weekday-format="short"
    class="rounded-md border p-3"
  >
    <CalendarHeader>
      <CalendarHeading class="flex w-full items-center justify-between gap-2">
        <Select
          :model-value="placeholder.month.toString()"
          @update:model-value="updateMonth"
        >
          <SelectTrigger
            aria-label="Select month"
            class="w-[60%]"
          >
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent class="max-h-52">
            <SelectItem
              v-for="month in createYear({ dateObj: date })"
              :key="month.toString()"
              :value="month.month.toString()"
            >
              {{ formatter.custom(toDate(month), { month: 'long' }) }}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select
          :model-value="placeholder.year.toString()"
          @update:model-value="updateYear"
        >
          <SelectTrigger
            aria-label="Select year"
            class="w-[40%]"
          >
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent class="max-h-52">
            <SelectItem
              v-for="year in createDecade({
                dateObj: date,
                startIndex: -10,
                endIndex: 10,
              })"
              :key="year.toString()"
              :value="year.year.toString()"
            >
              {{ year.year }}
            </SelectItem>
          </SelectContent>
        </Select>
      </CalendarHeading>
    </CalendarHeader>

    <div class="mt-4 flex flex-col gap-y-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <CalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
      >
        <CalendarGridHead>
          <CalendarGridRow>
            <CalendarHeadCell
              v-for="day in weekDays"
              :key="day"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody>
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="index"
            class="mt-2 w-full"
          >
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>

<script setup lang="ts">
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
} from '@/Components/Base/Calendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/Base/Select'
import {
  type DateValue,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import {
  CalendarRoot,
  useDateFormatter,
} from 'reka-ui'
import {
  createDecade,
  createYear,
  toDate,
} from 'reka-ui/date'
import { type Ref, ref } from 'vue'

const value = ref<DateValue>()
const placeholder = ref(today(getLocalTimeZone())) as Ref<DateValue>
const formatter = useDateFormatter('en')

function updateMonth(month: unknown) {
  const monthNumber = Number(month)

  if (Number.isInteger(monthNumber)) {
    placeholder.value = placeholder.value.set({ month: monthNumber })
  }
}

function updateYear(year: unknown) {
  const yearNumber = Number(year)

  if (Number.isInteger(yearNumber)) {
    placeholder.value = placeholder.value.set({ year: yearNumber })
  }
}
</script>
