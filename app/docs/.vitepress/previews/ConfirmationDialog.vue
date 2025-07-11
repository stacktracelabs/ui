<template>
  <Button variant="destructive" @click="destroy">Delete</Button>
</template>

<script setup lang="ts">
import { useConfirmable } from '@/components/ui/confirmation-dialog'
import { Button } from '@/components/ui/button'

const { confirmDestructive } = useConfirmable()

const destroy = () => confirmDestructive('Are you sure you want to delete this resource?', async () => {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
})
</script>
