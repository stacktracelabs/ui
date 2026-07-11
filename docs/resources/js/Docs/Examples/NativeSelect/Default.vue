<template>
  <NativeSelect class="w-full max-w-xs">
    <NativeSelectOption value="">Select a department</NativeSelectOption>
    <NativeSelectOptGroup label="Engineering">
      <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
      <NativeSelectOption value="backend">Backend</NativeSelectOption>
      <NativeSelectOption value="devops">DevOps</NativeSelectOption>
    </NativeSelectOptGroup>
    <NativeSelectOptGroup label="Operations">
      <NativeSelectOption value="support">Customer support</NativeSelectOption>
      <NativeSelectOption value="product">Product management</NativeSelectOption>
    </NativeSelectOptGroup>
  </NativeSelect>
</template>

<script setup lang="ts">
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from '@/Components/Base/NativeSelect'
</script>
