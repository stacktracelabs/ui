<template>
    <div class="min-h-screen bg-background text-foreground">
        <header class="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
            <div class="flex h-14 items-center gap-3 px-4 sm:px-6">
                <Button
                    variant="ghost"
                    size="icon-sm"
                    class="lg:hidden"
                    aria-label="Open documentation navigation"
                    @click="mobileNavigationOpen = true"
                >
                    <MenuIcon />
                </Button>

                <Link href="/" class="flex items-center gap-2 text-sm font-semibold tracking-tight">
                    <span class="grid size-7 place-items-center rounded-md bg-foreground text-[11px] font-bold text-background">ST</span>
                    <span>stacktrace/ui</span>
                </Link>

                <nav class="ml-5 hidden items-center gap-5 text-sm md:flex">
                    <Link href="/docs" class="font-medium text-foreground">Docs</Link>
                    <Link v-if="workbench.enabled" href="/workbench" class="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                        Workbench
                        <Badge variant="outline" class="px-1.5 py-0 text-[10px]">Local</Badge>
                    </Link>
                </nav>

                <div class="ml-auto flex items-center gap-1">
                    <Button
                        as="a"
                        :href="documentation.githubUrl"
                        target="_blank"
                        rel="noreferrer"
                        variant="ghost"
                        size="icon-sm"
                        aria-label="StackTrace UI on GitHub"
                    >
                        <CodeXmlIcon />
                    </Button>
                    <ThemeSelector />
                </div>
            </div>
        </header>

        <aside class="fixed inset-y-0 left-0 top-14 z-30 hidden w-72 border-r bg-background lg:block">
            <div scroll-region class="h-full overflow-y-auto px-5 py-7">
                <DocsNavigation :navigation="documentation.navigation" />
            </div>
        </aside>

        <Sheet :open="mobileNavigationOpen" @update:open="mobileNavigationOpen = $event">
            <SheetContent side="left" class="w-[19rem] p-0 sm:max-w-[19rem]">
                <SheetHeader class="border-b px-5 py-4 text-left">
                    <SheetTitle>Documentation</SheetTitle>
                    <SheetDescription>Browse StackTrace UI guides and components.</SheetDescription>
                </SheetHeader>
                <div class="h-[calc(100svh-5rem)] overflow-y-auto px-5 py-6">
                    <DocsNavigation :navigation="documentation.navigation" @navigate="mobileNavigationOpen = false" />
                </div>
            </SheetContent>
        </Sheet>

        <div class="pt-14 lg:pl-72 xl:pr-64">
            <main ref="content" class="mx-auto min-h-[calc(100svh-3.5rem)] max-w-4xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
                <slot />
            </main>
        </div>

        <aside ref="tableOfContents" class="fixed inset-y-0 right-0 top-14 hidden w-64 overflow-y-auto border-l bg-background px-6 py-8 xl:block">
            <p class="mb-4 text-xs font-semibold">On this page</p>
            <nav v-if="headings.length" aria-label="On this page">
                <a
                    v-for="heading in headings"
                    :key="heading.id"
                    :href="`#${heading.id}`"
                    :aria-current="heading.id === activeHeadingId ? 'location' : undefined"
                    :class="[
                        'block border-l py-1.5 text-sm transition-colors',
                        heading.level === 3 ? 'pl-6' : 'pl-3',
                        heading.id === activeHeadingId
                            ? 'border-foreground font-medium text-foreground'
                            : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground',
                    ]"
                    @click="activeHeadingId = heading.id"
                >
                    {{ heading.title }}
                </a>
            </nav>
            <p v-else class="text-sm leading-6 text-muted-foreground">
                This page has no sections.
            </p>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { Badge } from '@/Components/Base/Badge'
import { Button } from '@/Components/Base/Button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/Components/Base/Sheet'
import DocsNavigation from '@/Docs/Components/DocsNavigation.vue'
import ThemeSelector from '@/Docs/Components/ThemeSelector.vue'
import type { AppPageProps } from '@/Types'
import { Link, usePage } from '@inertiajs/vue3'
import { CodeXmlIcon, MenuIcon } from '@lucide/vue'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

type PageHeading = {
    id: string
    title: string
    level: number
}

const page = usePage<AppPageProps>()
const documentation = page.props.documentation
const workbench = page.props.workbench
const mobileNavigationOpen = ref(false)
const content = ref<HTMLElement>()
const tableOfContents = ref<HTMLElement>()
const headings = ref<PageHeading[]>([])
const activeHeadingId = ref('')
let observer: MutationObserver | undefined
let headingElements: HTMLElement[] = []
let scrollFrame: number | undefined

onMounted(() => {
    refreshHeadings()
    window.addEventListener('scroll', queueActiveHeadingUpdate, { passive: true })

    observer = new MutationObserver(refreshHeadings)
    if (content.value) {
        observer.observe(content.value, { childList: true, subtree: true })
    }
})

onBeforeUnmount(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', queueActiveHeadingUpdate)

    if (scrollFrame !== undefined) {
        window.cancelAnimationFrame(scrollFrame)
    }
})

watch(
    () => page.url,
    async () => {
        mobileNavigationOpen.value = false
        await nextTick()
        refreshHeadings()
    },
)

function refreshHeadings(): void {
    headingElements = Array.from(content.value?.querySelectorAll<HTMLElement>('article h2[id], article h3[id]') ?? [])
    headings.value = headingElements.map(heading => ({
        id: heading.id,
        title: heading.textContent?.trim() || heading.id,
        level: Number(heading.tagName.slice(1)),
    }))

    updateActiveHeading()
}

function queueActiveHeadingUpdate(): void {
    if (scrollFrame !== undefined) {
        return
    }

    scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = undefined
        updateActiveHeading()
    })
}

function updateActiveHeading(): void {
    if (!headingElements.length) {
        activeHeadingId.value = ''
        return
    }

    const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2
    let activeHeading = headingElements[0]!

    if (pageBottom) {
        activeHeading = headingElements[headingElements.length - 1]!
    } else {
        for (const heading of headingElements) {
            if (heading.getBoundingClientRect().top > 112) {
                break
            }

            activeHeading = heading
        }
    }

    if (activeHeadingId.value === activeHeading.id) {
        return
    }

    activeHeadingId.value = activeHeading.id
    void nextTick(scrollActiveHeadingIntoView)
}

function scrollActiveHeadingIntoView(): void {
    const activeLink = Array.from(tableOfContents.value?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]') ?? [])
        .find(link => link.hash === `#${activeHeadingId.value}`)

    activeLink?.scrollIntoView({ block: 'nearest' })
}

</script>
