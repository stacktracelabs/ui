<template>
  <SidebarProvider>
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarNavigation :navigation="navigation" />
      </SidebarContent>

      <SidebarFooter>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>

    <main class="relative flex min-h-svh flex-1 flex-col bg-background peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow">
      <header class="flex flex-row h-16 items-center shrink-0 gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" class="h-4 mr-2" />
          <BreadcrumbNavigation :list="page.props.breadcrumbs" />
        </div>
      </header>

      <slot />
    </main>
  </SidebarProvider>
</template>

<script setup lang="ts">
import {
  SidebarProvider, Sidebar, SidebarContent, SidebarTrigger, SidebarFooter, SidebarRail, SidebarNavigation
} from '@/Components/Sidebar'
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import type { Menu, BreadcrumbNavigationList } from '@stacktrace/ui'
import { useNavigation } from '@stacktrace/ui'
import { type PageProps } from '@/Types'
import { BreadcrumbNavigation } from '@/Components/Breadcrumb'
import { Separator } from '@/Components/Separator'

const page = usePage<PageProps & {
  menu: Menu
  breadcrumbs: BreadcrumbNavigationList
}>()

const navigation = useNavigation(computed(() => page.props.menu))
</script>
