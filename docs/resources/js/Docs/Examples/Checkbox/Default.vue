<template>
  <div class="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label for="terms">Accept terms and conditions</Label>
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from '@/Components/Base/Checkbox'
import { Label } from '@/Components/Base/Label'
</script>
