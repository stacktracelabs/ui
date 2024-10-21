# Detail Panel

Panel for displaying name-value (key-value) information.

<ComponentPreview name="DetailPanel" class="w-full" />

## Installation

```shell
php artisan ui:add detail-panel
```

## Usage

```vue
<template>
  <DetailPanel>
    <DetailPanelHeader>
      <DetailPanelTitle>General</DetailPanelTitle>
    </DetailPanelHeader>
    <DetailPanelContent>
      <DetailPanelItem label="Username">peeters</DetailPanelItem>
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
```
