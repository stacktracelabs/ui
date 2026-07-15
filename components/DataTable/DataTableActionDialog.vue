<template>
  <DataTableActionConfirmation v-slot="{ action, confirm, cancel, isRunning }">
    <Dialog :open="true" @update:open="onOpenChange($event, cancel)">
      <DialogContent>
        <DialogHeader>
          <DialogTitle v-if="action.title">{{ action.title }}</DialogTitle>
          <DialogDescription v-if="action.description">{{ action.description }}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" :disabled="isRunning" @click="cancel">
            {{ action.cancelLabel }}
          </Button>
          <Button
            :variant="action.isDestructive ? 'destructive' : 'default'"
            :disabled="isRunning"
            @click="confirm"
          >
            <ButtonState :processing="isRunning">
              {{ action.confirmLabel }}
            </ButtonState>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </DataTableActionConfirmation>
</template>

<script setup lang="ts">
import { DataTableActionConfirmation } from '@stacktrace/ui'
import { Button, ButtonState } from '@/Components/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/Components/Dialog'

const onOpenChange = (open: boolean, cancel: VoidFunction) => {
  if (!open) cancel()
}
</script>
