<template>
  <div class="w-full max-w-sm">
    <Field>
      <FieldLabel for="input-email">Email</FieldLabel>
      <Input id="input-email" type="email" placeholder="you@example.com" />
      <FieldDescription>We will only use this for account notifications.</FieldDescription>
    </Field>
  </div>
</template>

<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from '@/Components/Base/Field'
import { Input } from '@/Components/Base/Input'
</script>
