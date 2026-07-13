<template>
    <DocsLayout>
        <Head title="useToggle" />
        <DocsPage
            title="useToggle"
            description="A small reactive controller for explicit boolean active state."
        >
            <ComponentPreview :source="toggleSource">
                <ToggleExample />
            </ComponentPreview>

            <h2 id="usage">Usage</h2>
            <p>
                Use the controller when several consumers need to read or change the same
                boolean state through named operations. Pass <code>toggle.active</code> to a
                component's controlled prop and call the methods from triggers or callbacks.
            </p>
            <CodeBlock :code="toggleSource" language="vue" filename="ToggleExample.vue" />

            <h2 id="when-to-use">When to use</h2>
            <p>
                Prefer <code>useToggle</code> for dialogs, sheets, disclosure state, or other
                local active/inactive behavior. Keep request processing, validation, and
                domain state in their own dedicated models instead of representing them as a
                generic toggle.
            </p>

            <h2 id="api-reference">API Reference</h2>

            <FunctionApiReference
                name="useToggle"
                description="Creates a controller with a readonly-by-convention active ref and explicit activation methods."
                :signature="signatures.useToggle"
                :parameters="parameters.useToggle"
                :returns="returns.useToggle"
                :heading-level="3"
            />
            <FunctionApiReference
                name="onActivated"
                description="Watches a Toggle and runs a callback whenever its active ref changes to true."
                :signature="signatures.onActivated"
                :parameters="parameters.callback"
                :returns="returns.callback"
                :heading-level="3"
            />
            <FunctionApiReference
                name="onDeactivated"
                description="Watches a Toggle and runs a callback whenever its active ref changes to false."
                :signature="signatures.onDeactivated"
                :parameters="parameters.callback"
                :returns="returns.callback"
                :heading-level="3"
            />

            <p>
                Activation callbacks are transition watchers: they do not run immediately
                for the controller's initial state.
            </p>

            <TypeApiReference
                name="Toggle"
                description="Exposes reactive active state through explicit activation operations. Use this interface when a composed component receives an existing controller rather than creating its own state."
                :definition="toggleDefinition"
                :properties="toggleProperties"
                :heading-level="3"
            />
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import FunctionApiReference from '@/Docs/Components/FunctionApiReference.vue'
import TypeApiReference from '@/Docs/Components/TypeApiReference.vue'
import ToggleExample from '@/Docs/Examples/Toggle/ToggleExample.vue'
import toggleSource from '@/Docs/Examples/Toggle/ToggleExample.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head } from '@inertiajs/vue3'

const signatures = {
    useToggle: `function useToggle(initiallyActive = false): Toggle`,
    onActivated: `function onActivated(toggle: Toggle, callback: () => void): void`,
    onDeactivated: `function onDeactivated(toggle: Toggle, callback: () => void): void`,
}

const parameters = {
    useToggle: [
        {
            name: 'initiallyActive',
            type: 'boolean',
            description: 'Sets the initial value of the active ref.',
            default: 'false',
        },
    ],
    callback: [
        {
            name: 'toggle',
            type: 'Toggle',
            description: 'Provides the controller to watch.',
            required: true,
        },
        {
            name: 'callback',
            type: '() => void',
            description: 'Runs when the watched controller enters the corresponding state.',
            required: true,
        },
    ],
}

const returns = {
    useToggle: {
        type: 'Toggle',
        description: 'The reactive active ref with activate and deactivate methods.',
    },
    callback: {
        type: 'void',
        description: 'The helper installs a Vue watcher for the supplied controller.',
    },
}

const toggleDefinition = `interface Toggle {
  active: Ref<boolean>
  activate: () => void
  deactivate: () => void
}`

const toggleProperties = [
    { name: 'active', type: 'Ref<boolean>', description: 'Contains the current reactive active state.', required: true },
    { name: 'activate', type: '() => void', description: 'Sets active to true.', required: true },
    { name: 'deactivate', type: '() => void', description: 'Sets active to false.', required: true },
]
</script>
