<template>
  <Alert variant="positive" class="max-w-xl">
    <ShieldCheckIcon class="size-4" />
    <AlertTitle>Protection active</AlertTitle>
    <AlertDescription>
      Your connection is secured with an encrypted tunnel.
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/Components/Base/Alert'
import { ShieldCheckIcon } from '@lucide/vue'
</script>
