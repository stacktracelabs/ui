<template>
    <WorkbenchLayout>
        <Head title="Button workbench" />

        <div class="flex max-w-3xl flex-col gap-4">
            <Badge variant="outline" class="w-fit">Inertia integration</Badge>
            <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">Buttons</h1>
            <p class="text-base leading-7 text-muted-foreground">
                Exercise button composition against real Laravel routes. Local requests include a short delay so processing states remain visible.
            </p>
        </div>

        <div class="mt-8 flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Automatic ButtonLink state</CardTitle>
                    <CardDescription>
                        Each link contains a ButtonState without any props. ButtonState responds directly to Inertia's data-loading attribute and displays the spinner automatically.
                    </CardDescription>
                </CardHeader>
                <CardContent class="flex flex-wrap gap-3">
                    <ButtonLink
                        :href="route('workbench.buttons.index', { visit: 'GET', delay: requestDelay })"
                        as="button"
                        variant="outline"
                        preserve-scroll
                    >
                        <ButtonState>GET request</ButtonState>
                    </ButtonLink>

                    <ButtonLink
                        :href="route('workbench.buttons.store')"
                        method="post"
                        as="button"
                        :data="{ delay: requestDelay }"
                        preserve-scroll
                    >
                        <ButtonState>POST request</ButtonState>
                    </ButtonLink>

                    <ButtonLink
                        :href="route('workbench.buttons.update')"
                        method="put"
                        as="button"
                        :data="{ delay: requestDelay }"
                        preserve-scroll
                        variant="secondary"
                    >
                        <ButtonState>PUT request</ButtonState>
                    </ButtonLink>

                    <ButtonLink
                        :href="route('workbench.buttons.destroy')"
                        method="delete"
                        as="button"
                        :data="{ delay: requestDelay }"
                        preserve-scroll
                        variant="destructive"
                    >
                        <ButtonState>DELETE request</ButtonState>
                    </ButtonLink>
                </CardContent>
                <CardFooter class="flex flex-wrap items-center gap-2">
                    <template v-if="lastAction">
                        <Badge variant="secondary">{{ lastAction.method }}</Badge>
                        <p class="text-sm text-muted-foreground">
                            {{ lastAction.message }} Completed at {{ lastAction.completedAt }}.
                        </p>
                    </template>
                    <p v-else class="text-sm text-muted-foreground">
                        Run a request to see the controller response here.
                    </p>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Explicit form state</CardTitle>
                    <CardDescription>
                        A regular Button still accepts composed form state explicitly, including Inertia's recently successful signal.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Button type="button" :disabled="form.processing" @click="submitForm">
                        <ButtonState
                            :processing="form.processing"
                            :recently-successful="form.recentlySuccessful"
                        >
                            Save with useForm

                            <template #success>Saved</template>
                        </ButtonState>
                    </Button>
                </CardContent>
                <CardFooter>
                    <p class="text-sm text-muted-foreground">
                        This submits to the same POST controller while the component manages processing and success through useForm.
                    </p>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Navigation link</CardTitle>
                    <CardDescription>
                        ButtonLink remains an ordinary anchor for GET navigation when no element override is provided.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ButtonLink href="/docs/components/button" variant="outline">
                        Read the Button documentation
                    </ButtonLink>
                </CardContent>
            </Card>
        </div>
    </WorkbenchLayout>
</template>

<script setup lang="ts">
import { Badge } from '@/Components/Base/Badge'
import { Button, ButtonLink, ButtonState } from '@/Components/Base/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/Base/Card'
import WorkbenchLayout from '@/Docs/Layouts/WorkbenchLayout.vue'
import { Head, useForm } from '@inertiajs/vue3'

type ButtonAction = {
    method: string
    message: string
    completedAt: string
}

defineProps<{
    lastAction: ButtonAction | null
}>()

const requestDelay = 900
const form = useForm({
    delay: requestDelay,
})

function submitForm(): void {
    form.post(route('workbench.buttons.store'), {
        preserveScroll: true,
    })
}
</script>
