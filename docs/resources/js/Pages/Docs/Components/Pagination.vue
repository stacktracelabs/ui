<template>
  <ComponentReferencePage
    title="Pagination"
    description="Page navigation with numbered items and previous, next, first, and last controls."
    registry-name="pagination"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Provide the total item count and items per page to Pagination, then render the generated page items from PaginationContent's slot. Synchronize the page value with server queries when data is remote."
    :features="['Generated page and ellipsis items.', 'Previous, next, first, and last controls.', 'Controlled and uncontrolled page state.']"
    api="Exports Pagination, PaginationContent, PaginationItem, PaginationEllipsis, PaginationPrevious, PaginationNext, PaginationFirst, and PaginationLast."
    source-url="https://shadcn-vue.com/docs/components/pagination"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Pagination/Default.vue'
import exampleSource from '@/Docs/Examples/Pagination/Default.vue?raw'
</script>
