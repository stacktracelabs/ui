<template>
  <Alert variant="positive">
    <ShieldCheckIcon class="w-4 h-4" />
    <AlertTitle>Protection Active</AlertTitle>
    <AlertDescription>
      Your connection is now secured with encrypted tunnel.
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { ShieldCheckIcon } from 'lucide-vue-next'
</script>
