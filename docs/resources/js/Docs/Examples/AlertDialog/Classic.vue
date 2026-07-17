<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="outline">Discard changes</Button>
    </AlertDialogTrigger>
    <AlertDialogContent variant="default">
      <AlertDialogHeader>
        <AlertDialogTitle>Discard your changes?</AlertDialogTitle>
        <AlertDialogDescription>
          The edits made since your last save will be permanently lost.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Keep editing</AlertDialogCancel>
        <AlertDialogAction :class="buttonVariants({ variant: 'destructive' })">
          Discard changes
        </AlertDialogAction>
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
} from '@/Components/Base/AlertDialog'
import { Button, buttonVariants } from '@/Components/Base/Button'
</script>
