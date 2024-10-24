<template>
  <TableCell
    :class="cn({
      'text-left': cell.align == 'left',
      'text-center': cell.align == 'center',
      'text-right': cell.align == 'right',
      'align-top': cell.verticalAlign == 'top',
      'align-middle': cell.verticalAlign == 'middle',
      'align-bottom': cell.verticalAlign == 'bottom',
      'font-medium': cell.fontWeight == 'medium',
      'font-bold': cell.fontWeight == 'bold',
      'whitespace-nowrap': cell.noWrap,
      'tabular-nums': cell.tabularNums,
    }, $attrs.class || '')"
    :style="{
      width: cell.width || undefined,
      minWidth: cell.minWidth || undefined,
      maxWidth: cell.maxWidth || undefined,
    }"
  >
    <Primitive v-if="cell.link" :as="cell.link.isExternal ? 'a' : Link" :href="cell.link.url">
      <component :is="cell.component" v-bind="cell.props" />
    </Primitive>
    <component v-else :is="cell.component" v-bind="cell.props" />
  </TableCell>
</template>

<script setup lang="ts">
import { type Cell } from './'
import { cn } from "@/Utils";
import { Link } from "@inertiajs/vue3";
import { Primitive } from "radix-vue";
import { TableCell } from "@/Components/Table";

defineProps<{
  cell: Cell
}>()
</script>
