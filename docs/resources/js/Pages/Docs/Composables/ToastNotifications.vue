<template>
    <DocsLayout>
        <Head title="useToastNotifications" />
        <DocsPage
            title="useToastNotifications"
            description="Subscribes to typed backend toast notifications and delivers each generated identifier once."
        >
            <h2 id="usage">Usage</h2>
            <p>
                Call <code>useToastNotifications</code> during component setup and render the
                typed notification with your preferred toast library. StackTrace's Sonner
                component already includes this integration.
            </p>
            <CodeBlock :code="usage" language="typescript" filename="Toaster.vue" />

            <h2 id="notification-contract">Notification contract</h2>
            <p>
                The callback receives <code>ToastNotification</code> directly from
                <code>@stacktrace/ui</code>. Applications do not need to augment Inertia's
                flash types for the built-in <code>toast</code> key.
            </p>
            <CodeBlock :code="notificationContract" language="typescript" />

            <h2 id="deduplication">Deduplication</h2>
            <p>
                The PHP Toast facade generates an identifier for every notification. The
                composable remembers the latest 500 identifiers for the lifetime of the
                loaded application and ignores repeated responses carrying one of them.
            </p>

            <h2 id="api-reference">API Reference</h2>
            <FunctionApiReference
                name="useToastNotifications"
                description="Runs a callback once for each identified backend toast notification."
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

const usage = `import { useToastNotifications } from '@stacktrace/ui'
import { toast } from 'vue-sonner'

useToastNotifications(notification => {
  toast(notification.title, {
    description: notification.content || undefined,
    id: notification.id,
  })
})`

const notificationContract = `type ToastNotification = {
  id: string
  title: string
  content: string | null
  variant: 'default' | 'destructive'
}`

const signature = `function useToastNotifications(
  callback: (notification: ToastNotification) => void,
): void`

const parameters = [
    {
        name: 'callback',
        type: '(notification: ToastNotification) => void',
        description: 'Receives each typed backend notification after identifier deduplication.',
        required: true,
    },
]

const returns = {
    type: 'void',
    description: 'The composable manages the flash subscription through the component lifecycle.',
}
</script>
