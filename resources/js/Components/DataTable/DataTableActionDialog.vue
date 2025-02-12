<template>
  <Dialog :control="control">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ action.title }}</DialogTitle>
        <DialogDescription>{{ action.description }}</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button @click="control.deactivate" variant="outline">{{ action.cancelLabel }}</Button>
        <ActionButton
          :processing="isRunning"
          :variant="action.isDestructive ? 'destructive' : 'default'"
          @click="runAction"
        >{{ action.confirmLabel }}</ActionButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts" generic="ResourceKey = string | number">
import { ActionButton, Button } from '@/Components/Button'
import { useForm } from '@inertiajs/vue3'
import { toRaw } from 'vue'
import { type ExecutableAction, useActionRunner } from './internal'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/Components/Dialog'
import { type Toggle } from '@stacktrace/ui'

const props = defineProps<{
  control: Toggle
  action: ExecutableAction
  selection: Array<ResourceKey>
}>()

const { run, isRunning } = useActionRunner<ResourceKey>()

const runAction = () => {
  run(props.action, props.selection, {
    onSuccess: () => {
      props.control.deactivate()
    }
  })
}
</script>
