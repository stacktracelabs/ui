<template>
    <div class="min-h-screen bg-background text-foreground">
        <header class="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
            <div class="flex h-14 items-center gap-3 px-4 sm:px-6">
                <Button
                    variant="ghost"
                    size="icon-sm"
                    class="lg:hidden"
                    aria-label="Open workbench navigation"
                    @click="mobileNavigationOpen = true"
                >
                    <MenuIcon />
                </Button>

                <Link href="/" class="flex items-center gap-2 text-sm font-semibold tracking-tight">
                    <span class="grid size-7 place-items-center rounded-md bg-foreground text-[11px] font-bold text-background">ST</span>
                    <span>stacktrace/ui</span>
                </Link>

                <Badge variant="outline">Local workbench</Badge>

                <div class="ml-auto flex items-center gap-1">
                    <ButtonLink href="/docs" variant="ghost" size="sm">
                        Docs
                    </ButtonLink>
                    <ThemeSelector />
                </div>
            </div>
        </header>

        <aside class="fixed inset-y-0 left-0 top-14 z-30 hidden w-72 border-r bg-background lg:block">
            <div class="h-full overflow-y-auto px-5 py-7">
                <WorkbenchNavigation :navigation="workbench.navigation" />
            </div>
        </aside>

        <Sheet :open="mobileNavigationOpen" @update:open="mobileNavigationOpen = $event">
            <SheetContent side="left" class="w-[19rem] p-0 sm:max-w-[19rem]">
                <SheetHeader class="border-b px-5 py-4 text-left">
                    <SheetTitle>Workbench</SheetTitle>
                    <SheetDescription>Browse local component and backend integration demos.</SheetDescription>
                </SheetHeader>
                <div class="h-[calc(100svh-5rem)] overflow-y-auto px-5 py-6">
                    <WorkbenchNavigation
                        :navigation="workbench.navigation"
                        @navigate="mobileNavigationOpen = false"
                    />
                </div>
            </SheetContent>
        </Sheet>

        <div class="pt-14 lg:pl-72">
            <main class="mx-auto min-h-[calc(100svh-3.5rem)] max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Badge } from '@/Components/Base/Badge'
import { Button, ButtonLink } from '@/Components/Base/Button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/Components/Base/Sheet'
import ThemeSelector from '@/Docs/Components/ThemeSelector.vue'
import WorkbenchNavigation from '@/Docs/Components/WorkbenchNavigation.vue'
import type { AppPageProps } from '@/Types'
import { Link, usePage } from '@inertiajs/vue3'
import { MenuIcon } from '@lucide/vue'
import { ref } from 'vue'

const workbench = usePage<AppPageProps>().props.workbench
const mobileNavigationOpen = ref(false)
</script>
