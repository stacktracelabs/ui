<template>
  <Table>
    <TableCaption>Projects visible to your team.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Owner</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableEmpty :colspan="3">
        No projects match the current filters.
      </TableEmpty>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableEmpty,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/Base/Table'
</script>
