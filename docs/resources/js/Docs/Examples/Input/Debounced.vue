<template>
  <div class="grid w-full max-w-sm gap-2">
    <Label for="input-search">Search</Label>
    <DebouncedInput
      id="input-search"
      v-model="query"
      :debounce="300"
      :max-wait="1000"
      placeholder="Search projects…"
    />
    <p class="text-sm text-muted-foreground">
      Emitted value: {{ query || 'None' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { DebouncedInput } from '@/Components/Base/Input'
import { Label } from '@/Components/Base/Label'
import { ref } from 'vue'

const query = ref('')
</script>
