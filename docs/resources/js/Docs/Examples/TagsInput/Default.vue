<template>
  <TagsInput v-model="tags" class="w-full max-w-md">
    <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>
    <TagsInputInput placeholder="Add a technology…" />
  </TagsInput>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from '@/Components/Base/TagsInput'

const tags = ref(['Vue', 'Laravel'])
</script>
