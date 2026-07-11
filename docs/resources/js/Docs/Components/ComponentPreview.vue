<template>
    <div data-docs-example class="not-prose my-7 overflow-hidden rounded-xl border bg-card text-base leading-normal text-card-foreground shadow-xs">
        <div class="flex min-h-12 items-center justify-between gap-3 border-b px-3">
            <span class="truncate pl-1 text-sm font-medium">
                {{ title || 'Example' }}
            </span>
            <div class="flex items-center rounded-lg bg-muted p-1">
                <Button
                    variant="ghost"
                    size="sm"
                    :class="[
                        'h-7 px-2.5 text-xs',
                        activeTab === 'preview'
                            ? 'bg-background text-foreground shadow-xs hover:bg-background'
                            : 'text-muted-foreground',
                    ]"
                    @click="activeTab = 'preview'"
                >
                    Preview
                </Button>
                <Button
                    variant="ghost"
                    size="sm"
                    :class="[
                        'h-7 px-2.5 text-xs',
                        activeTab === 'code'
                            ? 'bg-background text-foreground shadow-xs hover:bg-background'
                            : 'text-muted-foreground',
                    ]"
                    @click="activeTab = 'code'"
                >
                    Code
                </Button>
            </div>
        </div>

        <div v-if="activeTab === 'preview'" class="flex min-h-52 items-center justify-center overflow-x-auto p-6 sm:p-10">
            <slot />
        </div>

        <CodeBlock v-else :code="displaySource" language="vue" />
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import { computed, ref } from 'vue'

const props = defineProps<{
    source: string
    title?: string
}>()

const activeTab = ref<'preview' | 'code'>('preview')
const displaySource = computed(() => props.source
    .replaceAll('@/Components/Base/', '@/Components/')
    .replaceAll('@/Composables/Base/', '@/Composables/'))
</script>
