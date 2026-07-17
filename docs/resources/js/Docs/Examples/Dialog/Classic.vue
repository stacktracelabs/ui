<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">Set spending limit</Button>
    </DialogTrigger>
    <DialogContent variant="default" class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Spending limit</DialogTitle>
        <DialogDescription>Set a monthly limit for this workspace.</DialogDescription>
      </DialogHeader>
      <FieldGroup>
        <Field>
          <FieldLabel for="spending-limit">Limit</FieldLabel>
          <Input id="spending-limit" default-value="$300.00" />
          <FieldDescription>
            Workspace admins are notified as spending approaches the limit.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <DialogFooter>
        <DialogClose as-child><Button variant="outline">Cancel</Button></DialogClose>
        <DialogClose as-child><Button>Save limit</Button></DialogClose>
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
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/Components/Base/Field'
import { Input } from '@/Components/Base/Input'
</script>
