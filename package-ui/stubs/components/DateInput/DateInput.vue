<template>
  <DatePickerRoot :locale="locale" v-model="date" prevent-deselect>
    <DatePickerField v-slot="{ segments }">
      <DatePickerTrigger :class="cn(
          'h-9 w-full rounded-md border focus:ring-1 focus:ring-ring border-input shadow-sm flex flex-row hover:bg-accent transition-colors gap-2 items-center px-4 focus:outline-none text-foreground',
          $attrs.class || '',
        )">
        <CalendarIcon class="w-4 h-4" />

        <div class="inline-flex items-center hover:cursor-text" @click.stop>
          <template v-for="item in segments" :key="item.part">
            <DatePickerInput v-if="item.part === 'literal'" :part="item.part" class="text-sm">
              {{ item.value }}
            </DatePickerInput>
            <DatePickerInput v-else :part="item.part" class="text-sm rounded-sm px-px focus:outline-none focus:bg-accent focus:shadow-foreground focus:shadow-[0_0_0_2px] data-[placeholder]:text-muted-foreground">
              {{ item.value }}
            </DatePickerInput>
          </template>
        </div>
      </DatePickerTrigger>
    </DatePickerField>

    <DatePickerContent class="w-auto z-50 p-3 rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
      <DatePickerCalendar v-slot="{ weekDays, grid }">
        <DatePickerHeader class="flex items-center justify-between">
          <DatePickerPrev :class="cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100')">
            <ChevronLeftIcon class="w-4 h-4" />
          </DatePickerPrev>

          <DatePickerHeading class="text-sm font-medium" />

          <DatePickerNext :class="cn(buttonVariants({ variant: 'outline' }), 'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100')">
            <ChevronRightIcon class="w-4 h-4" />
          </DatePickerNext>
        </DatePickerHeader>

        <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
          <DatePickerGrid v-for="month in grid" :key="month.value.toString()" class="w-full border-collapse select-none space-y-1">
            <DatePickerGridHead>
              <DatePickerGridRow class="flex w-full justify-between">
                <DatePickerHeadCell v-for="day in weekDays" :key="day" class="w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground">
                  {{ day }}
                </DatePickerHeadCell>
              </DatePickerGridRow>
            </DatePickerGridHead>
            <DatePickerGridBody>
              <DatePickerGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="flex mt-2 w-full">
                <DatePickerCell v-for="weekDate in weekDates" :key="weekDate.toString()" :date="weekDate">
                  <DatePickerCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    :class="cn(
                      buttonVariants({ variant: 'ghost' }),
                      'h-8 w-8 p-0 font-normal',
                      '[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground',
                      // Selected
                      'data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[selected]:opacity-100 data-[selected]:hover:bg-primary data-[selected]:hover:text-primary-foreground data-[selected]:focus:bg-primary data-[selected]:focus:text-primary-foreground',
                      // Disabled
                      'data-[disabled]:text-muted-foreground data-[disabled]:opacity-50',
                      // Unavailable
                      'data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through',
                      // Outside months
                      'data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:bg-accent/50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30',
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
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-icons/vue'
import { buttonVariants } from '@/Components/Button'
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
} from 'radix-vue'
import { computed, type Ref, ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface Props {
  modelValue?: string | null | undefined
}

const props = withDefaults(defineProps<Props & DatePickerRootProps>(), {
  locale: 'sk',
})

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
