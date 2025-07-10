<template>
  <Tabs default-value="preview" class="pt-4">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="code">Code</TabsTrigger>
    </TabsList>
    <TabsContent value="preview" class="pt-2 vp-raw">
      <div class="bg-background py-16 px-8 border rounded flex items-center justify-center">
        <component v-if="component" :is="component" v-bind="delegatedProps" :class="$attrs.class || undefined" />
      </div>
    </TabsContent>
    <TabsContent value="code" class="">
      <div  v-if="codeHtml" class="language-vue vp-adaptive-theme">
        <button class="copy" title="Copy Code"></button>
        <span class="lang">vue</span>

        <div v-html="codeHtml"></div>
      </div>
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import { onMounted, shallowRef, type Component, ref, computed } from "vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/Tabs'
import { codeToHtml } from 'shiki'

const props = defineProps<{
  name: string
}>()

const delegatedProps = computed(() => {
  const { name: _, ...delegated } = props

  return delegated
})

const component = shallowRef<Component>()
const code = ref<string>()
const codeHtml = ref<string>()

onMounted(async () => {
  component.value = await import((`../../previews/${props.name}.vue`)).then(it => it.default)

  code.value = await import((`../../previews/${props.name}.vue?raw`)).then(it => it.default.trim())
  codeHtml.value = await codeToHtml(code.value, {
    lang: 'vue',
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    transformers: [
      {
        pre(hast) {
            delete hast.properties.style
        },
      }
    ]
  })
})
</script>
