<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">Review terms</Button>
    </DialogTrigger>
    <DialogScrollContent>
      <DialogHeader>
        <DialogTitle>Workspace terms</DialogTitle>
        <DialogDescription>
          Review the important details before accepting.
        </DialogDescription>
      </DialogHeader>
      <div class="space-y-4 text-sm text-muted-foreground">
        <p v-for="section in sections" :key="section.title">
          <strong class="text-foreground">{{ section.title }}.</strong>
          {{ section.content }}
        </p>
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <Button variant="outline">Close</Button>
        </DialogClose>
        <DialogClose as-child>
          <Button>Accept terms</Button>
        </DialogClose>
      </DialogFooter>
    </DialogScrollContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogScrollContent,
  DialogTitle,
  DialogTrigger,
} from '@/Components/Base/Dialog'

const sections = [
  {
    title: 'Account access',
    content: 'Workspace administrators manage membership and access levels.',
  },
  {
    title: 'Shared content',
    content: 'Items published to the workspace are visible to its members.',
  },
  {
    title: 'Retention',
    content: 'Deleted items remain recoverable for the configured retention period.',
  },
  {
    title: 'Notifications',
    content: 'Important security and membership changes may generate notifications.',
  },
  {
    title: 'Ownership',
    content: 'Workspace owners remain responsible for exporting required records.',
  },
]
</script>
