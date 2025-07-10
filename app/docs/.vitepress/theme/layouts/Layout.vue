<template>
  <Layout />

  <ConfirmationDialog />
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog'

const { Layout } = DefaultTheme
</script>
