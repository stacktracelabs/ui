<template>
    <nav aria-label="Documentation" class="space-y-7">
        <section v-for="section in navigation" :key="section.title">
            <h2 class="mb-2 px-2 text-xs font-semibold tracking-wide text-foreground">
                {{ section.title }}
            </h2>
            <ul class="space-y-0.5">
                <li v-for="item in section.items" :key="item.href">
                    <Link
                        :href="item.href"
                        preserve-scroll
                        :class="[
                            'block rounded-md px-2 py-1.5 text-sm transition-colors',
                            isActive(item.href)
                                ? 'bg-accent font-medium text-accent-foreground'
                                : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
                        ]"
                        @click="$emit('navigate')"
                    >
                        {{ item.title }}
                    </Link>
                </li>
            </ul>
        </section>
    </nav>
</template>

<script setup lang="ts">
import type { DocumentationNavigationSection } from '@/Types'
import { Link, usePage } from '@inertiajs/vue3'

defineProps<{
    navigation: DocumentationNavigationSection[]
}>()

defineEmits<{
    navigate: []
}>()

const page = usePage()

function isActive(href: string): boolean {
    return page.url.split('?')[0] === href
}
</script>
