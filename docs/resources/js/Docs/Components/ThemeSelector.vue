<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button
                variant="ghost"
                size="icon-sm"
                :aria-label="`Theme: ${labels[preference]}. Change theme`"
            >
                <SunIcon v-if="preference === 'light'" />
                <MoonIcon v-else-if="preference === 'dark'" />
                <SunMoonIcon v-else />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-40">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup :model-value="preference" @update:model-value="selectTheme">
                <DropdownMenuRadioItem value="light">
                    <SunIcon />
                    Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">
                    <MoonIcon />
                    Dark
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">
                    <SunMoonIcon />
                    System
                </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
</template>

<script setup lang="ts">
import { Button } from '@/Components/Base/Button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/Base/DropdownMenu'
import { type ThemePreference, useTheme } from '@/Docs/Support/theme'
import { MoonIcon, SunIcon, SunMoonIcon } from '@lucide/vue'

const { preference, setPreference } = useTheme()
const labels: Record<ThemePreference, string> = {
    light: 'Light',
    dark: 'Dark',
    system: 'System',
}

function selectTheme(value: unknown): void {
    if (value === 'light' || value === 'dark' || value === 'system') {
        setPreference(value)
    }
}
</script>
