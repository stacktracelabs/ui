<template>
  <DataTablePagination v-slot="{ pagination, cursorPagination }" as-child>
    <div
      :class="cn(
        'flex w-full items-center border-t py-2',
        pagination ? 'justify-between' : 'justify-end',
        insetLeft || 'pl-4',
        insetRight || 'pr-4',
        props.class,
      )"
    >
      <slot :pagination="pagination" :cursor-pagination="cursorPagination">
        <template v-if="pagination">
          <span class="pr-2 text-sm font-semibold">
            <span class="font-normal text-foreground/60">{{ messages.paginatorTotal }}</span>
            {{ pagination.total }}
          </span>

          <div class="flex flex-row items-center gap-2">
            <DataTablePaginationFirst v-slot="{ href, disabled }" as-child>
              <Button
                :as="href ? Link : 'button'"
                :href="href || undefined"
                :disabled="disabled"
                class="px-2"
                variant="outline"
              >
                <ChevronsLeftIcon />
                <span class="sr-only">{{ messages.paginatorFirst }}</span>
              </Button>
            </DataTablePaginationFirst>

            <DataTablePaginationPrevious v-slot="{ href, disabled }" as-child>
              <Button
                :as="href ? Link : 'button'"
                :href="href || undefined"
                :disabled="disabled"
                class="px-2"
                variant="outline"
              >
                <ChevronLeftIcon />
                <span class="sr-only">{{ messages.paginatorPrevious }}</span>
              </Button>
            </DataTablePaginationPrevious>

            <DataTablePaginationStatus v-slot="{ currentPage, lastPage }" as-child>
              <span class="px-2 text-sm font-semibold">
                {{ currentPage }}
                <span class="font-normal text-foreground/60">{{ messages.paginatorOf }}</span>
                {{ lastPage }}
              </span>
            </DataTablePaginationStatus>

            <DataTablePaginationNext v-slot="{ href, disabled }" as-child>
              <Button
                :as="href ? Link : 'button'"
                :href="href || undefined"
                :disabled="disabled"
                class="px-2"
                variant="outline"
              >
                <ChevronRightIcon />
                <span class="sr-only">{{ messages.paginatorNext }}</span>
              </Button>
            </DataTablePaginationNext>

            <DataTablePaginationLast v-slot="{ href, disabled }" as-child>
              <Button
                :as="href ? Link : 'button'"
                :href="href || undefined"
                :disabled="disabled"
                class="px-2"
                variant="outline"
              >
                <ChevronsRightIcon />
                <span class="sr-only">{{ messages.paginatorLast }}</span>
              </Button>
            </DataTablePaginationLast>
          </div>
        </template>

        <div v-else-if="cursorPagination" class="flex flex-row items-center gap-2">
          <DataTablePaginationPrevious v-slot="{ href, disabled }" as-child>
            <Button
              :as="href ? Link : 'button'"
              :href="href || undefined"
              :disabled="disabled"
              class="inline-flex gap-2 px-2"
              variant="outline"
            >
              <ChevronLeftIcon />
              {{ messages.paginatorPrevious }}
            </Button>
          </DataTablePaginationPrevious>

          <DataTablePaginationNext v-slot="{ href, disabled }" as-child>
            <Button
              :as="href ? Link : 'button'"
              :href="href || undefined"
              :disabled="disabled"
              class="inline-flex gap-2 px-2"
              variant="outline"
            >
              {{ messages.paginatorNext }}
              <ChevronRightIcon />
            </Button>
          </DataTablePaginationNext>
        </div>
      </slot>
    </div>
  </DataTablePagination>
</template>

<script setup lang="ts">
import {
  DataTablePagination,
  DataTablePaginationFirst,
  DataTablePaginationLast,
  DataTablePaginationNext,
  DataTablePaginationPrevious,
  DataTablePaginationStatus,
} from '@stacktrace/ui'
import { Link } from '@inertiajs/vue3'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from '@lucide/vue'
import type { HTMLAttributes } from 'vue'
import { Button } from '@/Components/Button'
import { cn } from '@/Utils'
import messages from './messages'

const props = defineProps<{
  insetLeft?: string
  insetRight?: string
  class?: HTMLAttributes['class']
}>()
</script>
