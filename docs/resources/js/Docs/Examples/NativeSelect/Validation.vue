<template>
  <Field class="w-full max-w-xs" data-invalid>
    <FieldLabel for="native-select-country">Country</FieldLabel>
    <NativeSelect
      id="native-select-country"
      v-model="country"
      aria-invalid
      name="country"
      required
    >
      <NativeSelectOption value="">Select a country</NativeSelectOption>
      <NativeSelectOption value="at">Austria</NativeSelectOption>
      <NativeSelectOption value="cz">Czechia</NativeSelectOption>
      <NativeSelectOption value="sk">Slovakia</NativeSelectOption>
    </NativeSelect>
    <FieldError>Select a country.</FieldError>
  </Field>
</template>

<script setup lang="ts">
import { Field, FieldError, FieldLabel } from '@/Components/Base/Field'
import {
  NativeSelect,
  NativeSelectOption,
} from '@/Components/Base/NativeSelect'
import { ref } from 'vue'

const country = ref('')
</script>
