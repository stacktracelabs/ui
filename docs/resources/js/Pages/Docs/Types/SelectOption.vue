<template>
    <DocsLayout>
        <Head title="SelectOption" />
        <DocsPage
            title="SelectOption"
            description="A minimal generic label-value contract shared by baked selection controls."
        >
            <h2 id="usage">Usage</h2>
            <p>
                Set the generic value type when an option uses numeric ids, enums, or another
                application value. It defaults to <code>string</code>.
            </p>
            <CodeBlock :code="usage" language="typescript" />

            <TypeApiReference
                name="SelectOption"
                description="Pairs a human-readable label with the value stored by a selection control."
                :definition="definition"
                :properties="properties"
            />
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import TypeApiReference from '@/Docs/Components/TypeApiReference.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head } from '@inertiajs/vue3'

const usage = `import type { SelectOption } from '@stacktrace/ui'

const plans: SelectOption<number>[] = [
  { label: 'Starter', value: 1 },
  { label: 'Professional', value: 2 },
]`

const definition = `type SelectOption<V = string> = {
  label: string
  value: V
}`

const properties = [
    { name: 'label', type: 'string', description: 'Provides the human-readable option label.', required: true },
    { name: 'value', type: 'V', description: 'Provides the value represented by the option.', required: true },
]
</script>
