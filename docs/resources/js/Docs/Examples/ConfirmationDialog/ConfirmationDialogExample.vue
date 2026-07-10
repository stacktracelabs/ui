<template>
  <div>
    <Button variant="destructive" @click="destroy">
      Delete
    </Button>

    <ConfirmationDialog />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  ConfirmationDialog,
  useConfirmable,
} from '@/Components/Base/ConfirmationDialog'

const { confirmDestructive } = useConfirmable()

const destroy = () => {
  confirmDestructive(
    'Are you sure you want to delete this resource?',
    async () => {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 2000)
      })
    },
  )
}
</script>
