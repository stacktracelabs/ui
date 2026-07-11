<template>
  <div class="flex w-full max-w-sm flex-col gap-3">
    <div class="flex items-center justify-between text-sm">
      <Label>Volume</Label>
      <span class="text-muted-foreground">{{ value[0] }}%</span>
    </div>
    <Slider v-model="value" :max="100" :step="1" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/Components/Base/Label'
import { Slider } from '@/Components/Base/Slider'

const value = ref([48])
</script>
