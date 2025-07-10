<template>
  <Alert>
    <RocketIcon class="w-4 h-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { RocketIcon } from 'lucide-vue-next'
</script>
