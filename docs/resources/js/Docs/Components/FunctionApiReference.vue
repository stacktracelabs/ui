<template>
    <section class="space-y-4">
        <component :is="`h${headingLevel}`" :id="slug(name)">
            <code>{{ name }}</code>
        </component>
        <p>{{ description }}</p>
        <CodeBlock :code="signature" language="typescript" />

        <template v-if="parameters.length">
            <component :is="`h${headingLevel + 1}`" :id="`${slug(name)}-parameters`">
                Parameters
            </component>
            <ApiReferenceTable
                :entries="parameters"
                name-label="Parameter"
                :show-default="parameters.some(parameter => parameter.default !== undefined)"
            />
        </template>

        <template v-if="returns">
            <component :is="`h${headingLevel + 1}`" :id="`${slug(name)}-returns`">
                Returns
            </component>
            <p>
                <code>{{ returns.type }}</code> — {{ returns.description }}
            </p>
        </template>

        <slot />
    </section>
</template>

<script setup lang="ts">
import type { ApiReferenceEntry, ApiReturnValue } from '@/Docs/Api/frontend-types'
import ApiReferenceTable from '@/Docs/Components/ApiReferenceTable.vue'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'

withDefaults(defineProps<{
    name: string
    description: string
    signature: string
    parameters?: ApiReferenceEntry[]
    returns?: ApiReturnValue
    headingLevel?: 2 | 3
}>(), {
    parameters: () => [],
    returns: undefined,
    headingLevel: 2,
})

function slug(value: string): string {
    return value
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/[^A-Za-z0-9]+/g, '-')
        .toLowerCase()
}
</script>
