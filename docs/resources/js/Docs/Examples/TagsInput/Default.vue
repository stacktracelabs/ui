<template>
  <div class="grid w-full max-w-md gap-2">
    <Label for="technologies">Technologies</Label>
    <TagsInput
      id="technologies"
      v-model="tags"
    >
      <TagsInputItem v-for="tag in tags" :key="tag" :value="tag">
        <TagsInputItemText />
        <TagsInputItemDelete />
      </TagsInputItem>
      <TagsInputInput placeholder="Add a technology…" />
    </TagsInput>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/Components/Base/Label'
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from '@/Components/Base/TagsInput'

const tags = ref(['Vue', 'Laravel'])
</script>
