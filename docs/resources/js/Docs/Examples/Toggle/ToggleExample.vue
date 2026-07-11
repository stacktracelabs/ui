<template>
  <div class="flex flex-col items-center gap-3">
    <p class="text-sm text-muted-foreground">
      Active: <strong class="text-foreground">{{ control.active.value }}</strong>
    </p>
    <div class="flex gap-2">
      <Button @click="control.activate">
        Activate
      </Button>
      <Button variant="outline" @click="control.deactivate">
        Deactivate
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToggle } from '@stacktrace/ui'
import { Button } from '@/Components/Base/Button'

const control = useToggle()
</script>
