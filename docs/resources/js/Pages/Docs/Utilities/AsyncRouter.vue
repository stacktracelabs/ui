<template>
    <DocsLayout>
        <Head title="asyncRouter" />
        <DocsPage
            title="asyncRouter"
            description="A promise-based wrapper around imperative Inertia router visits."
        >
            <h2 id="usage">Usage</h2>
            <p>
                Use <code>asyncRouter</code> when an imperative workflow benefits from
                <code>await</code>. Ordinary navigation and form submission should continue
                to use Inertia links, forms, or the standard router API.
            </p>
            <CodeBlock :code="usage" language="typescript" />

            <h2 id="promise-behavior">Promise behavior</h2>
            <p>
                Each method resolves with Inertia's success event parameters. Validation
                errors and cancelled visits reject the promise. The utility replaces
                <code>onSuccess</code>, <code>onError</code>, and <code>onCancel</code> with
                its own promise handlers; callbacks supplied under those keys are not run.
            </p>

            <h2 id="api-reference">API Reference</h2>

            <h3 id="methods">Methods</h3>
            <ApiReferenceTable :entries="methods" name-label="Method" />

            <TypeApiReference
                name="AsyncRouter"
                description="Defines promise-returning visit methods for the supported Inertia HTTP operations."
                :definition="definition"
                :heading-level="3"
            />
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import ApiReferenceTable from '@/Docs/Components/ApiReferenceTable.vue'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import TypeApiReference from '@/Docs/Components/TypeApiReference.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head } from '@inertiajs/vue3'

const usage = `import { asyncRouter } from '@stacktrace/ui'

async function archiveCustomer(id: number) {
  await asyncRouter.delete(route('customers.destroy', id), {
    preserveScroll: true,
  })

  console.info('Customer archived')
}`

const definition = `interface AsyncRouter {
  visit(
    href: string | URL,
    options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel'>,
  ): Promise<GlobalEventParameters<'success'>>

  post(
    url: string | URL,
    data?: RequestPayload,
    options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>,
  ): Promise<GlobalEventParameters<'success'>>

  patch(
    url: string | URL,
    data?: RequestPayload,
    options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>,
  ): Promise<GlobalEventParameters<'success'>>

  delete(
    url: string | URL,
    options?: Exclude<VisitOptions, 'onSuccess' | 'onError' | 'onCancel' | 'method' | 'data'>,
  ): Promise<GlobalEventParameters<'success'>>
}`

const methods = [
    { name: 'visit', type: '(href, options?) => Promise<GlobalEventParameters<\'success\'>>', description: 'Starts an Inertia visit using the method and data supplied by VisitOptions.' },
    { name: 'post', type: '(url, data?, options?) => Promise<GlobalEventParameters<\'success\'>>', description: 'Starts a POST visit with an optional request payload.' },
    { name: 'patch', type: '(url, data?, options?) => Promise<GlobalEventParameters<\'success\'>>', description: 'Starts a PATCH visit with an optional request payload.' },
    { name: 'delete', type: '(url, options?) => Promise<GlobalEventParameters<\'success\'>>', description: 'Starts a DELETE visit.' },
]
</script>
