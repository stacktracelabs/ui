<template>
    <nav aria-label="Workbench" class="flex flex-col gap-7">
        <section v-for="section in navigation" :key="section.title">
            <h2 class="mb-2 px-2 text-xs font-semibold tracking-wide text-foreground">
                {{ section.title }}
            </h2>
            <ul class="flex flex-col gap-0.5">
                <li v-for="item in section.items" :key="item.href">
                    <Link
                        :href="item.href"
                        :class="cn(
                            'block rounded-md px-2 py-1.5 text-sm transition-colors',
                            activeHref === item.href
                                ? 'bg-accent font-medium text-accent-foreground'
                                : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground',
                        )"
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
import type { WorkbenchNavigationSection } from '@/Types'
import { cn } from '@/Utils'
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

const props = defineProps<{
    navigation: WorkbenchNavigationSection[]
}>()

defineEmits<{
    navigate: []
}>()

const page = usePage()
const activeHref = computed(() => {
    const currentPath = page.url.split('?')[0] ?? page.url

    return props.navigation
        .flatMap(section => section.items)
        .filter(item => currentPath === item.href || currentPath.startsWith(`${item.href}/`))
        .sort((first, second) => second.href.length - first.href.length)[0]?.href
})
</script>
