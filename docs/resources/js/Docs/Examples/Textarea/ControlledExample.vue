<template>
  <Field class="w-full max-w-sm">
    <FieldLabel for="textarea-bio">Short biography</FieldLabel>
    <Textarea
      id="textarea-bio"
      v-model="biography"
      maxlength="160"
      placeholder="Tell people what you work on."
    />
    <FieldDescription>
      {{ biography.length }}/160 characters
    </FieldDescription>
  </Field>
</template>

<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '@/Components/Base/Field'
import { Textarea } from '@/Components/Base/Textarea'
import { ref } from 'vue'

const biography = ref('')
</script>
