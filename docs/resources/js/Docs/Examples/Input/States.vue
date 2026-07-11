<template>
  <div class="grid w-full max-w-sm gap-5">
    <Field>
      <FieldLabel for="input-disabled">Disabled</FieldLabel>
      <Input id="input-disabled" disabled value="Unavailable" />
    </Field>

    <Field data-invalid>
      <FieldLabel for="input-invalid">Email</FieldLabel>
      <Input id="input-invalid" aria-invalid type="email" value="not-an-email" />
      <FieldError>Enter a valid email address.</FieldError>
    </Field>

    <Field>
      <FieldLabel for="input-file">Attachment</FieldLabel>
      <Input id="input-file" type="file" accept="image/*" />
    </Field>
  </div>
</template>

<script setup lang="ts">
import { Field, FieldError, FieldLabel } from '@/Components/Base/Field'
import { Input } from '@/Components/Base/Input'
</script>
