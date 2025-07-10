<template>
  <OptionSelect :options="options" class="w-[180px]" placeholder="Select a color" />
</template>

<script setup lang="ts">
import { OptionSelect } from '@/Components/Select'
import { type SelectOption } from '@stacktrace/ui'
import { ref } from 'vue'

const options = ref<Array<SelectOption>>([
  { label: 'Blue', value: 'blue' },
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
])
</script>
