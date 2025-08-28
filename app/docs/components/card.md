# Card

Displays a card with header, content, and footer.

<ComponentSource
  source="components/card"
  ui="https://www.shadcn-vue.com/docs/components/card.html"
/>

<ComponentPreview name="Card" />

## Installation

```shell
php artisan ui:add card
```

## Usage

```vue
<template>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      Card Content
    </CardContent>
    <CardFooter>
      Card Footer
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/Components/Card'
</script>
```

## Examples

<ComponentPreview name="CardExample" />
