<template>
  <Panel>
    <PanelHeader>
      <PanelTitle>General</PanelTitle>
    </PanelHeader>
    <PanelContent>
      <PanelItem label="Username">peeters</PanelItem>
      <PanelItem label="Phone Number">+421 950 123 123</PanelItem>
    </PanelContent>
  </Panel>
</template>

<script setup lang="ts">
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelItem,
  PanelContent,
} from '@/components/ui/panel'
</script>
