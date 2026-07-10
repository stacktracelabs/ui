<template>
  <Alert class="max-w-xl">
    <RocketIcon class="size-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      Your project is ready for its first deployment.
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/Components/Base/Alert'
import { RocketIcon } from '@lucide/vue'
</script>
