<template>
  <template v-if="reference">
    <h2 id="api-reference">API Reference</h2>
    <p>
      The components exported by this registry item are listed below. Standard
      Vue and HTML attributes are omitted from the prop tables.
    </p>

    <template v-for="component in reference.components" :key="component.name">
      <h3 :id="`api-${slug(component.name)}`">
        <code>{{ component.name }}</code>
      </h3>
      <p>{{ component.description }}</p>
      <ComponentApiPropsTable v-if="component.props.length" :props="component.props" />
      <p v-else class="text-sm">
        This component does not define additional props.
      </p>
    </template>

    <p v-if="usesRekaDescriptions" class="text-sm">
      Primitive behavior and prop descriptions are adapted from
      <a :href="sourceUrl" target="_blank" rel="noreferrer">Reka UI</a>.
    </p>
  </template>
</template>

<script setup lang="ts">
import type { ComponentApiData } from '@/Docs/Api/types'
import ComponentApiPropsTable from '@/Docs/Components/ComponentApiPropsTable.vue'
import apiDataJson from '@/Docs/Api/component-api.json'
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const apiData = apiDataJson as ComponentApiData
const reference = computed(() => apiData.references[normalize(props.name)])
const usesRekaDescriptions = computed(() => reference.value?.components.some(component => component.source === 'reka-ui'))
const sourceUrl = computed(() => `${apiData.source.repository}/tree/${apiData.source.commit}`)

function normalize(value: string): string {
  return value.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
}

function slug(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^A-Za-z0-9]+/g, '-')
    .toLowerCase()
}
</script>
