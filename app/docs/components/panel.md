# Panel

Panel for displaying name-value (key-value) information.

<ComponentPreview name="Panel" class="w-full" />

## Installation

```shell
php artisan ui:add panel
```

## Usage

```vue
<template>
  <Panel>
    <PanelHeader>
      <PanelTitle>General</PanelTitle>
    </PanelHeader>
    <PanelContent>
      <PanelItem label="Username">peeters</PanelItem>
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
} from '@/Components/Panel'
</script>
```
