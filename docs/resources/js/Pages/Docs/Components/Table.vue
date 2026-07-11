<template>
  <ComponentReferencePage
    title="Table"
    description="A responsive semantic table with StackTrace selection and sorting helpers."
    registry-name="table"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Use native table structure through the provided header, body, row, head, and cell components. For server-driven application tables, Data Table builds on these primitives and adds filtering, actions, and pagination."
    :features="['Responsive overflow container.', 'Caption, header, body, footer, and empty states.', 'Selectable rows, bulk selection, and sorting helpers.']"
    api="Exports the standard Table composition plus BulkSelect, RowSelect, SelectableTableRow, Sorting, and useSelectableRows."
    source-url="https://shadcn-vue.com/docs/components/table"
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Table/Default.vue'
import exampleSource from '@/Docs/Examples/Table/Default.vue?raw'
</script>
