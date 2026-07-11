<template>
  <div class="flex flex-wrap items-center gap-4">
    <Spinner />
    <Button disabled>
      <Spinner aria-hidden="true" data-icon="inline-start" />
      Processing payment
    </Button>
    <Badge variant="secondary">
      <Spinner aria-hidden="true" data-icon="inline-start" />
      Syncing
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@/Components/Base/Badge'
import { Button } from '@/Components/Base/Button'
import { Spinner } from '@/Components/Base/Spinner'
</script>
