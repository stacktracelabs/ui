# Alert

Displays a callout for user attention.

<ComponentPreview name="Alert" />

## Installation

```shell
php artisan ui:add alert
```

## Usage

```vue
<template>
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
        You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
</template>

<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@/Components/Alert'
</script>
```

## Examples

### Default

<ComponentPreview name="Alert" />

### Positive

<ComponentPreview name="AlertPositive" />

### Destructive

<ComponentPreview name="AlertDestructive" />
