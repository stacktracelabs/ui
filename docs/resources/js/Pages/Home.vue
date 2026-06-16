<template>
    <Head title="Documentation" />

    <main class="min-h-screen bg-background text-foreground">
        <header class="border-b border-border/70">
            <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <a :href="route('home')" class="text-sm font-semibold tracking-normal">
                    StackTrace UI
                </a>
                <span class="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    Documentation
                </span>
            </div>
        </header>

        <section class="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:py-24">
            <div class="max-w-3xl">
                <p class="text-sm font-medium text-muted-foreground">
                    Inertia, Vue, TypeScript, Tailwind, and shadcn-vue are ready.
                </p>
                <h1 class="mt-4 text-4xl font-semibold tracking-normal text-balance sm:text-5xl">
                    StackTrace UI documentation
                </h1>
                <p class="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                    This Laravel app is now wired as the workbench for the next documentation site. The first real docs pages can build from this Inertia shell.
                </p>
            </div>

            <aside class="rounded-lg border border-border bg-card p-5 text-card-foreground">
                <h2 class="text-sm font-semibold">
                    Setup
                </h2>
                <ul class="mt-4 grid gap-3 text-sm text-muted-foreground">
                    <li v-for="item in setupItems" :key="item" class="flex items-center gap-3">
                        <span class="size-1.5 rounded-full bg-primary" />
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </aside>
        </section>
    </main>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { route } from 'ziggy-js'

const setupItems = [
    'Inertia root view',
    'Vue Vite entrypoint',
    'TypeScript project references',
    'Ziggy route helper',
    'shadcn-vue aliases',
]
</script>
