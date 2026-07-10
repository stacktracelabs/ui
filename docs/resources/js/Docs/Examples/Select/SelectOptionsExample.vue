<template>
  <Select v-model="selectedColor">
    <SelectTrigger class="w-[180px]">
      <SelectValue placeholder="Select a color" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem
        v-for="option in colorOptions"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/Base/Select'

const selectedColor = ref<string>()

const colorOptions = [
  { label: 'Blue', value: 'blue' },
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
]
</script>
