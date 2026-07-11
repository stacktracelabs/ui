<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">Edit profile</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Update the public details shown on your account.</DialogDescription>
      </DialogHeader>
      <FieldGroup>
        <Field>
          <FieldLabel for="dialog-name">Name</FieldLabel>
          <Input id="dialog-name" value="Ada Lovelace" />
        </Field>
      </FieldGroup>
      <DialogFooter>
        <DialogClose as-child><Button variant="outline">Cancel</Button></DialogClose>
        <DialogClose as-child><Button>Save changes</Button></DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/Base/Dialog'
import { Field, FieldGroup, FieldLabel } from '@/Components/Base/Field'
import { Input } from '@/Components/Base/Input'
</script>
