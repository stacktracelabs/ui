<template>
    <div class="min-h-screen overflow-hidden bg-background text-foreground">
        <Head title="Laravel and Vue component library" />

        <header class="border-b bg-background/90 backdrop-blur-xl">
            <div class="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8">
                <Link href="/" class="flex items-center gap-2 text-sm font-semibold tracking-tight">
                    <span class="grid size-7 place-items-center rounded-md bg-foreground text-[11px] font-bold text-background">ST</span>
                    <span>stacktrace/ui</span>
                </Link>
                <nav class="ml-auto flex items-center gap-2">
                    <Button :as="Link" href="/docs" variant="ghost" size="sm">Docs</Button>
                    <Button v-if="workbench.enabled" :as="Link" href="/workbench" variant="ghost" size="sm">Workbench</Button>
                    <Button
                        as="a"
                        :href="documentation.githubUrl"
                        target="_blank"
                        rel="noreferrer"
                        variant="outline"
                        size="sm"
                    >
                        <CodeXmlIcon />
                        GitHub
                    </Button>
                </nav>
            </div>
        </header>

        <main>
            <section class="relative border-b">
                <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--color-muted),transparent_45%)]" />
                <div class="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center lg:py-32">
                    <div>
                        <Badge variant="outline" class="mb-6">
                            Laravel · Inertia · Vue
                        </Badge>
                        <h1 class="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
                            A component system built for Laravel applications.
                        </h1>
                        <p class="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
                            StackTrace UI extends the shadcn-vue approach with application-ready components, patterns, and backend integrations for teams building with Laravel and Inertia.
                        </p>
                        <div class="mt-9 flex flex-wrap gap-3">
                            <Button :as="Link" href="/docs" size="lg">
                                Get started
                                <ArrowRightIcon />
                            </Button>
                            <Button :as="Link" href="/docs/components/button" variant="outline" size="lg">
                                Browse components
                            </Button>
                        </div>
                    </div>

                    <Card class="overflow-hidden shadow-lg">
                        <CardHeader class="border-b">
                            <div class="flex items-center justify-between gap-4">
                                <div>
                                    <CardTitle class="text-base">Install from the registry</CardTitle>
                                    <CardDescription class="mt-1">Own the code. Adapt every detail.</CardDescription>
                                </div>
                                <span class="size-2 rounded-full bg-emerald-500" />
                            </div>
                        </CardHeader>
                        <CardContent class="p-0">
                            <CodeBlock :code="installCommand" language="shell" />
                        </CardContent>
                        <CardFooter class="border-t py-4 text-xs text-muted-foreground">
                            Components are installed directly into your application.
                        </CardFooter>
                    </Card>
                </div>
            </section>

            <section class="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-3 lg:py-24">
                <div v-for="feature in features" :key="feature.title" class="rounded-xl border bg-card p-6 shadow-xs">
                    <component :is="feature.icon" class="size-5" />
                    <h2 class="mt-5 font-semibold">{{ feature.title }}</h2>
                    <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ feature.description }}</p>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Badge } from '@/Components/Base/Badge'
import { Button } from '@/Components/Base/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/Base/Card'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import type { AppPageProps } from '@/Types'
import { Head, Link, usePage } from '@inertiajs/vue3'
import { ArrowRightIcon, BlocksIcon, CodeXmlIcon, PanelsTopLeftIcon } from '@lucide/vue'

const { documentation, workbench } = usePage<AppPageProps>().props
const installCommand = 'npx shadcn-vue@latest add @stacktrace/button'
const features = [
    {
        title: 'Built on Reka UI',
        description: 'Accessible primitives and shadcn-vue conventions provide a dependable foundation without hiding the implementation.',
        icon: BlocksIcon,
    },
    {
        title: 'Laravel-aware',
        description: 'Components and patterns are designed around Inertia forms, navigation, backend data, and real application workflows.',
        icon: PanelsTopLeftIcon,
    },
    {
        title: 'Source in your project',
        description: 'Install through the registry, then read, customize, and maintain the Vue source as part of your own application.',
        icon: CodeXmlIcon,
    },
]
</script>
