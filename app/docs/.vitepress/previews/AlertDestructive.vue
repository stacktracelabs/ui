<template>
  <Alert variant="destructive">
    <TriangleAlertIcon class="w-4 h-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@/Components/Alert'
import { TriangleAlertIcon } from 'lucide-vue-next'
</script>
