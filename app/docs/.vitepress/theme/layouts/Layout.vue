<template>
  <Layout />

  <ConfirmationDialog to=".portal" />

  <div class="vp-raw portal"></div>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { ConfirmationDialog } from '@/components/ui/confirmation-dialog'

const { Layout } = DefaultTheme
</script>
