<template>
  <Combobox class="max-w-[250px]" :options="[
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ]" placeholder="Select a framework…" />
</template>

<script setup lang="ts">
import { FormCombobox as Combobox } from '@/components/ui/form'
</script>
