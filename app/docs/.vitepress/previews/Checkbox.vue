<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="airplane-mode" />
    <Label for="airplane-mode">Airplane Mode</Label>
  </div>
</template>

<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
</script>
