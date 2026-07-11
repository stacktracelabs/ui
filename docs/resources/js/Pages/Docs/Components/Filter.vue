<template>
  <ComponentReferencePage
    title="Filter"
    description="Application-ready filter controls for searches, booleans, ranges, selections, and numeric operators."
    registry-name="filter"
    :example="DefaultExample"
    :source="exampleSource"
    guidance="Bind each control to query-backed state and compose the controls in a wrapping toolbar. Numeric values use operator-prefixed strings such as eq:10 or be:10:20."
    :features="['Debounced search input.', 'Checkbox, multi-select, date-range, and numeric controls.', 'Reset button integration with the StackTrace Filter model.']"
    api="Exports FilterSearchInput, FilterCheckbox, FilterMultiSelect, FilterDateRange, FilterNumberInput, and FilterResetButton."
  />
</template>

<script setup lang="ts">
import ComponentReferencePage from '@/Docs/Components/ComponentReferencePage.vue'
import DefaultExample from '@/Docs/Examples/Filter/Default.vue'
import exampleSource from '@/Docs/Examples/Filter/Default.vue?raw'
</script>
