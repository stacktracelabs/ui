<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <div :class="cn('relative w-full', $attrs.class || '')">
        <Button
          :variant="'outline'"
          :class="cn(
          'w-full justify-start text-left font-normal',
          !value && 'text-muted-foreground',
        )"
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          <span>{{ value ? formattedValue : datePlaceholder }}</span>
        </Button>
        <Button v-if="value && nullable" @click.stop.prevent="clear" class="absolute top-0 right-0 text-muted-foreground hover:text-destructive" variant="link">
          <XIcon class="w-4 h-4" />
        </Button>
      </div>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar locale="sk" v-model.string="value" :masks="masks" mode="datetime" is24hr hide-time-header />
    </PopoverContent>
  </Popover>
</template>
<script setup lang="ts">
import { format, parse } from 'date-fns'
import { Calendar as CalendarIcon, XIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import { cn } from "@/Utils";
import { useVModel } from "@vueuse/core";
import { Calendar } from '@/Components/VCalendar'
import { Popover, PopoverTrigger, PopoverContent } from '@/Components/Popover'
import { Button } from '@/Components/Button'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<{
  modelValue?: string | null
  nullable?: boolean
  placeholder?: string | undefined
}>(), {
  nullable: false,
})

const masks = ref({
  modelValue: 'YYYY-MM-DD HH:mm',
});

const datePlaceholder = computed(() => props.placeholder || 'Pick a date')

const value = useVModel(props, 'modelValue', emit)

const open = ref(false)

const formattedValue = computed(() => {
  const val = value.value
  if (val) {
    return format(parse(val, 'yyyy-MM-dd HH:mm', new Date()), 'dd.MM.yyyy HH:mm')
  }

  return null
})

const clear = () => {
  value.value = null
}
</script>
