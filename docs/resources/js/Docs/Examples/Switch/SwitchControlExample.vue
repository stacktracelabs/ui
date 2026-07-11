<template>
  <div class="flex flex-col items-start gap-2">
    <SwitchControl v-model="enabled">Notifications</SwitchControl>
    <p class="text-sm text-muted-foreground">
      {{ enabled ? 'Notifications are enabled.' : 'Notifications are disabled.' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SwitchControl } from '@/Components/Base/Switch'

const enabled = ref(false)
</script>
