<template>
    <section class="space-y-4">
        <component :is="`h${headingLevel}`" :id="slug(name)">
            <code>{{ name }}</code>
        </component>
        <p>{{ description }}</p>
        <CodeBlock :code="definition" language="typescript" />
        <ApiReferenceTable v-if="properties.length" :entries="properties" />
        <slot />
    </section>
</template>

<script setup lang="ts">
import type { ApiReferenceEntry } from '@/Docs/Api/frontend-types'
import ApiReferenceTable from '@/Docs/Components/ApiReferenceTable.vue'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'

withDefaults(defineProps<{
    name: string
    description: string
    definition: string
    properties?: ApiReferenceEntry[]
    headingLevel?: 2 | 3
}>(), {
    properties: () => [],
    headingLevel: 2,
})

function slug(value: string): string {
    return value
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/[^A-Za-z0-9]+/g, '-')
        .toLowerCase()
}
</script>
