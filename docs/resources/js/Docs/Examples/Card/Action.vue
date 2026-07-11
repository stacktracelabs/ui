<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Workspace</CardTitle>
      <CardDescription>Manage members and workspace settings.</CardDescription>
      <CardAction>
        <Button variant="outline" size="sm">Settings</Button>
      </CardAction>
    </CardHeader>
    <CardContent class="text-sm text-muted-foreground">
      12 members · Pro plan
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/Components/Base/Card'
</script>
