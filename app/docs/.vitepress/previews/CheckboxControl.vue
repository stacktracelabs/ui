<template>
  <div class="flex flex-col items-center gap-2">
    <CheckboxControl v-model="checked">Airplane Mode</CheckboxControl>
    <code class="text-sm">{{ checked ? 'checked' : 'not checked' }}</code>
  </div>
</template>

<script setup lang="ts">
import { CheckboxControl } from '@/components/ui/checkbox'
import { ref } from 'vue'

const checked = ref(false)
</script>
