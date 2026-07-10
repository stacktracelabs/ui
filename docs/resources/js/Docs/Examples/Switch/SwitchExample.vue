<template>
  <div class="flex items-center space-x-2">
    <Switch id="airplane-mode" />
    <Label for="airplane-mode">Airplane mode</Label>
  </div>
</template>

<script setup lang="ts">
import { Label } from '@/Components/Base/Label'
import { Switch } from '@/Components/Base/Switch'
</script>
