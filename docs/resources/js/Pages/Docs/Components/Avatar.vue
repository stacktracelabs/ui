<template>
  <DocsLayout>
    <Head title="Avatar" />
    <DocsPage
      title="Avatar"
      description="Displays a person or entity image with a reliable fallback."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Avatar component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Compose <code>AvatarImage</code> and <code>AvatarFallback</code> inside
        <code>Avatar</code>. The fallback appears while the image is unavailable
        or fails to load, preventing an empty or broken image from replacing a
        person's identity.
      </p>
      <ComponentPreview title="Avatar" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="fallbacks">Fallback content</h2>
      <p>
        Use short, recognizable fallback content such as one or two initials.
        Keep its background, dimensions, and shape aligned with the image so
        loading does not shift nearby content. <code>AvatarFallback</code>
        forwards Reka's <code>delay-ms</code> prop when a brief delay would
        prevent the fallback from flashing on fast connections.
      </p>
      <CodeBlock :code="delayedFallbackCode" language="vue" />

      <h2 id="sizing-and-shape">Sizing and shape</h2>
      <p>
        The default avatar is circular and <code>size-8</code>. Apply the same
        size and radius expectations to the root rather than styling the image
        and fallback independently. Use larger avatars only when recognizing
        the person is important; pair small avatars with visible names in
        dense lists.
      </p>

      <h2 id="accessible-names">Images and accessible names</h2>
      <p>
        When the image is the only identification, provide an
        <code>alt</code> value that names the person or entity. When a visible
        name immediately beside it already provides the same information, use
        an empty <code>alt</code> value so the name is not announced twice. Do
        not put words such as “avatar” or “profile picture” in the alternative
        text.
      </p>
      <p>
        Initials are a visual fallback, not a complete accessible identity.
        Keep the visible name in the interface or provide an accessible name
        on the surrounding control when the avatar is used inside a button.
        Never use the avatar alone to communicate presence, permission, or
        another status.
      </p>

      <h2 id="when-to-use">When to use</h2>
      <p>
        Use Avatar for people, teams, or recognizable entities. Use a normal
        decorative image component for product photography and illustrations.
        When an avatar opens a menu, wrap it in a properly labeled interactive
        trigger; the Avatar itself is presentational and does not add button
        behavior.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Avatar/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Avatar/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/avatar'
const delayedFallbackCode = [
  '<Avatar>',
  '  <AvatarImage src="/people/ana.jpg" alt="Ana Novak" />',
  '  <AvatarFallback :delay-ms="200">AN</AvatarFallback>',
  '</Avatar>',
].join('\n')
</script>
