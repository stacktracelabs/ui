<template>
  <ToggleGroup v-model="alignment" type="single" variant="outline" aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Align left"><AlignLeftIcon /></ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center"><AlignCenterIcon /></ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right"><AlignRightIcon /></ToggleGroupItem>
  </ToggleGroup>
</template>

<script setup lang="ts">
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from '@lucide/vue'
import { ref } from 'vue'
import { ToggleGroup, ToggleGroupItem } from '@/Components/Base/ToggleGroup'

const alignment = ref('left')
</script>
