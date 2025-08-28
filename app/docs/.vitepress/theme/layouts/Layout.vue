<template>
  <Layout />

  <ConfirmationDialog to=".portal" />

  <div class="vp-raw portal"></div>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { ConfirmationDialog } from '@/Components/ConfirmationDialog'

const { Layout } = DefaultTheme
</script>
