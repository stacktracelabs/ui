<template>
  <Empty class="border border-dashed">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FolderCodeIcon />
      </EmptyMedia>
      <EmptyTitle>No projects yet</EmptyTitle>
      <EmptyDescription>
        Create your first project or import an existing one.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div class="flex gap-2">
        <Button>Create project</Button>
        <Button variant="outline">
          Import project
        </Button>
      </div>
    </EmptyContent>
  </Empty>
</template>

<script setup lang="ts">
import { FolderCodeIcon } from '@lucide/vue'
import { Button } from '@/Components/Base/Button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/Components/Base/Empty'
</script>
