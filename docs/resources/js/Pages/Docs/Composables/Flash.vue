<template>
    <DocsLayout>
        <Head title="useFlash" />
        <DocsPage
            title="useFlash"
            description="Subscribes a Vue component to a typed Inertia flash event for its mounted lifetime."
        >
            <h2 id="usage">Usage</h2>
            <p>
                Call <code>useFlash</code> during component setup. The listener is registered
                when the component mounts and removed before it unmounts.
            </p>
            <CodeBlock :code="usage" language="typescript" filename="useNotice.ts" />

            <h2 id="typing-flash-data">Typing flash data</h2>
            <p>
                Extend Inertia's <code>FlashData</code> interface with application-specific
                keys. The key passed to <code>useFlash</code> and the callback value are then
                inferred together.
            </p>
            <CodeBlock :code="augmentation" language="typescript" filename="inertia.d.ts" />

            <h2 id="when-to-use">When to use</h2>
            <p>
                Use flash events for feedback produced by an Inertia response, such as a
                server-confirmed toast. Use ordinary props for durable page data and local
                Vue state for feedback that does not cross a request boundary. The callback
                runs only when the selected flash value is present and truthy.
            </p>

            <h2 id="api-reference">API Reference</h2>

            <FunctionApiReference
                name="useFlash"
                description="Runs a callback when Inertia emits a non-empty value for the selected flash key."
                :signature="signature"
                :parameters="parameters"
                :returns="returns"
                :heading-level="3"
            />
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import FunctionApiReference from '@/Docs/Components/FunctionApiReference.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head } from '@inertiajs/vue3'

const usage = `import { useFlash } from '@stacktrace/ui'
import { toast } from 'vue-sonner'

useFlash('notice', notice => {
  toast.success(notice)
})`

const augmentation = `import '@inertiajs/core'

declare module '@inertiajs/core' {
  interface FlashData {
    notice?: string
  }
}`

const signature = `function useFlash<T extends keyof FlashData>(
  key: T,
  callback: (value: NonNullable<FlashData[T]>) => void,
): void`

const parameters = [
    {
        name: 'key',
        type: 'T',
        description: 'Selects a key declared by Inertia FlashData.',
        required: true,
    },
    {
        name: 'callback',
        type: '(value: NonNullable<FlashData[T]>) => void',
        description: 'Receives the typed, non-null flash value when the flash event fires.',
        required: true,
    },
]

const returns = {
    type: 'void',
    description: 'The composable manages the event subscription through the component lifecycle.',
}
</script>
