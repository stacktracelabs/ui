<template>
  <DocsLayout>
    <Head title="Badge" />
    <DocsPage
      title="Badge"
      description="Displays a compact label for status, category, or metadata."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Badge component from the configured StackTrace registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Use a badge for a short value that supplements nearby content, such as
        a status, category, version, or count. Keep the label concise and make
        sure the surrounding text still explains what the value belongs to.
      </p>
      <ComponentPreview title="Badge" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>

      <h2 id="variants">Variants</h2>
      <p>
        Use <code>default</code> when the label needs the most emphasis,
        <code>secondary</code> for ordinary metadata, <code>outline</code> for a
        quiet category, and <code>destructive</code> for a negative status.
        Choose by meaning and emphasis, not by alternating colors for
        decoration.
      </p>
      <div class="grid gap-6 sm:grid-cols-3">
        <ComponentPreview title="Secondary" :source="secondaryExampleSource">
          <SecondaryExample />
        </ComponentPreview>
        <ComponentPreview title="Outline" :source="outlineExampleSource">
          <OutlineExample />
        </ComponentPreview>
        <ComponentPreview title="Destructive" :source="destructiveExampleSource">
          <DestructiveExample />
        </ComponentPreview>
      </div>

      <h3 id="custom-status-colors">Custom status colors</h3>
      <p>
        The supported variants are default, secondary, destructive, and
        outline. A stable product vocabulary may add utility classes for a
        positive or warning status. Use the same color and wording consistently
        across the application, and never rely on color alone.
      </p>
      <div class="grid gap-6 sm:grid-cols-2">
        <ComponentPreview title="Positive" :source="positiveExampleSource">
          <PositiveExample />
        </ComponentPreview>
        <ComponentPreview title="Warning" :source="warningExampleSource">
          <WarningExample />
        </ComponentPreview>
      </div>

      <h2 id="status-versus-action">Status versus action</h2>
      <p>
        A badge is a label by default, not a button. Do not make a passive
        status look clickable or use a badge in place of a primary action. If
        selecting a compact value changes state, use Toggle or Toggle Group;
        if it performs a command, use Button.
      </p>

      <h3 id="links">Links</h3>
      <p>
        Badge forwards Reka Primitive composition props. Use
        <code>as-child</code> when a short category or version should genuinely
        navigate, preserving the child link's semantics. Give the link enough
        context to make its destination clear.
      </p>
      <CodeBlock :code="linkCode" language="vue" />

      <h2 id="accessibility">Accessibility and live status</h2>
      <p>
        Write meaningful text such as “Failed” or “3 unread” instead of relying
        on a colored dot. Badge does not create a live region, so a dynamically
        changed badge is not automatically announced. Add a separate concise
        status message when an update must be announced; avoid placing a
        rapidly changing count in <code>aria-live</code>.
      </p>
      <DocsComponentRecommendation
        title="Use Alert for an explanatory message"
        component-href="/docs/components/alert"
        component-name="Alert"
      >
        When the user needs a title, explanation, or recovery guidance, use an
        Alert rather than stretching a compact badge into a message container.
      </DocsComponentRecommendation>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsComponentRecommendation from '@/Docs/Components/DocsComponentRecommendation.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Badge/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Badge/Default.vue?raw'
import DestructiveExample from '@/Docs/Examples/Badge/Destructive.vue'
import destructiveExampleSource from '@/Docs/Examples/Badge/Destructive.vue?raw'
import OutlineExample from '@/Docs/Examples/Badge/Outline.vue'
import outlineExampleSource from '@/Docs/Examples/Badge/Outline.vue?raw'
import PositiveExample from '@/Docs/Examples/Badge/Positive.vue'
import positiveExampleSource from '@/Docs/Examples/Badge/Positive.vue?raw'
import SecondaryExample from '@/Docs/Examples/Badge/Secondary.vue'
import secondaryExampleSource from '@/Docs/Examples/Badge/Secondary.vue?raw'
import WarningExample from '@/Docs/Examples/Badge/Warning.vue'
import warningExampleSource from '@/Docs/Examples/Badge/Warning.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/badge'
const linkCode = [
  '<template>',
  '  <Badge as-child variant="secondary">',
  '    <Link href="/releases/v2.7.4">Version 2.7.4</Link>',
  '  </Badge>',
  '</template>',
  '',
  '<script setup lang="ts">',
  "import { Link } from '@inertiajs/vue3'",
  "import { Badge } from '@/Components/Base/Badge'",
  '</' + 'script>',
].join('\n')
</script>
