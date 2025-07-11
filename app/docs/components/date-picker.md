# Date Picker

Enables user to select a date.

<ComponentSource
  source="components/date-picker"
/>

<ComponentPreview name="DatePicker" />

## Installation

:::info NOTE
The component depends on the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/index.html) package, which solves a lot of the problems that come with working with dates and times in JavaScript.

We highly recommend reading through the documentation for the package to get a solid feel for how it works, and you'll need to install it in your project to use the date-related components.
:::

Install the date package.

```shell
npm add @internationalized/date
```

Install the component from your command line.

```shell
php artisan ui:add date-picker
```

## Usage

```vue
<template>
  <DatePicker />
</template>

<script setup lang="ts">
import { DatePicker } from '@/components/ui/date-picker'
</script>
```
