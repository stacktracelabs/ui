<template>
  <ButtonGroup aria-label="Document actions">
    <Button variant="outline">
      Save
    </Button>
    <Button variant="outline">
      Publish
    </Button>
    <Button variant="outline" size="icon" aria-label="More actions">
      <EllipsisIcon />
    </Button>
  </ButtonGroup>
</template>

<script setup lang="ts">
import { EllipsisIcon } from '@lucide/vue'
import { Button } from '@/Components/Base/Button'
import { ButtonGroup } from '@/Components/Base/ButtonGroup'
</script>
