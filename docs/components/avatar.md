# Avatar

An image element with a fallback for representing the user.

<ComponentSource
  source="components/Avatar"
  primitive="https://www.radix-vue.com/components/avatar"
  ui="https://www.shadcn-vue.com/docs/components/avatar.html"
/>

<ComponentPreview name="Avatar" />

## Installation

```shell
php artisan ui:add avatar
```

## Usage

```vue
<template>
  <Avatar>
    <AvatarImage src="https://github.com/stacktracelabs.png" alt="@stacktracelabs" />
    <AvatarFallback>ST</AvatarFallback>
  </Avatar>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/Components/Avatar'
</script>
```
