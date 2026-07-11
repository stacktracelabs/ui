<template>
  <div class="flex items-center gap-2">
    <Checkbox id="label-terms" />
    <Label for="label-terms">Accept the terms and conditions</Label>
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from '@/Components/Base/Checkbox'
import { Label } from '@/Components/Base/Label'
</script>
