<template>
  <Panel class="w-full">
    <PanelHeader>
      <PanelTitle>General</PanelTitle>
    </PanelHeader>
    <PanelContent>
      <PanelItem label="Username">
        peeters
      </PanelItem>
      <PanelItem label="Phone Number">
        +421 950 123 123
      </PanelItem>
    </PanelContent>
  </Panel>
</template>

<script setup lang="ts">
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelItem,
  PanelTitle,
} from '@/Components/Base/Panel'
</script>
