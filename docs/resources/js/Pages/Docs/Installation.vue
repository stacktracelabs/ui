<template>
    <DocsLayout>
        <Head title="Installation" />
        <DocsPage
            title="Installation"
            description="Connect the StackTrace registry to a Laravel and Vue application, then install only the components you need."
        >
            <h2 id="requirements">Requirements</h2>
            <p>Before adding StackTrace UI, your application should have:</p>
            <ul>
                <li>Laravel with an Inertia Vue frontend</li>
                <li>Vue 3.5 or newer</li>
                <li>Tailwind CSS v4</li>
                <li>A shadcn-vue <code>components.json</code> configuration</li>
            </ul>

            <h2 id="initialize-shadcn-vue">1. Initialize shadcn-vue</h2>
            <p>
                If the project does not already contain <code>components.json</code>, initialize shadcn-vue and select the Laravel template when prompted.
            </p>
            <CodeBlock code="npx shadcn-vue@latest init" language="shell" />

            <h2 id="configure-registry">2. Configure the StackTrace registry</h2>
            <p>
                Add the <code>@stacktrace</code> namespace to the <code>registries</code> object in <code>components.json</code>. The placeholder lets the CLI resolve component dependencies from the same registry.
            </p>
            <CodeBlock :code="registryConfiguration" language="json" filename="components.json" />

            <h2 id="install-components">3. Install components</h2>
            <p>Install one component by its registry namespace:</p>
            <CodeBlock code="npx shadcn-vue@latest add @stacktrace/button" language="shell" />
            <p>You can install several components in one command:</p>
            <CodeBlock code="npx shadcn-vue@latest add @stacktrace/button @stacktrace/card @stacktrace/dialog" language="shell" />
            <p>To install the complete component set, use the registry's aggregate item:</p>
            <CodeBlock code="npx shadcn-vue@latest add @stacktrace/all" language="shell" />

            <h2 id="using-components">4. Use the installed source</h2>
            <p>
                Registry items are written into the UI alias configured by your project. With the recommended StackTrace aliases, components can be imported from <code>@/Components</code>.
            </p>
            <CodeBlock :code="usageExample" language="vue" filename="SaveButton.vue" />

            <h2 id="updating">Updating a component</h2>
            <p>
                Components belong to your application after installation. Review local customizations before overwriting an installed component with a newer registry version.
            </p>
            <CodeBlock code="npx shadcn-vue@latest add @stacktrace/button --overwrite" language="shell" />
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head } from '@inertiajs/vue3'

const registryConfiguration = `{
  "registries": {
    "@stacktrace": "https://ui.stacktrace.sk/r/{name}.json"
  }
}`

const usageExample = `<template>
  <Button>Save changes</Button>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Button'
<\/script>`
</script>
