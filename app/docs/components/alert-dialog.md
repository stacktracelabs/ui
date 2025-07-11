# Alert Dialog

A modal dialog that interrupts the user with important content and expects a response.

<ComponentSource
  source="components/alert-dialog"
  primitive="https://www.reka-ui.com/docs/components/alert-dialog"
  ui="https://www.shadcn-vue.com/docs/components/alert-dialog.html"
/>

<ComponentPreview name="AlertDialog" />

## Installation

```shell
php artisan ui:add alert-dialog
```

## Usage

```vue
<template>
  <AlertDialog>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/Components/AlertDialog'
</script>
```
