<template>
  <TabsLinkList v-if="navigation.length > 0">
    <TabsNavigationItem v-for="item in navigation" :item="item" />
  </TabsLinkList>
</template>

<script setup lang="ts">
import TabsLinkList from './TabsLinkList.vue'
import TabsNavigationItem from './TabsNavigationItem.vue'
import { type Navigation } from '@stacktrace/ui'

defineProps<{
  navigation: Navigation
}>()
</script>
