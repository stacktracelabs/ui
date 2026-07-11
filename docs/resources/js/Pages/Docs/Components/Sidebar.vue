<template>
  <DocsLayout>
    <Head title="Sidebar" />
    <DocsPage
      title="Sidebar"
      description="Builds responsive application navigation from composable layout and menu primitives."
    >
      <h2 id="installation">Installation</h2>
      <p>Add the Sidebar component and its supporting primitives from the registry.</p>
      <CodeBlock :code="installationCode" language="shell" />

      <h2 id="usage">Usage</h2>
      <p>
        Wrap the sidebar and main content in <code>SidebarProvider</code>. Compose
        header, scrollable content, and footer inside <code>Sidebar</code>, then
        use <code>SidebarInset</code> for the adjacent page surface. Use Sidebar
        for persistent application navigation or tools. Prefer Navigation Menu
        for a compact site header and a Sheet for temporary, unrelated content.
      </p>
      <ComponentPreview title="Sidebar menu" :source="defaultExampleSource">
        <DefaultExample />
      </ComponentPreview>
      <CodeBlock :code="structureCode" language="vue" />

      <h2 id="layout-variants">Side, surface, and collapse behavior</h2>
      <p>
        Set <code>side</code> to <code>left</code> or <code>right</code>. The
        <code>sidebar</code> variant sits against the viewport edge,
        <code>floating</code> adds an inset bordered surface, and
        <code>inset</code> visually pairs with <code>SidebarInset</code>.
      </p>
      <p>
        Choose <code>collapsible="offcanvas"</code> when the whole sidebar may
        leave the desktop viewport, <code>icon</code> when primary destinations
        remain recognizable in a compact rail, and <code>none</code> when it must
        stay visible. Icon collapse is appropriate only when every item has a
        clear icon and a tooltip or other accessible label.
      </p>
      <CodeBlock :code="variantCode" language="vue" />

      <h2 id="menus-and-groups">Menus, groups, and actions</h2>
      <p>
        Put related destinations in <code>SidebarGroup</code>, describe the group
        with <code>SidebarGroupLabel</code>, and render rows through
        <code>SidebarMenu</code> and <code>SidebarMenuItem</code>. Mark the current
        destination with <code>is-active</code>; do not use active styling for
        hover, focus, or an expanded submenu.
      </p>
      <p>
        <code>SidebarMenuButton</code> defaults to a button. Compose an Inertia
        <code>Link</code> with <code>as-child</code> for navigation. Use
        <code>SidebarMenuAction</code> for a secondary action associated with the
        row, and give icon-only actions an accessible name. Badges should convey
        compact status or counts, not duplicate the item label.
      </p>
      <CodeBlock :code="linkCode" language="vue" />
      <p>
        Use submenus for a shallow destination hierarchy. Compose Collapsible
        around a group or menu item when users benefit from hiding its children;
        keep frequently used destinations directly reachable.
      </p>

      <h2 id="state">Open state and responsive behavior</h2>
      <p>
        <code>SidebarProvider</code> owns separate desktop and mobile state. It
        uses a Sheet on mobile, persists desktop open state in the sidebar cookie,
        and supports Command+B or Control+B. Include <code>SidebarTrigger</code>
        wherever users must be able to reopen it; <code>SidebarRail</code> is an
        additional pointer target, not a replacement for the trigger.
      </p>
      <p>
        Use <code>default-open</code> for initial uncontrolled state or
        <code>v-model:open</code> when the surrounding layout must coordinate the
        desktop state. Call <code>useSidebar()</code> only inside the provider to
        access <code>state</code>, mobile state, and <code>toggleSidebar</code>.
      </p>
      <CodeBlock :code="controlledCode" language="vue" />

      <h2 id="loading">Loading and empty groups</h2>
      <p>
        Use <code>SidebarMenuSkeleton</code> only while an existing menu structure
        is loading, and keep the number of placeholders close to the expected
        result. Remove empty groups rather than rendering an unexplained label.
        Do not keep navigation in a permanent loading state; provide a visible
        failure and recovery path.
      </p>

      <h2 id="accessibility">Accessibility and composition</h2>
      <p>
        Navigation rows must keep link semantics, while row actions must remain
        buttons. Visible labels should remain available to assistive technology
        when icon collapse hides them. Preserve focus when collapsing; if the
        focused item becomes unavailable, move focus to the trigger deliberately.
      </p>
      <p>
        Components such as menu buttons, group labels, and actions support
        <code>as</code> or <code>as-child</code>. Custom children must forward
        attributes, events, and refs as described in the
        <Link href="/docs/fundamentals/composition">composition fundamentals</Link>.
      </p>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import ComponentPreview from '@/Docs/Components/ComponentPreview.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DefaultExample from '@/Docs/Examples/Sidebar/Default.vue'
import defaultExampleSource from '@/Docs/Examples/Sidebar/Default.vue?raw'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const installationCode = 'npx shadcn-vue@latest add @stacktrace/sidebar'
const structureCode = [
  '<SidebarProvider>',
  '  <Sidebar collapsible="icon">',
  '    <SidebarHeader>...</SidebarHeader>',
  '    <SidebarContent>...</SidebarContent>',
  '    <SidebarFooter>...</SidebarFooter>',
  '    <SidebarRail />',
  '  </Sidebar>',
  '  <SidebarInset>',
  '    <SidebarTrigger />',
  '    <main>...</main>',
  '  </SidebarInset>',
  '</SidebarProvider>',
].join('\n')
const variantCode = '<Sidebar side="left" variant="inset" collapsible="icon">...</Sidebar>'
const linkCode = [
  '<SidebarMenuButton as-child :is-active="isActive">',
  '  <Link href="/projects">',
  '    <FolderIcon />',
  '    <span>Projects</span>',
  '  </Link>',
  '</SidebarMenuButton>',
].join('\n')
const controlledCode = [
  '<SidebarProvider v-model:open="sidebarOpen">',
  '  <Sidebar />',
  '  <SidebarInset>...</SidebarInset>',
  '</SidebarProvider>',
].join('\n')
</script>
