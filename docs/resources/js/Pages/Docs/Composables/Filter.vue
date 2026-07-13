<template>
    <DocsLayout>
        <Head title="useFilter" />
        <DocsPage
            title="useFilter"
            description="Synchronizes typed filter state with the current URL through debounced Inertia visits."
        >
            <h2 id="usage">Usage</h2>
            <p>
                Define every supported filter key and its default value. The composable
                reads matching values from the current query string and returns a reactive
                object that can be bound directly to controls.
            </p>
            <CodeBlock :code="usage" language="vue" filename="CustomersFilter.vue" />

            <h2 id="url-behavior">URL and visit behavior</h2>
            <ul>
                <li>Changes are debounced for 50 milliseconds and cancel an older pending visit.</li>
                <li>Visits preserve component state and scroll position.</li>
                <li>Values equal to their defaults are removed from the query string.</li>
                <li>Empty strings, empty arrays, <code>false</code>, <code>null</code>, and <code>undefined</code> are treated as equivalent empty values.</li>
                <li>Changing filters removes existing <code>page</code> and <code>cursor</code> parameters.</li>
            </ul>

            <h2 id="state-and-resetting">State and resetting</h2>
            <p>
                Read <code>filter.applied</code> to show a reset action. Use
                <code>filter.appliedOnly(keys)</code> when one control represents only part
                of the filter, and call <code>filter.reset()</code> to restore all defaults.
                The <code>data()</code> method returns only declared filter keys, excluding
                helper properties.
            </p>

            <h2 id="api-reference">API Reference</h2>

            <FunctionApiReference
                name="useFilter"
                description="Creates URL-backed reactive filter state from an object or a factory that returns fresh defaults."
                :signature="useFilterSignature"
                :parameters="useFilterParameters"
                :returns="useFilterReturns"
                :heading-level="3"
            />

            <TypeApiReference
                name="FilterData"
                description="The base constraint for an object containing declared filter values."
                definition="type FilterData = object"
                :heading-level="3"
            />
            <TypeApiReference
                name="FilterProps"
                description="Helper state and operations added to the declared filter values."
                :definition="filterPropsDefinition"
                :properties="filterProps"
                :heading-level="3"
            />
            <TypeApiReference
                name="Filter"
                description="The reactive result returned by useFilter: application values intersected with filter helpers."
                definition="type Filter<TFilter extends FilterData> = TFilter & FilterProps<TFilter>"
                :heading-level="3"
            />
            <TypeApiReference
                name="FilterOptions"
                description="Optional callbacks accepted while creating a filter."
                :definition="filterOptionsDefinition"
                :properties="filterOptions"
                :heading-level="3"
            />
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import FunctionApiReference from '@/Docs/Components/FunctionApiReference.vue'
import TypeApiReference from '@/Docs/Components/TypeApiReference.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head } from '@inertiajs/vue3'

const usage = `<template>
  <Input v-model="filter.search" placeholder="Search customers" />
  <CheckboxControl v-model="filter.premium">Premium only</CheckboxControl>
  <Button v-if="filter.applied" variant="ghost" @click="filter.reset()">
    Reset
  </Button>
</template>

<script setup lang="ts">
import { useFilter } from '@stacktrace/ui'

const filter = useFilter({
  search: '',
  premium: false,
}, {
  onSuccess: () => console.info('Results updated'),
})
<\/script>`

const useFilterSignature = `function useFilter<TFilter extends object>(
  state: TFilter | (() => TFilter),
  options?: Partial<FilterOptions>,
): Filter<TFilter>`

const useFilterParameters = [
    {
        name: 'state',
        type: 'TFilter | (() => TFilter)',
        description: 'Declares the supported filter keys and their default values.',
        required: true,
    },
    {
        name: 'options',
        type: 'Partial<FilterOptions>',
        description: 'Provides optional lifecycle behavior for successful Inertia visits.',
    },
]

const useFilterReturns = {
    type: 'Filter<TFilter>',
    description: 'Reactive filter values combined with URL-filter helper properties and methods.',
}

const filterPropsDefinition = `interface FilterProps<TFilter extends FilterData> {
  data(): TFilter
  reset(): void
  applied: boolean
  appliedOnly(keys: Array<keyof TFilter>): boolean
}`

const filterProps = [
    { name: 'data', type: '() => TFilter', description: 'Returns only the filter keys declared by the initial state.' },
    { name: 'reset', type: '() => void', description: 'Restores every filter key to its declared default.' },
    { name: 'applied', type: 'boolean', description: 'Indicates whether any filter value differs from its default.' },
    { name: 'appliedOnly', type: '(keys: Array<keyof TFilter>) => boolean', description: 'Checks whether any selected filter key differs from its default.' },
]

const filterOptionsDefinition = `interface FilterOptions {
  onSuccess: VoidFunction
}`

const filterOptions = [
    { name: 'onSuccess', type: 'VoidFunction', description: 'Runs after a filter-triggered Inertia visit succeeds.' },
]
</script>
