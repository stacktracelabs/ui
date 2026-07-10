<template>
    <article>
        <header class="mb-10 border-b pb-9">
            <p class="mb-3 text-sm font-medium text-muted-foreground">
                Documentation
            </p>
            <h1 class="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                {{ title }}
            </h1>
            <p v-if="description" class="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
                {{ description }}
            </p>
        </header>

        <div class="docs-prose">
            <slot />
        </div>

        <nav v-if="previousItem || nextItem" aria-label="Pagination" class="mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2">
            <Link
                v-if="previousItem"
                :href="previousItem.href"
                class="group rounded-lg border p-4 transition-colors hover:bg-accent/60"
            >
                <span class="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <ArrowLeftIcon class="size-3.5 transition-transform group-hover:-translate-x-0.5" />
                    Previous
                </span>
                <span class="mt-1 block text-sm font-semibold">{{ previousItem.title }}</span>
            </Link>
            <span v-else />

            <Link
                v-if="nextItem"
                :href="nextItem.href"
                class="group rounded-lg border p-4 text-right transition-colors hover:bg-accent/60"
            >
                <span class="flex items-center justify-end gap-1 text-xs font-medium text-muted-foreground">
                    Next
                    <ArrowRightIcon class="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span class="mt-1 block text-sm font-semibold">{{ nextItem.title }}</span>
            </Link>
        </nav>
    </article>
</template>

<script setup lang="ts">
import type { AppPageProps, DocumentationNavigationItem } from '@/Types'
import { Link, usePage } from '@inertiajs/vue3'
import { ArrowLeftIcon, ArrowRightIcon } from '@lucide/vue'
import { computed } from 'vue'

defineProps<{
    title: string
    description?: string
}>()

const page = usePage<AppPageProps>()
const items = computed(() => page.props.documentation.navigation.flatMap(section => section.items))
const currentPath = computed(() => page.url.split('?')[0])
const currentIndex = computed(() => items.value.findIndex(item => item.href === currentPath.value))
const previousItem = computed<DocumentationNavigationItem | undefined>(() => {
    const index = currentIndex.value

    return index > 0 ? items.value[index - 1] : undefined
})
const nextItem = computed<DocumentationNavigationItem | undefined>(() => {
    const index = currentIndex.value

    return index >= 0 && index < items.value.length - 1 ? items.value[index + 1] : undefined
})
</script>
