<template>
  <Table>
    <TableCaption>A list of recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead class="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="invoice in invoices" :key="invoice.id">
        <TableCell class="font-medium">{{ invoice.id }}</TableCell>
        <TableCell><Badge variant="secondary">{{ invoice.status }}</Badge></TableCell>
        <TableCell class="text-right">{{ invoice.amount }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import { Badge } from '@/Components/Base/Badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/Components/Base/Table'

const invoices = [
  { id: 'INV001', status: 'Paid', amount: '€250.00' },
  { id: 'INV002', status: 'Pending', amount: '€150.00' },
  { id: 'INV003', status: 'Paid', amount: '€350.00' },
]
</script>
