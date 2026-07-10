<template>
    <div class="min-h-screen bg-background text-foreground">
        <header class="border-b bg-background/90 backdrop-blur-xl">
            <div class="mx-auto flex min-h-16 max-w-7xl flex-wrap items-center gap-3 px-5 py-3 sm:px-8">
                <Link href="/" class="flex items-center gap-2 text-sm font-semibold tracking-tight">
                    <span class="grid size-7 place-items-center rounded-md bg-foreground text-[11px] font-bold text-background">ST</span>
                    <span>stacktrace/ui</span>
                </Link>

                <Badge variant="outline">Local workbench</Badge>

                <nav class="ml-auto flex flex-wrap items-center gap-1" aria-label="Workbench navigation">
                    <Button
                        v-for="item in workbench.navigation"
                        :key="item.href"
                        :as="Link"
                        :href="item.href"
                        :variant="isActive(item.href) ? 'secondary' : 'ghost'"
                        size="sm"
                    >
                        {{ item.title }}
                    </Button>
                    <Button :as="Link" href="/docs" variant="outline" size="sm">
                        Docs
                    </Button>
                </nav>
            </div>
        </header>

        <main class="mx-auto min-h-[calc(100svh-4rem)] max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import { Badge } from '@/Components/Base/Badge'
import { Button } from '@/Components/Base/Button'
import type { AppPageProps } from '@/Types'
import { Link, usePage } from '@inertiajs/vue3'

const page = usePage<AppPageProps>()
const workbench = page.props.workbench

function isActive(href: string): boolean {
    if (href === '/workbench') {
        return page.url === href
    }

    if (href === '/workbench/customers') {
        return page.url === href || /^\/workbench\/customers\/\d+$/.test(page.url)
    }

    return page.url.startsWith(href)
}
</script>
