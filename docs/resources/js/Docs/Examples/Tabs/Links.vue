<template>
  <TabsLinkList variant="ghost">
    <TabsLink href="/docs/components/tabs" :active="true">
      Overview
    </TabsLink>
    <TabsLink href="/docs/components/tabs?section=accessibility" :active="false">
      Accessibility
    </TabsLink>
    <TabsLink href="/docs/components/tabs?section=api" :active="false">
      API
    </TabsLink>
  </TabsLinkList>
</template>

<script setup lang="ts">
import { TabsLink, TabsLinkList } from '@/Components/Base/Tabs'
</script>
