<template>
  <div class="flex items-center gap-2">
    <Checkbox id="airplane-mode" />
    <Label for="airplane-mode">Airplane mode</Label>
  </div>
</template>

<script setup lang="ts">
import {
  Checkbox,
} from '@/Components/Base/Checkbox'
import { Label } from '@/Components/Base/Label'
</script>
