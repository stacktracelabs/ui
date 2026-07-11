<template>
  <div>
    <Toaster />
    <Button variant="outline" @click="toast('Package published successfully')">
      Show toast
    </Button>
  </div>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner'
import { Button } from '@/Components/Base/Button'
import { Toaster } from '@/Components/Base/Sonner'
</script>
