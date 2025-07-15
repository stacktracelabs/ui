<template>
  <DatePickerRoot v-model="date">
    <DatePickerField v-slot="{ segments }" >
      <DatePickerTrigger as-child>
        <Button
          plain
          variant="outline"
          :class="cn(
            'w-full justify-start text-left font-normal',
            $attrs.class || ''
          )"
        >
          <CalendarIcon class="w-4 h-4" />

          <div class="inline-flex select-none items-center hover:cursor-text text-sm" @click.stop>
            <template v-for="item in segments" :key="item.part">
              <DatePickerInput
                v-if="item.part === 'literal'"
                :part="item.part"
              >
                {{ item.value }}
              </DatePickerInput>
              <DatePickerInput
                v-else
                :part="item.part"
                class="rounded transition-[color,box-shadow] focus:outline-none focus:border-ring focus:ring-ring/50 focus:ring-[3px] border border-transparent focus:border-input data-[placeholder]:text-muted-foreground selection:bg-primary selection:text-primary-foreground"
              >
                {{ item.value }}
              </DatePickerInput>
            </template>
          </div>
        </Button>
      </DatePickerTrigger>
    </DatePickerField>

    <DatePickerContent
      :portal="{ to }"
      class="w-auto z-50 p-3 rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
      :side-offset="4"
    >
      <DatePickerCalendar v-slot="{ weekDays, grid }">
        <DatePickerHeader class="flex justify-center pt-1 relative items-center w-full">
          <DatePickerPrev :class="cn(
            buttonVariants({ variant: 'outline' }),
            'absolute left-1',
            'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          )">
            <ChevronLeftIcon class="size-4" />
          </DatePickerPrev>

          <DatePickerHeading class="text-sm font-medium" />

          <DatePickerNext :class="cn(
            buttonVariants({ variant: 'outline' }),
            'absolute right-1',
            'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          )">
            <ChevronRightIcon class="size-4" />
          </DatePickerNext>
        </DatePickerHeader>

        <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
          <DatePickerGrid v-for="month in grid" :key="month.value.toString()" class="w-full border-collapse space-x-1">
            <DatePickerGridHead>
              <DatePickerGridRow class="flex">
                <DatePickerHeadCell v-for="day in weekDays" :key="day" class="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]">
                  {{ day }}
                </DatePickerHeadCell>
              </DatePickerGridRow>
            </DatePickerGridHead>
            <DatePickerGridBody>
              <DatePickerGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="flex mt-2 w-full">
                <DatePickerCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                  class="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent"
                >
                  <DatePickerCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    :class="cn(
                      buttonVariants({ variant: 'ghost' }),
                      'size-8 p-0 font-normal aria-selected:opacity-100 cursor-default',
                      '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
                      // Selected
                      'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
                      // Disabled
                      'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
                      // Unavailable
                      'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
                      // Outside months
                      'data-[outside-view]:text-muted-foreground',
                    )"
                  />
                </DatePickerCell>
              </DatePickerGridRow>
            </DatePickerGridBody>
          </DatePickerGrid>
        </div>
      </DatePickerCalendar>
    </DatePickerContent>
  </DatePickerRoot>
</template>

<script setup lang="ts">
import { cn } from '@/Utils'
import { type DateValue, parseDate } from '@internationalized/date'
import { Calendar as CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-vue-next'
import { buttonVariants, Button } from '@/Components/Button'
import {
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
  type DatePickerRootProps
} from 'reka-ui'
import { computed, type Ref, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface Props {
  modelValue?: string | null | undefined
  to?: string
}

const props = defineProps<Props & DatePickerRootProps>()

const date = ref(props.modelValue ? parseDate(props.modelValue) : undefined) as Ref<DateValue | undefined>

watch(date, newDate => {
  const updatedValue = newDate?.toString() || undefined

  if (updatedValue !== props.modelValue) {
    emit('update:modelValue', updatedValue)
  }
})

watch(computed(() => props.modelValue), newModelValue => {
  const currentDate = date.value?.toString() || undefined
  const updatedDate = newModelValue || undefined

  if (currentDate !== updatedDate) {
    date.value = updatedDate ? (parseDate(updatedDate) as DateValue) : undefined
  }
})
</script>
