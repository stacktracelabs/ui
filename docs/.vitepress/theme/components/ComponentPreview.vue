<template>
  <Tabs default-value="preview">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="preview">
      <div class="bg-background py-16 px-8 border rounded">
        <component v-if="component" :is="component" />
      </div>
    </TabsContent>
    <TabsContent value="code">
      <div class="bg-background border rounded overflow-scroll p-4">
        <div v-if="codeHtml" v-html="codeHtml"></div>
      </div>
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import { onMounted, shallowRef, type Component, ref } from "vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/Tabs'
import { codeToHtml, createCssVariablesTheme } from 'shiki'

const props = defineProps<{
  name: string
}>()

const component = shallowRef<Component>()
const code = ref<string>()
const codeHtml = ref<string>()

onMounted(async () => {
  component.value = await import((`../../previews/${props.name}.vue`)).then(it => it.default)

  code.value = await import((`../../previews/${props.name}.vue?raw`)).then(it => it.default.trim())
  codeHtml.value = await codeToHtml(code.value, {
    lang: 'vue',
    theme: createCssVariablesTheme({
      variablePrefix: '--shiki-',
      variableDefaults: {},
    })
  })
})
</script>
