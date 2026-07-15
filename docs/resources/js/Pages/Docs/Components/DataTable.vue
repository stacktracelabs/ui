<template>
  <DocsLayout>
    <Head title="Data Table" />

    <DocsPage
      title="Data Table"
      description="A backend-driven table with columns, actions, filters, search, sorting, and pagination."
    >
      <div class="space-y-10">
        <p class="text-muted-foreground">
          Define the table in PHP—its columns, actions, filters, and data source—then render the
          serialized result with the <code>DataTable</code> Vue component.
        </p>

        <section aria-labelledby="installation" class="space-y-4">
          <h2 id="installation" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Installation
          </h2>
          <p class="text-muted-foreground">
            Add the <code>data-table</code> item from the registry by following the
            <Link href="/docs/installation" class="font-medium text-foreground underline underline-offset-4">
              installation guide
            </Link>.
          </p>

          <h3 id="register-datatable-plugin" class="scroll-mt-24 text-xl font-semibold tracking-tight">
            Register DataTablePlugin
          </h3>
          <p class="text-muted-foreground">
            Register <code>DataTablePlugin</code> when creating the Vue application. The plugin
            registers the namespaced column and filter renderers used by serialized tables.
          </p>
          <CodeBlock :code="pluginCode" language="typescript" filename="app.ts" />
        </section>

        <section aria-labelledby="general-usage" class="space-y-6">
          <h2 id="general-usage" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            General usage
          </h2>

          <div class="space-y-4">
            <h3 id="creating-a-table" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Creating a table
            </h3>
            <p class="text-muted-foreground">
              Call <code>Table::make()</code> with one of these data sources:
            </p>
            <ul class="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <code>Illuminate\Support\Collection</code> or
                <code>Illuminate\Database\Eloquent\Collection</code> for an in-memory list.
              </li>
              <li><code>Illuminate\Database\Eloquent\Builder</code> for a paginated query.</li>
              <li><code>Laravel\Scout\Builder</code> for a paginated Scout search.</li>
              <li>A model class name such as <code>User::class</code>, which resolves to <code>User::query()</code>.</li>
              <li>
                <code>null</code> when using a
                <a href="#using-a-separate-table-class" class="font-medium text-foreground underline underline-offset-4">
                  separate table class
                </a>; the table source is then resolved from the container.
              </li>
            </ul>
            <CodeBlock :code="creatingTableCode" language="php" />
          </div>

          <div class="space-y-4">
            <h3 id="passing-to-the-frontend" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Passing the table to the frontend
            </h3>
            <p class="text-muted-foreground">
              A table implements <code>Arrayable</code> and <code>JsonSerializable</code>, so pass
              it directly to Inertia. It is serialized while the page props are prepared.
            </p>
            <CodeBlock :code="passingTableCode" language="php" />
          </div>

          <div class="space-y-4">
            <h3 id="displaying-the-table" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Displaying the table
            </h3>
            <p class="text-muted-foreground">
              Render <code>DataTable</code> and pass the serialized value through its
              <code>table</code> prop.
            </p>
            <CodeBlock :code="displayingTableCode" language="vue" />
            <p class="text-muted-foreground">
              The ready component supports controlled or initial selection through
              <code>v-model:selection</code> and <code>defaultSelection</code>. Its visual props
              include empty-state messages, border treatment, insets, density, and a wrapper class.
            </p>
            <p class="text-muted-foreground">
              Set <code>density</code> to <code>compact</code>, <code>default</code>, or
              <code>comfortable</code>. Use comfortable spacing for short tables and compact
              spacing for data-heavy views. Density changes table spacing without resizing text,
              icons, filters, or pagination.
            </p>
          </div>

          <div class="space-y-4">
            <h3 id="handling-event-actions" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Handling event actions
            </h3>
            <p class="text-muted-foreground">
              All backend Event actions are emitted through one typed <code>event</code> envelope.
              Use <code>bindDataTableEvents()</code> to create typed listener props that map configured
              action names to handlers; each handler receives the selected row keys and the complete
              event payload.
            </p>
            <CodeBlock :code="eventBindingCode" language="vue" />
          </div>

          <div class="space-y-4">
            <h3 id="composing-the-frontend" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Composing the frontend
            </h3>
            <p class="text-muted-foreground">
              <code>DataTable</code> is the default visual recipe. To create another display
              variant, compose its exported visual parts inside the headless
              <code>DataTableRoot</code> and <code>DataTableContent</code> primitives from
              <code>@stacktrace/ui</code>. Every contextual part reads injected state and hides
              itself when its capability is not applicable.
            </p>
            <CodeBlock :code="compositionCode" language="vue" />
          </div>
        </section>

        <section aria-labelledby="table-sources" class="space-y-6">
          <h2 id="table-sources" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Table sources
          </h2>
          <p class="text-muted-foreground">
            Loading, filtering, and pagination behavior depends on the source type.
          </p>

          <div class="space-y-3">
            <h3 id="collection-source" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Collection
            </h3>
            <p class="text-muted-foreground">
              With a collection, all items remain in memory. Search, filters, and sorting run in
              PHP. A <code>searchable()</code> closure and every filter
              <code>using()</code> closure must return the filtered collection.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="eloquent-builder-source" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Eloquent Builder
            </h3>
            <p class="text-muted-foreground">
              With an Eloquent builder, the table applies search, filters, and sorting to the
              query before calling <code>paginate()</code> or <code>cursorPaginate()</code>.
              Offset pagination is the default; call <code>cursorPaginate(true)</code> to use a
              cursor.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="scout-builder-source" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Scout Builder
            </h3>
            <p class="text-muted-foreground">
              Scout follows a similar flow. Use <code>searchable(Closure)</code> to apply the term
              to Scout—for example, <code>$builder-&gt;query($term)</code>. Cursor pagination is
              supported.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="order-of-operations" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Order of operations
            </h3>
            <p class="text-muted-foreground">Builder and Scout sources run in this order:</p>
            <ol class="list-decimal space-y-2 pl-6 text-muted-foreground">
              <li>Calculate the base total count for Eloquent sources.</li>
              <li>Apply search when <code>searchable()</code> is configured and a term is present.</li>
              <li>Apply filter widgets in their configured order.</li>
              <li>Apply a column sort or <code>defaultSorting()</code>.</li>
              <li>Paginate the result.</li>
            </ol>
            <p class="text-muted-foreground">
              Collection sources are already loaded, so the table runs search, filters, and
              sorting in memory. Return the modified collection from the relevant closures.
            </p>
          </div>

          <div class="rounded-lg border bg-muted/30 p-4 text-sm text-muted-foreground">
            When a page contains multiple tables, call <code>withQueryPrefix('prefix_')</code> to
            avoid query-string collisions. Search, sorting, limit, filter, page, and cursor keys
            are independently qualified—for example, <code>prefix_search</code>,
            <code>prefix_page</code>, and <code>prefix_cursor</code>. Updating one table preserves
            the other tables' query parameters.
          </div>
        </section>

        <section aria-labelledby="columns" class="space-y-6">
          <h2 id="columns" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Columns
          </h2>

          <div class="space-y-4">
            <h3 id="adding-columns" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Adding columns
            </h3>
            <p class="text-muted-foreground">
              Add several columns with <code>withColumns()</code>, passing an array or
              <code>ColumnCollection</code>, or add one with <code>column()</code>. Built-in
              column classes live in <code>StackTrace\Ui\Table\Columns</code>.
            </p>
            <CodeBlock :code="columnsCode" language="php" />
          </div>

          <div class="space-y-4">
            <h3 id="column-arguments-and-values" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Column arguments and value retrieval
            </h3>
            <p class="text-muted-foreground">
              Most built-in columns take a title and an optional attribute. The attribute can be
              a string key or a closure. If omitted, it is derived from the title in snake case.
              A closure receives the row and returns the displayed value.
            </p>
            <CodeBlock :code="columnValuesCode" language="php" />
            <div class="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-muted-foreground">
              Do not rely on attribute guessing with a localized title such as
              <code>__('Name')</code>. The guessed key can change with the locale, so pass the
              attribute explicitly.
            </div>
          </div>

          <div class="space-y-4">
            <h3 id="built-in-columns" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Built-in column reference
            </h3>
            <ul class="list-disc space-y-3 pl-6 text-muted-foreground">
              <li>
                <strong class="text-foreground">Text</strong> —
                <code>Columns\Text::make('Title', 'attribute')</code>. Methods include
                <code>displayUsing(Closure)</code>, <code>link(Link|Closure)</code>,
                <code>sortable()</code>, <code>sumarize(Closure)</code>, and fluent style methods
                such as <code>alignRight()</code>, <code>numsTabular()</code>, and
                <code>whitespaceNowrap()</code>.
              </li>
              <li>
                <strong class="text-foreground">Badge</strong> —
                <code>Columns\Badge::make('Title', 'attribute')</code>. Use
                <code>label(array|Closure|string)</code> and
                <code>variant(array|Closure|string)</code> to map labels and variants.
              </li>
              <li>
                <strong class="text-foreground">Date</strong> —
                <code>Columns\Date::make('Title', 'attribute')</code>. The default format is
                <code>d.m.Y</code>; use <code>format(string)</code> and <code>sortable()</code>.
              </li>
              <li>
                <strong class="text-foreground">DateTime</strong> —
                <code>Columns\DateTime::make('Title', 'attribute')</code>. The default format is
                <code>d.m.Y H:i</code>, with the same methods as Date.
              </li>
              <li>
                <strong class="text-foreground">Icon</strong> —
                <code>Columns\Icon::make('Title', 'attribute')</code>. Set its rem size with
                <code>size(float)</code>.
              </li>
              <li>
                <strong class="text-foreground">Image</strong> —
                <code>Columns\Image::make('Title', 'attribute')</code>. Set dimensions with
                <code>size(width, height?)</code> and rounding with
                <code>rounded(Rounding)</code>.
              </li>
              <li>
                <strong class="text-foreground">Link</strong> is deprecated. Prefer a Text
                column with <code>link()</code> for clickable cells.
              </li>
            </ul>
          </div>

          <div class="space-y-3">
            <h3 id="column-styling" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Column styling
            </h3>
            <p class="text-muted-foreground">
              Use <code>style(Style|Closure)</code> and <code>headingStyle(Style|Closure)</code>,
              or the fluent methods forwarded from <code>Table\Style</code>. Alignment accepts
              the <code>Align</code> and <code>VerticalAlign</code> enums through
              <code>algin(Align)</code> and <code>verticalAlign(VerticalAlign)</code>. Set column
              dimensions with <code>width()</code>, <code>minWidth()</code>, and
              <code>maxWidth()</code>; numeric values are treated as rem/4.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="sorting" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Sorting
            </h3>
            <p class="text-muted-foreground">
              Call <code>sortable()</code> to use the column attribute as the sort key. For custom
              logic, call <code>sortable(Closure, Direction::Asc|Desc, 'named')</code>. The closure
              receives the source and direction and must return the modified source; the optional
              name is sent as <code>sort_by</code>.
            </p>
            <p class="text-muted-foreground">
              The first column with a default direction is used when the request has no explicit
              sort. Set it with <code>sortable(null, Direction::Desc)</code>. At table level,
              <code>withoutSorting()</code> disables all column sorting and
              <code>defaultSorting(Closure)</code> runs when no column sort is active.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="footer-summaries" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Footer summaries
            </h3>
            <p class="text-muted-foreground">
              Call <code>sumarize(Closure)</code> on a column. The closure receives
              <code>(Collection $resources, $source)</code> and returns a value rendered with the
              same cell component in the table footer.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="cell-links" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Links on cells
            </h3>
            <p class="text-muted-foreground">
              Use <code>link(StackTrace\Ui\Link|Closure)</code> on a Text column. A closure can
              receive <code>($resource, $value)</code> and return a Link or <code>null</code>.
              <code>Link::to($url, $isExternal, $preserveScroll, $preserveState)</code> creates a
              link, and <code>show(Closure|bool)</code> controls visibility.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="custom-columns" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Custom columns
            </h3>
            <p class="text-muted-foreground">
              Extend <code>StackTrace\Ui\Table\Column</code>, implement
              <code>component()</code> with a registered Vue component name such as
              <code>DataTable::Columns/Text</code>, and implement <code>toView()</code> to return
              its props. Use <code>Concerns\RenderComponents</code> for the same component
              resolution as the built-ins. Assign a stable ID with <code>name('my-column')</code>
              or let the table derive one.
            </p>
          </div>
        </section>

        <section aria-labelledby="actions" class="space-y-6">
          <h2 id="actions" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Actions
          </h2>

          <div class="space-y-3">
            <h3 id="adding-actions" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Adding actions
            </h3>
            <p class="text-muted-foreground">
              Add actions with <code>withActions([...])</code> or
              <code>action($action, $name)</code>. Prefer string keys such as
              <code>'edit' =&gt; Actions\Link::make(...)</code>; otherwise the table uses an
              action's configured name or a UUID. Restrict actions with
              <code>exceptActions()</code> and <code>onlyActions()</code>.
            </p>
          </div>

          <div class="space-y-4">
            <h3 id="action-types" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Action types
            </h3>
            <ul class="list-disc space-y-3 pl-6 text-muted-foreground">
              <li>
                <strong class="text-foreground">Link</strong> —
                <code>StackTrace\Ui\Table\Actions\Link::make('Label', $url|Closure, $external)</code>
                navigates to a URL. Use <code>internal()</code> or <code>external()</code> to set
                the navigation mode.
              </li>
              <li>
                <strong class="text-foreground">Event</strong> —
                <code>StackTrace\Ui\Table\Actions\Event::make('Label', $eventName|Closure)</code>
                emits the root component's typed <code>event</code> envelope. The configured name
                can depend on the resource and is available as <code>event.name</code>.
              </li>
              <li>
                <strong class="text-foreground">Executable</strong> — extend
                <code>StackTrace\Ui\Table\Actions\Action</code>, implement
                <code>handle(Selection $selection)</code>, and optionally implement
                <code>authorize()</code>. Configure labels, confirmation copy, confirmability,
                and destructive styling on the action. The frontend posts the action class,
                selection, and encrypted arguments to <code>route('ui.data-table-action')</code>,
                registered as <code>POST /__ui/data-table/actions</code>.
              </li>
            </ul>
            <p class="text-muted-foreground">
              Every action supports <code>can(Closure|bool)</code>, <code>bulk(bool)</code>,
              <code>inline(bool)</code>, and <code>icon(string)</code>. Inline controls whether an
              action is rendered directly or in an actions menu; confirmability independently
              controls whether an executable action opens the confirmation dialog.
            </p>
          </div>

          <div class="space-y-4">
            <h3 id="single-resource-actions" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Actions for a single resource
            </h3>
            <p class="text-muted-foreground">
              Reuse table actions on a detail page with <code>getActionsForResource()</code>.
              Combine it with <code>exceptActions()</code> or <code>onlyActions()</code> when a
              detail page should expose only part of the table action set.
            </p>
            <CodeBlock :code="resourceActionsCode" language="php" />
          </div>
        </section>

        <section aria-labelledby="filters" class="space-y-6">
          <h2 id="filters" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Filters
          </h2>

          <div class="space-y-3">
            <h3 id="adding-filters" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Adding filters
            </h3>
            <p class="text-muted-foreground">
              Add filters with <code>filter($widget)</code> or <code>withFilters([...])</code>.
              Use <code>withoutFilter()</code> to hide the filter UI and
              <code>exceptFilters()</code> or <code>onlyFilters()</code> to restrict widgets.
            </p>
          </div>

          <div class="space-y-4">
            <h3 id="filter-widget-contract" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Filter widget contract
            </h3>
            <p class="text-muted-foreground">
              Extend <code>StackTrace\Ui\Table\FilterWidget</code> and implement:
            </p>
            <ul class="list-disc space-y-2 pl-6 text-muted-foreground">
              <li><code>value()</code> to read the current request value, qualifying its field when a prefix is used.</li>
              <li><code>defaultValue()</code> to return default query parameters.</li>
              <li><code>component()</code> to identify the Vue renderer.</li>
              <li><code>toView()</code> to return the renderer props.</li>
            </ul>
            <p class="text-muted-foreground">
              Optionally use <code>using(Closure)</code> to apply the value,
              <code>displayWhen()</code> or <code>displayUnless()</code> to control visibility, and
              <code>fallback(Closure)</code> to apply a default behavior when the value is empty.
              A filter closure receives <code>($source, $value)</code>. Return the filtered source
              when working with a Collection.
            </p>
          </div>

          <div class="space-y-4">
            <h3 id="built-in-filters" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Built-in filters
            </h3>
            <ul class="list-disc space-y-3 pl-6 text-muted-foreground">
              <li>
                <strong class="text-foreground">Boolean</strong> —
                <code>Filters\Boolean::make('Title', 'field')</code>. Its request value is a
                boolean.
              </li>
              <li>
                <strong class="text-foreground">DateRange</strong> —
                <code>Filters\DateRange::make('Title', 'field')</code>. It reads
                <code>field_from</code> and <code>field_until</code> into a
                <code>StackTrace\Ui\DateRange</code>; call <code>applyToQuery()</code> in
                <code>using()</code>.
              </li>
              <li>
                <strong class="text-foreground">Enum</strong> —
                <code>Filters\Enum::make('Title', EnumClass::class, 'field')</code>. It returns an
                array of enum cases and accepts optional <code>labels()</code>.
              </li>
              <li>
                <strong class="text-foreground">Model</strong> —
                <code>Filters\Model::make('Title', ModelClass::class, 'field')</code>. Its value is
                a <code>StackTrace\Ui\ModelSelection</code>; use
                <code>applyOnBuilder()</code> in <code>using()</code>. Configure
                <code>options()</code>, <code>label()</code>, <code>allowNull()</code>, and
                <code>limit</code> as needed.
              </li>
              <li>
                <strong class="text-foreground">Number</strong> —
                <code>Filters\Number::make('Title', 'field')</code>. Values use forms such as
                <code>lt:10</code> and <code>be:0:100</code>, represented by
                <code>StackTrace\Ui\NumberValue</code>. Call <code>where()</code> to apply it.
              </li>
              <li>
                <strong class="text-foreground">Select</strong> —
                <code>Filters\Select::make('Title', 'field', $options)</code>. Options may be an
                array or Collection of <code>SelectOption</code> values, or a closure.
              </li>
            </ul>
            <p class="text-muted-foreground">
              A query prefix also applies to every filter request key, allowing multiple tables
              to coexist without collisions.
            </p>
          </div>
        </section>

        <section aria-labelledby="search-pagination-options" class="space-y-6">
          <h2 id="search-pagination-options" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Search, pagination, and other options
          </h2>

          <div class="space-y-3">
            <h3 id="search" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Search
            </h3>
            <p class="text-muted-foreground">
              Configure search with <code>searchable(Closure)</code>. The closure receives the
              source and search term. Add query conditions for Eloquent or Scout, and return a
              filtered collection for an in-memory source. The frontend uses the
              <code>search</code> query parameter. Call <code>withoutSearch()</code> to disable it.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="pagination" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Pagination
            </h3>
            <p class="text-muted-foreground">
              The frontend sends <code>limit</code> for the page size. Configure choices with
              <code>perPageOptions()</code> and the initial value with
              <code>defaultPerPage()</code>. Without an explicit default, the first option is
              used. Call <code>cursorPaginate(true)</code> for cursor pagination on Builder and
              Scout sources.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="row-key-and-highlight" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Row key and highlight
            </h3>
            <p class="text-muted-foreground">
              Rows use an Eloquent model key or collection index by default. Return a custom key
              with <code>keyBy(Closure)</code>. Use <code>highlight(Closure)</code> to return the
              highlight style name for each resource.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="after-load-and-resource-payload" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              After load and resource payload
            </h3>
            <p class="text-muted-foreground">
              <code>afterRetrieved(Closure)</code> receives the loaded paginator or collection.
              Rows omit their raw resource by default. Use <code>mapResource(Closure)</code> to
              send a transformed payload, or <code>withResource(true)</code> to include the raw
              resource.
            </p>
          </div>
        </section>

        <section aria-labelledby="using-a-separate-table-class" class="space-y-6">
          <h2 id="using-a-separate-table-class" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Using the table as a separate class
          </h2>
          <p class="text-muted-foreground">
            Extend <code>StackTrace\Ui\Table</code> to keep a table definition in its own class.
            Implement <code>source()</code> and <code>columns()</code>; optionally implement
            <code>actions()</code> and <code>filters()</code>. Instantiating the class without
            arguments lets its boot process wire these definitions together. Fluent methods such
            as <code>withQueryPrefix()</code>, <code>exceptActions()</code>, and
            <code>onlyFilters()</code> remain available.
          </p>
          <CodeBlock :code="tableClassCode" language="php" filename="app/Table/CustomerTable.php" />
          <p class="text-muted-foreground">Pass the table class to Inertia like any other table:</p>
          <CodeBlock :code="tableControllerCode" language="php" />
          <p class="text-muted-foreground">
            The demo application also contains a full <code>CustomerTable</code> example with a
            source, columns, actions, filters, and search.
          </p>
        </section>

        <section aria-labelledby="frontend-rendering-summary" class="space-y-4">
          <h2 id="frontend-rendering-summary" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Frontend rendering summary
          </h2>
          <ol class="list-decimal space-y-3 pl-6 text-muted-foreground">
            <li>Pass the table as an Inertia page prop.</li>
            <li>
              Render the ready <code>&lt;DataTable :table="customers" /&gt;</code> recipe or compose
              exported visual parts over the headless core.
            </li>
            <li>
              Bind the listener props returned by <code>bindDataTableEvents()</code> when you want
              named handlers for backend Event actions.
            </li>
            <li>
              Executable actions post <code>selection</code>, <code>action</code>, and
              <code>args</code> to the package route. For detail pages, reuse the payload returned
              by <code>getActionsForResource()</code>. A bulk Event action clears its executed
              selection after emission; a bulk Executable action clears it after a successful
              response. Failed and cancelled actions retain selection.
            </li>
          </ol>
        </section>

        <section aria-labelledby="reference" class="space-y-6">
          <h2 id="reference" class="scroll-mt-24 text-2xl font-semibold tracking-tight">
            Reference
          </h2>

          <div class="space-y-3">
            <h3 id="conditionable" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Conditionable
            </h3>
            <p class="text-muted-foreground">
              The table and <code>ColumnCollection</code> use Laravel's
              <code>Conditionable</code> trait. Call <code>when()</code> and
              <code>unless()</code> to add columns, actions, and options conditionally.
            </p>
          </div>

          <div class="space-y-3">
            <h3 id="executable-action-request-flow" class="scroll-mt-24 text-xl font-semibold tracking-tight">
              Executable action request flow
            </h3>
            <p class="text-muted-foreground">
              The action endpoint validates an array of row keys in <code>selection</code>, the
              action class in <code>action</code>, and the encrypted <code>args</code> payload. It
              decrypts the arguments, instantiates the action, calls <code>authorize()</code> when
              present, then calls <code>handle(Selection)</code>. The handler may return
              <code>back()</code> or a custom response.
            </p>
          </div>
        </section>
      </div>
    </DocsPage>
  </DocsLayout>
</template>

<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
import CodeBlock from '@/Docs/Components/CodeBlock.vue'
import DocsPage from '@/Docs/Components/DocsPage.vue'
import DocsLayout from '@/Docs/Layouts/DocsLayout.vue'

const pluginCode = `import { createInertiaApp } from '@inertiajs/vue3'
import { createApp, h } from 'vue'
import { DataTablePlugin } from '@/Components/DataTable'

createInertiaApp({
  // ...
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(DataTablePlugin)
      .mount(el)
  },
})`

const creatingTableCode = `use StackTrace\\Ui\\Table;

// Collection
$table = Table::make(collect([
    ['id' => 1, 'name' => 'Peter'],
    ['id' => 2, 'name' => 'Adriana'],
]));

// Eloquent builder
$table = Table::make(User::query());

// Model class (resolves to User::query())
$table = Table::make(User::class);`

const passingTableCode = `use Inertia\\Inertia;
use StackTrace\\Ui\\Table;

return Inertia::render('CustomerList', [
    'customers' => $table,
]);`

const displayingTableCode = `<template>
  <DataTable :table="customers" density="comfortable" />
</template>

<script setup lang="ts">
import { DataTable, type DataTableValue } from '@/Components/DataTable'

defineProps<{
  customers: DataTableValue
}>()
<\/script>`

const eventBindingCode = `<template>
  <DataTable :table="customers" v-bind="tableEvents" />
</template>

<script setup lang="ts">
import {
  bindDataTableEvents,
  DataTable,
  type DataTableValue,
} from '@/Components/DataTable'

defineProps<{
  customers: DataTableValue<object, number, 'updatePlan'>
}>()

const tableEvents = bindDataTableEvents<number, 'updatePlan'>({
  updatePlan: selection => openUpdatePlanDialog(selection),
})
<\/script>`

const compositionCode = `<template>
  <DataTableRoot :table="customers" as-child>
    <div>
      <DataTableEmptyTable />

      <DataTableContent as-child>
        <div>
          <DataTableToolbar />
          <DataTableFilters />

          <DataTableTable density="comfortable">
            <DataTableHeader />
            <DataTableBody />
            <DataTableFooter />
          </DataTableTable>

          <DataTablePagination />
          <DataTableEmptyResults />
          <DataTableActionDialog />
        </div>
      </DataTableContent>
    </div>
  </DataTableRoot>
</template>

<script setup lang="ts">
import {
  DataTableContent,
  DataTableRoot,
  type DataTableValue,
} from '@stacktrace/ui'
import {
  DataTableActionDialog,
  DataTableBody,
  DataTableEmptyResults,
  DataTableEmptyTable,
  DataTableFilters,
  DataTableFooter,
  DataTableHeader,
  DataTablePagination,
  DataTableTable,
  DataTableToolbar,
} from '@/Components/DataTable'

defineProps<{ customers: DataTableValue }>()
<\/script>`

const columnsCode = `use StackTrace\\Ui\\Table;
use StackTrace\\Ui\\Table\\Columns;

$table = Table::make($source)
    ->withColumns([
        Columns\\Text::make('Name', 'name'),
        Columns\\Date::make('Created', 'created_at')->sortable(),
    ]);`

const columnValuesCode = `Columns\\Text::make('Name', 'name'),

Columns\\Text::make('Name', function (User $user) {
    return Str::upper($user->name);
}),`

const resourceActionsCode = `$actions = (new CustomerTable())
    ->exceptActions('Sync')
    ->getActionsForResource($customer);

return Inertia::render('Customers/Show', [
    'customer' => $customer,
    'actions' => $actions,
]);`

const tableClassCode = `<?php

namespace App\\Table;

use App\\Models\\Customer;
use Illuminate\\Database\\Eloquent\\Builder;
use StackTrace\\Ui\\Table;
use StackTrace\\Ui\\Table\\ColumnCollection;
use StackTrace\\Ui\\Table\\Columns;

class CustomerTable extends Table
{
    public function __construct()
    {
        $this->searchable(function (Builder $builder, string $term) {
            $builder->where('name', 'like', "%{$term}%");
        });
    }

    public function source(): Builder
    {
        return Customer::query();
    }

    public function columns(): ColumnCollection
    {
        return ColumnCollection::of([
            Columns\\Text::make('Name', 'name'),
            Columns\\Text::make('Email', 'email'),
        ]);
    }
}`

const tableControllerCode = `$table = new CustomerTable();

return Inertia::render('Customers/Index', [
    'customers' => $table,
]);`
</script>
