<template>
    <DocsLayout>
        <Head title="useNavigation" />
        <DocsPage
            title="useNavigation"
            description="Derives active, child, and badge state for typed application navigation trees."
        >
            <h2 id="usage">Usage</h2>
            <p>
                Define navigation as plain <code>Menu</code> data, then pass the menu or a
                reactive getter to <code>useNavigation</code>. Each returned item contains
                the original configuration plus derived state for rendering.
            </p>
            <CodeBlock :code="usage" language="typescript" filename="navigation.ts" />

            <h2 id="actions">Actions</h2>
            <p>
                A menu item can navigate to a literal URL, a Ziggy route, an Inertia path,
                or run an event callback. A plain string is treated as a URL. Route actions
                require Ziggy's global <code>route()</code> helper.
            </p>

            <h2 id="active-state">Active state</h2>
            <p>
                By default, link-like actions are matched against the current Inertia path
                or browser URL. Set <code>active</code> to one or more explicit activations
                when several destinations belong to one menu item or when active state is
                determined by application logic.
            </p>

            <h2 id="api-reference">API Reference</h2>

            <FunctionApiReference
                name="useNavigation"
                description="Maps a menu tree to reactive navigation items with derived active, child, and badge state."
                :signature="signatures.useNavigation"
                :parameters="parameters.useNavigation"
                :returns="returns.useNavigation"
                :heading-level="3"
            />
            <FunctionApiReference
                name="useActiveLink"
                description="Creates a computed active-state value for one link activation."
                :signature="signatures.useActiveLink"
                :parameters="parameters.useActiveLink"
                :returns="returns.useActiveLink"
                :heading-level="3"
            />
            <FunctionApiReference
                name="isActivated"
                description="Evaluates one activation or an array of alternatives against explicit path and URL inputs."
                :signature="signatures.isActivated"
                :parameters="parameters.isActivated"
                :returns="returns.isActivated"
                :heading-level="3"
            />

            <h3 id="action-type-guards">Action type guards</h3>
            <p>
                The package exports guards for narrowing <code>MenuItemAction</code> before
                reading action-specific properties or executing an event action.
            </p>
            <CodeBlock :code="typeGuards" language="typescript" />
            <ApiReferenceTable :entries="guardEntries" name-label="Function" />

            <TypeApiReference name="LinkAction" description="Navigates to an internal or external URL." :definition="definitions.LinkAction" :properties="actionProperties.LinkAction" :heading-level="3" />
            <TypeApiReference name="RouteAction" description="Builds an internal destination from a named Ziggy route." :definition="definitions.RouteAction" :properties="actionProperties.RouteAction" :heading-level="3" />
            <TypeApiReference name="LinkPathAction" description="Navigates to an explicit Inertia path." :definition="definitions.LinkPathAction" :properties="actionProperties.LinkPathAction" :heading-level="3" />
            <TypeApiReference name="EventAction" description="Runs application behavior instead of navigating." definition="type EventAction<Event = any> = (event?: Event) => void" :heading-level="3" />
            <TypeApiReference name="MenuItemAction" description="The complete set of actions accepted by a menu item. A string is treated as a URL." :definition="definitions.MenuItemAction" :heading-level="3" />
            <TypeApiReference name="MenuItemActivation" description="The link-like matchers and predicates accepted by explicit active state." :definition="definitions.MenuItemActivation" :heading-level="3" />
            <TypeApiReference name="MenuItemIcon" description="Accepts either a Vue component or serialized SVG source." definition="type MenuItemIcon = Component | SVGSource" :heading-level="3" />
            <TypeApiReference name="MenuItem" description="Defines one source item before navigation state is derived." :definition="definitions.MenuItem" :properties="menuItemProperties" :heading-level="3" />
            <TypeApiReference name="NavigationItem" description="Extends a MenuItem with state derived from its action, activation, badge, and descendants." :definition="definitions.NavigationItem" :properties="navigationItemProperties" :heading-level="3">
                <p>
                    All non-children properties from <code>MenuItem</code> remain available on
                    the derived item.
                </p>
            </TypeApiReference>
            <TypeApiReference name="Navigation" description="A derived navigation tree returned by useNavigation." definition="type Navigation = Array<NavigationItem>" :heading-level="3" />
            <TypeApiReference name="Menu" description="A source menu tree accepted by useNavigation." definition="type Menu = Array<MenuItem>" :heading-level="3" />
        </DocsPage>
    </DocsLayout>
</template>

<script setup lang="ts">
import ApiReferenceTable from '@/Docs/Components/ApiReferenceTable.vue'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import FunctionApiReference from '@/Docs/Components/FunctionApiReference.vue'
import TypeApiReference from '@/Docs/Components/TypeApiReference.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'
import { Head } from '@inertiajs/vue3'

const usage = `import { useNavigation } from '@stacktrace/ui'
import type { Menu } from '@stacktrace/ui'
import { UsersIcon } from '@lucide/vue'

const menu: Menu = [
  {
    title: 'Customers',
    icon: UsersIcon,
    action: { route: 'customers.index' },
    active: [
      { route: 'customers.index' },
      { route: 'customers.show' },
    ],
  },
]

const navigation = useNavigation(menu)`

const signatures = {
    useNavigation: `function useNavigation(
  menu: MaybeRefOrGetter<Menu>,
): ComputedRef<Navigation>`,
    useActiveLink: `function useActiveLink(
  link: MaybeRefOrGetter<MenuItemActivation>,
): ComputedRef<boolean>`,
    isActivated: `function isActivated(
  activation: MenuItemActivation | MenuItemActivation[],
  currentPath: string,
  currentUrl: URL | null,
): boolean`,
}

const parameters = {
    useNavigation: [
        {
            name: 'menu',
            type: 'MaybeRefOrGetter<Menu>',
            description: 'Provides a static or reactive menu tree.',
            required: true,
        },
    ],
    useActiveLink: [
        {
            name: 'link',
            type: 'MaybeRefOrGetter<MenuItemActivation>',
            description: 'Provides the activation to evaluate reactively.',
            required: true,
        },
    ],
    isActivated: [
        {
            name: 'activation',
            type: 'MenuItemActivation | MenuItemActivation[]',
            description: 'Provides one activation or alternatives matched with OR semantics.',
            required: true,
        },
        {
            name: 'currentPath',
            type: 'string',
            description: 'Provides the current Inertia page path.',
            required: true,
        },
        {
            name: 'currentUrl',
            type: 'URL | null',
            description: 'Provides the browser URL for internal and external URL comparison.',
            required: true,
        },
    ],
}

const returns = {
    useNavigation: {
        type: 'ComputedRef<Navigation>',
        description: 'A reactive tree of derived NavigationItem objects.',
    },
    useActiveLink: {
        type: 'ComputedRef<boolean>',
        description: 'Whether the activation currently matches.',
    },
    isActivated: {
        type: 'boolean',
        description: 'Whether any supplied activation matches the current location.',
    },
}

const typeGuards = `isRouteAction(action): action is RouteAction
isLinkAction(action): action is LinkAction
isLinkPathAction(action): action is LinkPathAction
isEventAction(action): action is EventAction`

const guardEntries = [
    { name: 'isRouteAction', type: '(action: MenuItemAction) => action is RouteAction', description: 'Checks for an object with a route property.' },
    { name: 'isLinkAction', type: '(action: MenuItemAction) => action is LinkAction', description: 'Checks for an object with a url property.' },
    { name: 'isLinkPathAction', type: '(action: MenuItemAction) => action is LinkPathAction', description: 'Checks for an object with a path property.' },
    { name: 'isEventAction', type: '(action: MenuItemAction) => action is EventAction', description: 'Checks whether the action is a callback function.' },
]

const sharedVisitProperties = [
    { name: 'preserveScroll', type: 'boolean', description: 'Preserves scroll during an internal Inertia visit.' },
    { name: 'preserveState', type: 'boolean', description: 'Preserves local page state during an internal Inertia visit.' },
    { name: 'progress', type: 'boolean', description: 'Carries progress-display intent for consumers that support it.' },
]

const definitions = {
    LinkAction: `type LinkAction = {
  url: string
  external?: boolean
  preserveScroll?: boolean
  preserveState?: boolean
  progress?: boolean
}`,
    RouteAction: `type RouteAction = {
  route: string
  params?: any
  preserveScroll?: boolean
  preserveState?: boolean
  progress?: boolean
}`,
    LinkPathAction: `type LinkPathAction = {
  path: string
  preserveScroll?: boolean
  preserveState?: boolean
  progress?: boolean
}`,
    MenuItemAction: `type MenuItemAction<Event = any> =
  | string
  | RouteAction
  | LinkAction
  | LinkPathAction
  | EventAction<Event>`,
    MenuItemActivation: `type MenuItemActivation =
  | LinkAction
  | RouteAction
  | LinkPathAction
  | (() => boolean)`,
    MenuItem: `interface MenuItem<Event = any> {
  title: string
  action?: MenuItemAction<Event> | null
  badge?: string | null
  active?: MenuItemActivation | MenuItemActivation[]
  icon?: MenuItemIcon | null
  children?: Array<MenuItem>
}`,
    NavigationItem: `interface NavigationItem extends Omit<MenuItem, 'children'> {
  isActive: boolean
  isChildActive: boolean
  hasChildren: boolean
  hasBadge: boolean
  hasChildBadge: boolean
  children?: Array<NavigationItem>
}`,
}

const actionProperties = {
    LinkAction: [
        { name: 'url', type: 'string', description: 'Sets the destination URL.', required: true },
        { name: 'external', type: 'boolean', description: 'Uses a native anchor instead of an Inertia link when true.' },
        ...sharedVisitProperties,
    ],
    RouteAction: [
        { name: 'route', type: 'string', description: 'Sets the Ziggy route name.', required: true },
        { name: 'params', type: 'any', description: 'Provides parameters passed to the Ziggy route helper.' },
        ...sharedVisitProperties,
    ],
    LinkPathAction: [
        { name: 'path', type: 'string', description: 'Sets the internal Inertia path.', required: true },
        ...sharedVisitProperties,
    ],
}

const menuItemProperties = [
    { name: 'title', type: 'string', description: 'Provides the visible item label.', required: true },
    { name: 'action', type: 'MenuItemAction<Event> | null', description: 'Defines navigation or event behavior.' },
    { name: 'badge', type: 'string | null', description: 'Provides optional badge content.' },
    { name: 'active', type: 'MenuItemActivation | MenuItemActivation[]', description: 'Overrides the default action-based active-state matching.' },
    { name: 'icon', type: 'MenuItemIcon | null', description: 'Provides a Vue icon component or serialized SVG source.' },
    { name: 'children', type: 'Array<MenuItem>', description: 'Provides nested source menu items.' },
]

const navigationItemProperties = [
    { name: 'isActive', type: 'boolean', description: 'Indicates whether this item matches the current location.', required: true },
    { name: 'isChildActive', type: 'boolean', description: 'Indicates whether any descendant is active.', required: true },
    { name: 'hasChildren', type: 'boolean', description: 'Indicates whether the source item contains children.', required: true },
    { name: 'hasBadge', type: 'boolean', description: 'Indicates whether this item has non-empty badge content.', required: true },
    { name: 'hasChildBadge', type: 'boolean', description: 'Indicates whether any descendant has non-empty badge content.', required: true },
    { name: 'children', type: 'Array<NavigationItem>', description: 'Contains recursively derived child items.' },
]
</script>
