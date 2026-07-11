<template>
  <Drawer>
    <DrawerTrigger as-child><Button variant="outline">Open drawer</Button></DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Notification settings</DrawerTitle>
          <DrawerDescription>Choose whether product updates should be sent.</DrawerDescription>
        </DrawerHeader>
        <div class="px-4">
          <Field orientation="horizontal">
            <Switch id="drawer-updates" />
            <FieldLabel for="drawer-updates">Product updates</FieldLabel>
          </Field>
        </div>
        <DrawerFooter>
          <DrawerClose as-child><Button>Save preferences</Button></DrawerClose>
          <DrawerClose as-child><Button variant="outline">Cancel</Button></DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/Components/Base/Drawer'
import { Field, FieldLabel } from '@/Components/Base/Field'
import { Switch } from '@/Components/Base/Switch'
</script>
