<template>
  <div data-docs-example class="not-prose overflow-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full min-w-2xl border-collapse text-left text-sm">
        <thead class="bg-muted/50 text-xs text-muted-foreground">
          <tr>
            <th class="w-1/5 border-b px-4 py-3 font-medium">Prop</th>
            <th class="w-1/5 border-b px-4 py-3 font-medium">Default</th>
            <th class="border-b px-4 py-3 font-medium">Type</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prop in props" :key="prop.name" class="border-b last:border-b-0">
            <td class="px-4 py-4 align-top">
              <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                {{ prop.name }}<span v-if="prop.required" class="text-destructive">*</span>
              </code>
            </td>
            <td class="px-4 py-4 align-top">
              <code v-if="prop.default !== undefined" class="font-mono text-xs text-foreground">
                {{ prop.default }}
              </code>
              <span v-else aria-label="No default value" class="text-muted-foreground">—</span>
            </td>
            <td class="px-4 py-4 align-top">
              <code class="font-mono text-xs text-foreground">{{ prop.type }}</code>
              <p class="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                {{ prop.description }}
                <template v-if="prop.name === 'asChild'">
                  <Link href="/docs/fundamentals/composition" class="font-medium text-foreground underline underline-offset-4">
                    Read the Composition guide.
                  </Link>
                </template>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ComponentApiProp } from '@/Docs/Api/types'
import { Link } from '@inertiajs/vue3'

defineProps<{
  props: ComponentApiProp[]
}>()
</script>
