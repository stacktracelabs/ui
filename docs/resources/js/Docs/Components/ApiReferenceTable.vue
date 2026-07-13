<template>
    <div data-docs-example class="not-prose overflow-hidden rounded-lg border">
        <div class="overflow-x-auto">
            <table class="w-full min-w-2xl border-collapse text-left text-sm">
                <thead class="bg-muted/50 text-xs text-muted-foreground">
                    <tr>
                        <th class="w-1/5 border-b px-4 py-3 font-medium">{{ nameLabel }}</th>
                        <th v-if="showDefault" class="w-1/5 border-b px-4 py-3 font-medium">Default</th>
                        <th class="border-b px-4 py-3 font-medium">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="entry in entries" :key="entry.name" class="border-b last:border-b-0">
                        <td class="px-4 py-4 align-top">
                            <code class="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
                                {{ entry.name }}<span v-if="entry.required" class="text-destructive">*</span>
                            </code>
                        </td>
                        <td v-if="showDefault" class="px-4 py-4 align-top">
                            <code v-if="entry.default !== undefined" class="font-mono text-xs text-foreground">
                                {{ entry.default }}
                            </code>
                            <span v-else aria-label="No default value" class="text-muted-foreground">—</span>
                        </td>
                        <td class="px-4 py-4 align-top">
                            <code class="font-mono text-xs text-foreground">{{ entry.type }}</code>
                            <p class="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                                {{ entry.description }}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ApiReferenceEntry } from '@/Docs/Api/frontend-types'

withDefaults(defineProps<{
    entries: ApiReferenceEntry[]
    nameLabel?: string
    showDefault?: boolean
}>(), {
    nameLabel: 'Property',
    showDefault: false,
})
</script>
