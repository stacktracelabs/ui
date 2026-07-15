import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import ts from 'typescript'
import { createChecker } from 'vue-component-meta'

const docsRoot = resolve('.')
const projectRoot = resolve('..')
const componentsRoot = resolve(projectRoot, 'components')
const pagesRoot = resolve('resources/js/Pages/Docs/Components')
const rekaSourceRoot = resolve('node_modules/reka-ui/src')
const descriptionsPath = resolve('resources/js/Docs/Api/reka-descriptions.json')
const outputPath = resolve('resources/js/Docs/Api/component-api.json')
const check = process.argv.includes('--check')

const rekaSnapshot = JSON.parse(readFileSync(descriptionsPath, 'utf8'))
const rekaDescriptions = rekaSnapshot.descriptions
const rekaSources = new Map(
  walk(rekaSourceRoot)
    .filter(file => file.endsWith('.vue'))
    .map(file => [basename(file, '.vue'), file]),
)
const checker = createChecker(resolve(docsRoot, 'tsconfig.json'), {
  forceUseTs: true,
  schema: true,
})
const componentDescriptions = {
  BreadcrumbLink: 'Renders a breadcrumb destination while preserving breadcrumb semantics.',
  BreadcrumbPage: 'Represents the current, non-interactive page in the breadcrumb trail.',
  BulkSelect: 'Selects or clears all selectable rows in a table.',
  ButtonLink: 'Combines Inertia link behavior with the visual variants and sizes of Button.',
  ButtonState: 'Displays processing and recently successful state inside a composed button.',
  ButtonGroupText: 'Displays non-interactive text within a ButtonGroup.',
  CarouselNext: 'Moves the carousel to the next slide.',
  CarouselPrevious: 'Moves the carousel to the previous slide.',
  ChartLegendContent: 'Renders chart series labels, colors, and icons inside an Unovis legend.',
  ChartTooltipContent: 'Formats the label, indicator, and series values inside an Unovis tooltip.',
  CheckboxControl: 'Combines Checkbox with a generated id and an associated label.',
  CommandShortcut: 'Displays a keyboard shortcut aligned with a command item.',
  ContextMenuShortcut: 'Displays a keyboard shortcut aligned with a context menu item.',
  DataTable: 'Provides the ready default composition for a backend-driven StackTrace data table.',
  DataTableActionButton: 'Renders an injected table action as a directly visible button.',
  DataTableActionDialog: 'Renders confirmation UI for the pending executable table action.',
  DataTableActionDropdownMenuItem: 'Renders an injected table action as a dropdown menu item.',
  DataTableBody: 'Composes injected table rows inside the table body.',
  DataTableBulkActions: 'Renders bulk actions that apply to the current row selection.',
  DataTableCell: 'Renders the injected cell value using its registered backend-selected component.',
  DataTableClearSelectionButton: 'Clears the current table selection when any rows are selected.',
  DataTableEmpty: 'Provides the shared visual treatment for a data table empty state.',
  DataTableEmptyResults: 'Renders the no-results state and a control for clearing the active query.',
  DataTableEmptyTable: 'Renders the empty state when the underlying table contains no records.',
  DataTableFilter: 'Provides one styled filter control with injected table filter state.',
  DataTableFilters: 'Renders registered filter widgets and reset behavior when filters are available.',
  DataTableFooter: 'Renders injected footer summary cells when the table provides them.',
  DataTableHeader: 'Composes selection, sortable headings, and row-action spacing for the table header.',
  DataTableHeading: 'Renders an injected heading with backend sorting behavior when sortable.',
  DataTablePagination: 'Renders offset or cursor pagination controls from injected table state.',
  DataTablePerPage: 'Renders the page-size selector when multiple page-size options are available.',
  DataTableResourceActions: 'Renders the actions available for one backend-driven table resource.',
  DataTableRow: 'Renders an injected table row, its cells, selection control, and actions.',
  DataTableRowActions: 'Renders inline and menu actions for the injected row.',
  DataTableSearch: 'Renders the debounced backend search control when search is configured.',
  DataTableSelectAll: 'Selects or clears every currently available table row.',
  DataTableSelectRow: 'Selects or clears the injected table row.',
  DataTableSelectionStatus: 'Displays the number of currently selected rows.',
  DataTableTable: 'Provides the styled table element when rows are available.',
  DataTableToolbar: 'Composes search, selection state, bulk actions, and page-size controls.',
  DataTableViewSettings: 'Provides table display settings using injected table state.',
  DropdownMenuShortcut: 'Displays a keyboard shortcut aligned with a dropdown menu item.',
  EmptyMedia: 'Provides the icon or image treatment displayed by Empty.',
  FieldError: 'Displays one or more validation errors for a field.',
  FieldLegend: 'Provides a legend for a grouped set of fields.',
  FieldSet: 'Groups related fields using the semantic fieldset element.',
  FilterCheckbox: 'Filters a collection by an independently toggled option.',
  FilterDateRange: 'Filters a collection by an inclusive date range.',
  FilterMultiSelect: 'Filters a collection by one or more selected options.',
  FilterNumberInput: 'Filters a collection by a numeric value.',
  FilterResetButton: 'Clears the currently applied frontend filters.',
  FilterSearchInput: 'Filters a collection from a debounced search query.',
  FormCombobox: 'Provides a baked searchable form control backed by an options array.',
  FormControl: 'Composes a label, help text, validation error, and slotted control from Field primitives.',
  InputGroupAddon: 'Positions an icon, label, or action at an inline or block edge of InputGroup.',
  InputGroupButton: 'Renders a compact Button sized for use inside InputGroup.',
  InputGroupInput: 'Renders an input without its own border inside InputGroup.',
  InputGroupText: 'Renders non-interactive supporting text inside InputGroup.',
  InputGroupTextarea: 'Renders a textarea without its own border inside InputGroup.',
  InputOTPSlot: 'Displays one character position and its active or caret state within InputOTP.',
  ItemActions: 'Contains actions associated with an Item.',
  ItemMedia: 'Displays an icon or image alongside Item content.',
  MarkerIcon: 'Displays the icon associated with a Marker.',
  MenubarShortcut: 'Displays a keyboard shortcut aligned with a menubar item.',
  NativeSelectOptGroup: 'Groups related options in NativeSelect.',
  NativeSelectOption: 'Represents one selectable option in NativeSelect.',
  RowSelect: 'Selects or clears one table row.',
  SelectableTableRow: 'Renders a table row with selected-state styling.',
  SidebarInset: 'Provides the main-content surface beside Sidebar.',
  SidebarMenuBadge: 'Displays compact metadata aligned with a sidebar menu item.',
  SidebarMenuButton: 'Renders the primary interactive control for a sidebar menu item.',
  SidebarMenuSub: 'Contains a nested sidebar menu.',
  SidebarRail: 'Provides a narrow control for resizing or toggling the sidebar.',
  Sorting: 'Renders a table heading control that changes backend sorting.',
  TabsLink: 'Renders an Inertia link using the active-state styling of a tab.',
  TabsLinkList: 'Groups TabsLink destinations and provides their shared visual variant.',
  TabsNavigation: 'Renders an accessible navigation landmark around linked tabs.',
}
const sharedVariantTypes = {
  button: readVariantTypes(join(componentsRoot, 'Button/index.ts')),
  toggle: readVariantTypes(join(componentsRoot, 'Toggle/index.ts')),
}

const references = {}
let componentCount = 0
let propCount = 0
let fallbackDescriptionCount = 0

for (const directory of readdirSync(componentsRoot, { withFileTypes: true }).filter(entry => entry.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
  const indexPath = join(componentsRoot, directory.name, 'index.ts')

  if (!existsSync(indexPath)) {
    continue
  }

  const exports = parseComponentExports(indexPath)
  const variantTypes = readVariantTypes(indexPath)

  if (!exports.length) {
    continue
  }

  const pageDescription = readPageDescription(directory.name)
  const components = exports.map((entry, index) => {
    const sourcePath = entry.package === 'reka-ui'
      ? rekaSources.get(entry.upstreamName)
      : resolve(dirname(indexPath), entry.source)

    const source = sourcePath && existsSync(sourcePath) ? readFileSync(sourcePath, 'utf8') : ''
    const upstreamName = entry.package === 'reka-ui'
      ? entry.upstreamName
      : inferUpstreamName(source)
    const upstreamDescription = upstreamName ? rekaDescriptions[upstreamName] : undefined
    const description = componentDescriptions[entry.name]
      ?? upstreamDescription
      ?? rekaDescriptions[entry.name]
      ?? (index === 0 ? pageDescription : undefined)
      ?? describePart(entry.name, directory.name)

    if (!componentDescriptions[entry.name] && !upstreamDescription && !rekaDescriptions[entry.name] && !(index === 0 && pageDescription)) {
      fallbackDescriptionCount++
    }

    const props = sourcePath && existsSync(sourcePath)
      ? readProps(sourcePath, entry.name, source, variantTypes)
      : []

    componentCount++
    propCount += props.length

    return {
      name: entry.name,
      description,
      props,
      source: !componentDescriptions[entry.name] && (upstreamDescription || rekaDescriptions[entry.name]) ? 'reka-ui' : 'stacktrace-ui',
    }
  })

  references[normalizeName(directory.name)] = {
    name: directory.name,
    components,
  }
}

const payload = {
  source: rekaSnapshot.source,
  references,
}
const output = `${JSON.stringify(payload, null, 2)}\n`

if (check) {
  if (!existsSync(outputPath) || readFileSync(outputPath, 'utf8') !== output) {
    throw new Error('Component API reference is stale. Run npm run api:build in docs/.')
  }

  console.log(`Verified ${componentCount} component API entries and ${propCount} props.`)
} else {
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, output)
  console.log(`Generated ${componentCount} component API entries and ${propCount} props (${fallbackDescriptionCount} local descriptions).`)
}

function parseComponentExports(indexPath) {
  const source = readFileSync(indexPath, 'utf8')
  const entries = []
  const localPattern = /export\s*\{\s*default\s+as\s+([A-Za-z0-9_]+)\s*\}\s*from\s*['"]([^'"]+\.vue)['"]/g
  const packagePattern = /export\s*\{([^}]+)\}\s*from\s*['"]reka-ui['"]/g

  for (const match of source.matchAll(localPattern)) {
    entries.push({
      index: match.index,
      name: match[1],
      source: match[2],
      package: 'local',
    })
  }

  for (const match of source.matchAll(packagePattern)) {
    for (const rawExport of match[1].split(',')) {
      const cleaned = rawExport.trim()

      if (!cleaned || cleaned.startsWith('type ')) {
        continue
      }

      const [upstreamName, alias] = cleaned.split(/\s+as\s+/)
      entries.push({
        index: match.index,
        name: alias ?? upstreamName,
        upstreamName,
        package: 'reka-ui',
      })
    }
  }

  return entries.sort((a, b) => a.index - b.index)
}

function readProps(sourcePath, componentName, source, variantTypes) {
  try {
    return checker.getComponentMeta(sourcePath).props
      .filter(prop => !prop.global)
      .map(prop => {
        const variant = resolveVariant(componentName, prop.name, source, variantTypes)
        const defaultValue = normalizeDefault(prop.default) ?? (variant?.default ? JSON.stringify(variant.default) : undefined)

        return {
          name: prop.name,
          description: cleanDescription(prop.description) || describeProp(prop.name),
          type: cleanType(prop.type, variant),
          required: prop.required,
          ...(defaultValue !== undefined ? { default: defaultValue } : {}),
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))
  } catch (error) {
    console.warn(`Could not inspect ${sourcePath}: ${error.message}`)
    return []
  }
}

function inferUpstreamName(source) {
  const candidates = [...source.matchAll(/\b([A-Z][A-Za-z0-9]+Props)\b/g)]
    .map(match => match[1].replace(/Props$/, ''))

  return candidates.find(name => rekaDescriptions[name])
    ?? candidates.find(name => rekaSources.has(name))
}

function readPageDescription(directoryName) {
  const path = join(pagesRoot, `${directoryName}.vue`)

  if (!existsSync(path)) {
    return undefined
  }

  return readFileSync(path, 'utf8').match(/description="([^"]+)"/)?.[1]
}

function describePart(name, group) {
  const suffixes = {
    ItemIndicator: 'Displays the selected or active state of an item.',
    ItemDelete: 'Removes its item from the current value.',
    ItemText: 'Contains the text value associated with an item.',
    ScrollDownButton: 'Scrolls the available items downward.',
    ScrollUpButton: 'Scrolls the available items upward.',
    PreviousButton: 'Moves to the previous item or page.',
    NextButton: 'Moves to the next item or page.',
    ResourceActions: 'Renders actions associated with the current resource.',
    GroupContent: 'Contains the content rendered inside a group.',
    GroupAction: 'Renders an action associated with a group.',
    GroupLabel: 'Labels a related group of items.',
    SubContent: 'Contains the items shown inside a submenu.',
    SubTrigger: 'Opens the associated submenu.',
    Separator: 'Visually separates related sections or items.',
    Description: 'Provides supporting text for the component.',
    Indicator: 'Displays the current state or position.',
    Trigger: 'Provides the interactive control that opens or changes the component.',
    Content: 'Contains the main content for the component.',
    Provider: 'Provides shared state and configuration to descendant components.',
    Viewport: 'Provides the visible, scrollable viewport for the content.',
    Navigation: 'Renders navigation using the component structure.',
    Skeleton: 'Displays a loading placeholder for the component.',
    Ellipsis: 'Indicates that additional items have been omitted.',
    Fallback: 'Displays fallback content when the primary content is unavailable.',
    Previous: 'Moves to the previous item or page.',
    Increment: 'Increases the current value.',
    Decrement: 'Decreases the current value.',
    Control: 'Renders the interactive control for the component.',
    Heading: 'Displays the current heading.',
    Header: 'Contains introductory content and controls.',
    Footer: 'Contains trailing actions or supporting content.',
    Action: 'Renders an action associated with the component.',
    Cancel: 'Cancels the current action and closes its context when applicable.',
    Close: 'Closes the current component.',
    Overlay: 'Renders the backdrop behind overlaid content.',
    Portal: 'Portals content into a different DOM container.',
    Input: 'Renders the editable input for the component.',
    Label: 'Provides a label for the associated content or control.',
    Title: 'Provides the accessible title for the component.',
    Empty: 'Displays when there are no items or results.',
    Group: 'Groups related items within the component.',
    Item: 'Represents one item within the component.',
    List: 'Contains the component items.',
    Value: 'Displays the current value.',
    Image: 'Displays the component image.',
    Body: 'Contains the primary body content.',
    Root: `Contains all parts of ${humanize(group)}.`,
  }

  for (const [suffix, description] of Object.entries(suffixes)) {
    if (name.endsWith(suffix)) {
      return description
    }
  }

  return `Provides the ${humanize(name)} part of ${humanize(group)}.`
}

function describeProp(name) {
  const descriptions = {
    actions: 'Provides the actions available for the current resource.',
    active: 'Marks the item as currently active.',
    align: 'Controls how the component aligns relative to its anchor.',
    as: 'The element or component to render.',
    asChild: 'Uses the default slot as the rendered element and merges the component behavior onto it.',
    async: 'Runs the Inertia visit asynchronously.',
    cacheFor: 'Controls how long a prefetched response remains cached.',
    cacheTags: 'Associates cache tags with a prefetched response.',
    collapsible: 'Controls the sidebar collapse behavior.',
    color: 'Overrides the color used to render the item.',
    colspan: 'Sets the number of table columns spanned by the cell.',
    column: 'Provides the table column represented by the control.',
    component: 'Selects the element or component rendered by the Inertia link.',
    config: 'Provides the chart series labels, icons, and theme colors.',
    control: 'Provides the state controller used by the component.',
    crossOrigin: 'Configures the cross-origin request mode for the media resource.',
    cursor: 'Shows a pointer cursor over the chart when true.',
    data: 'Provides the data sent with the Inertia request.',
    date: 'Provides the date represented by the component.',
    day: 'Provides the calendar day represented by the component.',
    debounce: 'Sets the delay in milliseconds before applying the changed value.',
    defaultOpen: 'Sets the initial uncontrolled open state.',
    defaultValue: 'Sets the initial uncontrolled value.',
    description: 'Provides supporting text displayed by the component.',
    direction: 'Controls the direction in which the component is laid out.',
    disabled: 'Prevents interaction when true.',
    error: 'Displays the validation error associated with the field.',
    errors: 'Provides one or more validation errors to display.',
    except: 'Excludes selected props from the partial Inertia reload.',
    filter: 'Provides the filter instance controlled by the component.',
    forceMount: 'Keeps the component mounted so animation or external state can control its presence.',
    for: 'Associates the label with the id of its form control.',
    from: 'Sets the first permitted or displayed value in the range.',
    headers: 'Adds custom HTTP headers to the Inertia request.',
    heading: 'Optional text displayed as the group heading.',
    help: 'Displays optional guidance below the field control.',
    hideIcon: 'Hides the series icon when true.',
    hideIndicator: 'Hides the chart tooltip indicator when true.',
    hideLabel: 'Hides the chart tooltip label when true.',
    href: 'Sets the destination URL for the Inertia link.',
    id: 'Sets the element id.',
    indeterminate: 'Displays an indeterminate state instead of checked or unchecked.',
    index: 'Sets the zero-based position represented by the component.',
    indicator: 'Selects the visual style used for the chart tooltip indicator.',
    inset: 'Adds inset spacing so the content aligns with neighboring items.',
    instant: 'Starts prefetching immediately instead of waiting for an interaction.',
    isActive: 'Indicates whether the associated navigation item is active.',
    item: 'Provides the item represented by the component.',
    label: 'Provides the visible label for the component.',
    labelFormatter: 'Formats the label shown by the chart tooltip.',
    labelKey: 'Selects the data key used as the displayed label.',
    layout: 'Controls the layout used to present the component content.',
    list: 'Provides the list state rendered by the component.',
    maxWait: 'Sets the maximum time in milliseconds a debounced update may be delayed.',
    menu: 'Provides the menu item represented by the component.',
    method: 'Selects the HTTP method used by the Inertia request.',
    modelValue: 'The controlled value. Bind with v-model.',
    month: 'Provides the calendar month represented by the component.',
    name: 'The field name submitted with its owning form.',
    nameKey: 'Selects the data key used as the series name.',
    notFoundLabel: 'Sets the message displayed when no option matches the search.',
    nullable: 'Allows the current selection to be cleared when true.',
    only: 'Reloads only the selected props during the Inertia visit.',
    open: 'The controlled open state. Bind with v-model:open.',
    options: 'Provides the options available for selection.',
    opts: 'Configures the underlying Embla carousel instance.',
    orientation: 'Controls whether the component is arranged horizontally or vertically.',
    pageProps: 'Provides additional page props used by the Inertia visit.',
    payload: 'Provides the data rendered by the chart tooltip.',
    placeholder: 'Content displayed when no value has been selected.',
    plugins: 'Provides Embla plugins used by the carousel.',
    prefetch: 'Selects the interaction that triggers Inertia prefetching.',
    preserveScroll: 'Preserves the current scroll position after the Inertia visit.',
    preserveState: 'Preserves local page component state after the Inertia visit.',
    preserveUrl: 'Keeps the current browser URL after the Inertia visit.',
    processing: 'Indicates that the associated action is currently processing.',
    processingLabel: 'Sets the accessible label announced while processing.',
    queryStringArrayFormat: 'Selects how arrays are serialized in the request query string.',
    recentlySuccessful: 'Indicates that the associated action recently completed successfully.',
    recentlySuccessfulLabel: 'Sets the accessible label announced after a successful action.',
    referrerPolicy: 'Sets the referrer policy used when loading the media resource.',
    required: 'Marks the value as required by its owning form.',
    replace: 'Replaces the current browser history entry instead of pushing a new one.',
    searchLabel: 'Sets the accessible label for the option search input.',
    selectable: 'Allows the row or item to be selected when true.',
    showIcon: 'Displays the associated icon when true.',
    showOnHover: 'Shows the control only while its parent item is hovered or focused.',
    side: 'Selects the preferred side of the anchor on which to render.',
    size: 'Selects the component size.',
    spacing: 'Sets the gap between grouped controls.',
    src: 'Sets the media resource URL.',
    title: 'Provides the visible title for the component.',
    to: 'Sets the destination represented by the component.',
    tooltip: 'Provides optional tooltip content for the control.',
    until: 'Sets the last permitted or displayed value in the range.',
    value: 'Sets the value represented by the component.',
    variant: 'Selects the visual and semantic variant.',
    verticalAlign: 'Controls whether the chart legend aligns above or below the chart.',
    viewTransition: 'Uses the browser View Transition API for the Inertia visit.',
    viewport: 'Provides the viewport used by the component.',
    visible: 'Controls whether the component remains visible without available content.',
    withHandle: 'Displays a drag handle on the drawer when true.',
    x: 'Sets the horizontal value represented by the chart tooltip.',
    yearRange: 'Sets the number of years shown by the year selector.',
  }

  if (descriptions[name]) {
    return descriptions[name]
  }

  if (/^on[A-Z]/.test(name)) {
    return `Runs when the ${humanize(name.slice(2))} event occurs.`
  }

  return `Configures ${humanize(name)} for this component.`
}

function cleanDescription(value = '') {
  return value
    .replace(/\[([^\]]+)]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s*Read our Composition guide for more details\.?/gi, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function cleanType(value, variant) {
  const cleaned = value
    .replace(/\s*\|\s*undefined/g, '')
    .replace(/undefined\s*\|\s*/g, '')
    .trim()

  if (cleaned !== 'any') {
    return cleaned
  }

  return variant?.type ?? cleaned
}

function readVariantTypes(indexPath) {
  if (!existsSync(indexPath)) {
    return []
  }

  const source = readFileSync(indexPath, 'utf8')
  const sourceFile = ts.createSourceFile(indexPath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const variants = []

  sourceFile.forEachChild(node => {
    if (!ts.isVariableStatement(node)) {
      return
    }

    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || !declaration.initializer || !ts.isCallExpression(declaration.initializer)) {
        continue
      }

      if (!ts.isIdentifier(declaration.initializer.expression) || declaration.initializer.expression.text !== 'cva') {
        continue
      }

      const options = declaration.initializer.arguments[1]

      if (!options || !ts.isObjectLiteralExpression(options)) {
        continue
      }

      const variantsProperty = options.properties.find(property => ts.isPropertyAssignment(property) && propertyName(property.name) === 'variants')

      if (!variantsProperty || !ts.isPropertyAssignment(variantsProperty) || !ts.isObjectLiteralExpression(variantsProperty.initializer)) {
        continue
      }

      const props = {}
      const defaults = {}

      for (const property of variantsProperty.initializer.properties) {
        if (!ts.isPropertyAssignment(property) || !ts.isObjectLiteralExpression(property.initializer)) {
          continue
        }

        props[propertyName(property.name)] = property.initializer.properties
          .map(option => propertyName(option.name))
          .filter(Boolean)
      }

      const defaultsProperty = options.properties.find(property => ts.isPropertyAssignment(property) && propertyName(property.name) === 'defaultVariants')

      if (defaultsProperty && ts.isPropertyAssignment(defaultsProperty) && ts.isObjectLiteralExpression(defaultsProperty.initializer)) {
        for (const property of defaultsProperty.initializer.properties) {
          if (ts.isPropertyAssignment(property) && (ts.isStringLiteral(property.initializer) || ts.isNumericLiteral(property.initializer))) {
            defaults[propertyName(property.name)] = property.initializer.text
          }
        }
      }

      variants.push({
        name: declaration.name.text.replace(/Variants$/, ''),
        props,
        defaults,
      })
    }
  })

  return variants
}

function resolveVariant(componentName, propName, source, variants) {
  const local = findVariant(componentName, propName, variants)

  if (local) {
    return local
  }

  if (/\bButtonVariants\b/.test(source)) {
    return findVariant('Button', propName, sharedVariantTypes.button)
  }

  if (/\b(?:ToggleVariants|toggleVariants)\b/.test(source)) {
    return findVariant('Toggle', propName, sharedVariantTypes.toggle)
  }
}

function findVariant(componentName, propName, variants) {
  const normalizedComponent = normalizeName(componentName)
  const candidates = variants.filter(variant => variant.props[propName]?.length)
  const exact = candidates.find(variant => normalizeName(variant.name) === normalizedComponent)
  const prefix = candidates
    .filter(variant => normalizedComponent.startsWith(normalizeName(variant.name)))
    .sort((a, b) => b.name.length - a.name.length)[0]
  const selected = exact ?? prefix

  if (selected) {
    return {
      type: selected.props[propName].map(value => JSON.stringify(value)).join(' | '),
      default: selected.defaults[propName],
    }
  }

  const values = [...new Set(candidates.flatMap(variant => variant.props[propName]))]
  const defaults = [...new Set(candidates.map(variant => variant.defaults[propName]).filter(Boolean))]

  if (values.length) {
    return {
      type: values.map(value => JSON.stringify(value)).join(' | '),
      default: defaults.length === 1 ? defaults[0] : undefined,
    }
  }
}

function propertyName(node) {
  if (!node) {
    return ''
  }

  return ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)
    ? node.text
    : ''
}

function normalizeDefault(value) {
  if (value === undefined || value === 'undefined') {
    return undefined
  }

  return value
}

function normalizeName(value) {
  return value.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
}

function humanize(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .toLowerCase()
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? walk(path) : path
  })
}
