<template>
  <form class="w-full max-w-sm">
    <FieldSet>
      <FieldLegend>Profile</FieldLegend>
      <FieldDescription>
        These details are shown on invoices and account emails.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel for="field-name">Full name</FieldLabel>
          <Input id="field-name" autocomplete="name" placeholder="Ada Lovelace" />
          <FieldDescription>This name appears on invoices.</FieldDescription>
        </Field>
        <Field data-invalid>
          <FieldLabel for="field-username">Username</FieldLabel>
          <Input id="field-username" aria-invalid value="ada" />
          <FieldError>That username is already in use.</FieldError>
        </Field>
        <Field orientation="horizontal">
          <Switch id="field-newsletter" />
          <FieldLabel for="field-newsletter">Subscribe to product updates</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Button type="submit">Save profile</Button>
          <Button type="button" variant="outline">Cancel</Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  </form>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/Components/Base/Field'
import { Input } from '@/Components/Base/Input'
import { Switch } from '@/Components/Base/Switch'
</script>
