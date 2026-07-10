<template>
    <div class="not-prose overflow-hidden rounded-lg border bg-zinc-50 dark:bg-zinc-950">
        <div v-if="filename" class="flex h-10 items-center border-b px-4 text-xs font-medium text-muted-foreground">
            {{ filename }}
        </div>
        <div class="relative">
            <Button
                variant="ghost"
                size="icon-sm"
                class="absolute right-2 top-2 z-10 bg-background/75 text-muted-foreground backdrop-blur hover:text-foreground"
                :aria-label="copied ? 'Copied' : 'Copy code'"
                @click="copyCode"
            >
                <CheckIcon v-if="copied" />
                <CopyIcon v-else />
            </Button>

            <div v-if="highlightedCode" class="docs-code overflow-x-auto" v-html="highlightedCode" />
            <pre v-else class="overflow-x-auto p-4 text-[13px] leading-6 text-muted-foreground"><code>{{ displayCode }}</code></pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import { highlightCode } from '@/Docs/Support/highlighter'
import { CheckIcon, CopyIcon } from '@lucide/vue'
import { computed, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
    code: string
    language?: string
    filename?: string
}>(), {
    language: 'text',
    filename: undefined,
})

const copied = ref(false)
const highlightedCode = ref('')
const displayCode = computed(() => props.code
    .replaceAll('@/Components/Base/', '@/Components/')
    .replaceAll('@/Composables/Base/', '@/Composables/'))
let highlightVersion = 0
let copyResetTimer: ReturnType<typeof setTimeout> | undefined

watch(
    () => [displayCode.value, props.language] as const,
    async ([code, language]) => {
        const version = ++highlightVersion

        try {
            const html = await highlightCode(code.trim(), language)

            if (version === highlightVersion) {
                highlightedCode.value = html
            }
        } catch {
            highlightedCode.value = ''
        }
    },
    { immediate: true },
)

async function copyCode(): Promise<void> {
    await navigator.clipboard.writeText(displayCode.value.trim())
    copied.value = true

    if (copyResetTimer) {
        clearTimeout(copyResetTimer)
    }

    copyResetTimer = setTimeout(() => {
        copied.value = false
    }, 1600)
}
</script>
