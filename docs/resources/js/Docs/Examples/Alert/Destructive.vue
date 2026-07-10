<template>
  <Alert variant="destructive" class="max-w-xl">
    <TriangleAlertIcon class="size-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please sign in again.
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/Components/Base/Alert'
import { TriangleAlertIcon } from '@lucide/vue'
</script>
