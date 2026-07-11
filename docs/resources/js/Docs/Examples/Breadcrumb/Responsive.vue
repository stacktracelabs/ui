<template>
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem v-if="firstItem">
        <BreadcrumbLink :href="firstItem.href">
          {{ firstItem.label }}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />

      <template v-if="items.length > itemsToDisplay">
        <BreadcrumbItem>
          <DropdownMenu
            v-if="isDesktop"
            v-model:open="isOpen"
          >
            <DropdownMenuTrigger
              class="flex items-center gap-1"
              aria-label="Toggle breadcrumb menu"
            >
              <BreadcrumbEllipsis class="size-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLink
                v-for="item in collapsedItems"
                :key="item.label"
                :href="item.href"
              >
                {{ item.label }}
              </DropdownMenuLink>
            </DropdownMenuContent>
          </DropdownMenu>

          <Drawer
            v-else
            v-model:open="isOpen"
          >
            <DrawerTrigger aria-label="Toggle breadcrumb menu">
              <BreadcrumbEllipsis class="size-4" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader class="text-left">
                <DrawerTitle>Navigate to</DrawerTitle>
                <DrawerDescription>
                  Select a page to continue.
                </DrawerDescription>
              </DrawerHeader>
              <div class="grid gap-1 px-4">
                <Link
                  v-for="item in collapsedItems"
                  :key="item.label"
                  :href="item.href"
                  class="py-1 text-sm"
                >
                  {{ item.label }}
                </Link>
              </div>
              <DrawerFooter class="pt-4">
                <DrawerClose as-child>
                  <Button variant="outline">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
      </template>

      <template
        v-for="(item, index) in remainingItems"
        :key="item.label"
      >
        <BreadcrumbItem>
          <BreadcrumbLink
            v-if="item.href"
            :href="item.href"
            class="max-w-28 truncate md:max-w-none"
          >
            {{ item.label }}
          </BreadcrumbLink>
          <BreadcrumbPage
            v-else
            class="max-w-28 truncate md:max-w-none"
          >
            {{ item.label }}
          </BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < remainingItems.length - 1" />
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<script setup lang="ts">
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/Components/Base/Breadcrumb'
import { Button } from '@/Components/Base/Button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/Components/Base/Drawer'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLink,
  DropdownMenuTrigger,
} from '@/Components/Base/DropdownMenu'
import { Link } from '@inertiajs/vue3'
import { useMediaQuery } from '@vueuse/core'
import { computed, ref } from 'vue'

const isDesktop = useMediaQuery('(min-width: 768px)')
const isOpen = ref(false)
const itemsToDisplay = 3

const items = [
  { href: '/docs', label: 'Docs' },
  { href: '/docs/installation', label: 'Installation' },
  { href: '/docs/components/button', label: 'Components' },
  { href: '/docs/components/card', label: 'Card' },
  { href: '', label: 'Breadcrumb' },
]

const firstItem = computed(() => items[0])
const collapsedItems = computed(() => items.slice(1, -2))
const remainingItems = computed(() => items.slice(-itemsToDisplay + 1))
</script>
