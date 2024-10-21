<template>
  <DetailPanel>
    <DetailPanelHeader>
      <DetailPanelTitle>General</DetailPanelTitle>
    </DetailPanelHeader>
    <DetailPanelContent>
      <DetailPanelItem label="Username">peeters</DetailPanelItem>
      <DetailPanelItem label="Phone Number">+421 950 123 123</DetailPanelItem>
    </DetailPanelContent>
  </DetailPanel>
</template>

<script setup lang="ts">
import {
  DetailPanel,
  DetailPanelHeader,
  DetailPanelTitle,
  DetailPanelItem,
  DetailPanelContent,
} from '@/Components/DetailPanel'
</script>
