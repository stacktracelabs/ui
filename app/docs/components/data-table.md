# Data Table

The Data Table is a backend-driven table component. You define the table in PHP (columns, actions, filters, and data source), and the frontend renders it with the `DataTable` Vue component. The table supports columns, row and bulk actions, filters, search, sorting, and pagination.

<ComponentSource
  source="components/data-table"
/>

## Installation

Run the following command to add the Data Table component to your application:

```shell
php artisan ui:add data-table
```

### Register `DataTablePlugin`

After installation, register `DataTablePlugin` within your Vue application:

```typescript
import { createInertiaApp } from '@inertiajs/vue3';
import { DataTablePlugin } from "@/Components/DataTable";

createInertiaApp({
  // ...
  setup({el, App, props, plugin}) {
    createApp({render: () => h(App, props)})
      .use(plugin)
      .use(DataTablePlugin)
      .mount(el);
  },
});
```

## General usage

### Creating a table

Create a table by calling `Table::make()` with a data source. The source can be:

- **`Illuminate\Support\Collection`** or **`Illuminate\Database\Eloquent\Collection`** — in-memory list of items
- **`Illuminate\Database\Eloquent\Builder`** — Eloquent query (paginated)
- **`Laravel\Scout\Builder`** — Scout search query (paginated)
- **Model class name** — e.g. `User::class`; the table will use `User::query()` as the source
- **`null`** — when using a [table class](#using-the-table-as-a-separate-class), the table is resolved from the container

```php
use StackTrace\Ui\Table;

// Collection
$table = Table::make(collect([
    ['id' => 1, 'name' => 'Peter'],
    ['id' => 2, 'name' => 'Adriana'],
]));

// Eloquent builder
$table = Table::make(User::query());

// Model class (resolves to User::query())
$table = Table::make(User::class);
```

### Passing to the frontend

The table implements `Arrayable` and `JsonSerializable`, so you can pass the instance directly to Inertia (or any view). The table is serialized when the page props are prepared.

```php
use StackTrace\Ui\Table;
use Inertia\Inertia;

return Inertia::render('CustomerList', [
    'customers' => $table,
]);
```

### Displaying the table

In your Vue page component, render the table with the `DataTable` component and pass the table prop:

```vue
<template>
  <DataTable :table="customers" />
</template>

<script setup lang="ts">
import { type DataTableValue, DataTable } from '@/Components/DataTable'

defineProps<{
  customers: DataTableValue
}>()
</script>
```

You can optionally pass `emptyTableMessage`, `emptyResultsMessage`, `emptyTableDescription`, `emptyResultsDescription`, `borderless`, `insetLeft`, and `insetRight`. The component also provides slots: `search`, `actions`, `empty-table`, and `empty-results` for custom content.

## Table sources

How the table loads and filters data depends on the source type.

### Collection

When the source is a **Collection**, all items are held in memory. Search, filter, and sort run in PHP. Your `searchable()` closure must return a filtered collection. Filter widgets' `using()` closures receive the collection and must return the filtered collection. Sorting is applied in memory.

### Eloquent Builder

When the source is an **Eloquent Builder**, the table applies search, filter, and sort to the query, then calls `paginate()` or `cursorPaginate()`. The default is offset-based pagination. Use `cursorPaginate(true)` for cursor-based pagination.

### Scout Builder

When the source is a **Scout Builder**, the flow is similar. Use `searchable(Closure)` to apply the search term to Scout (e.g. `$builder->query($term)`). Cursor pagination is supported.

### Order of operations

For **Builder** and **Scout** sources:

1. Base total count (Eloquent only)
2. Search (if `searchable()` is set and `search` param is present)
3. Filters (each widget's `using()` applied in order)
4. Sort (column sort or `defaultSorting()`)
5. Paginate

For **Collection** sources: items are already loaded; then search, then filter, then sort. Your closures must return the modified collection where required.

::: tip
When you have **multiple tables on one page** (or need to avoid query param clashes), use `withQueryPrefix('prefix_')` on the table. All request params used by the table (e.g. `search`, `sort_by`, `sort_direction`, `limit`, and filter fields) are then namespaced (e.g. `prefix_search`, `prefix_sort_by`).
:::

## Columns

### Adding columns

Add columns with `withColumns()` (array or `ColumnCollection`) or `column()` for a single column. Built-in column classes are in `StackTrace\Ui\Table\Columns`: `Text`, `Badge`, `Date`, `DateTime`, `Icon`, `Image`, and (deprecated) `Link`. Prefer `Text` with `link()` over the deprecated `Link` column.

```php
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;

$table = Table::make($source)
    ->withColumns([
        Columns\Text::make('Name', 'name'),
        Columns\Date::make('Created', 'created_at')->sortable(),
    ]);
```

### Column arguments and value retriever

Most built-in columns take:

1. **Title** — header label (e.g. `'Name'` or `__('Name')`)
2. **Attribute** — how to get the value: a string key (attribute name) or a closure. If omitted, the attribute is derived from the title (snake_case).

By specifying an attribute name, the column resolves the value from the row (array key or Eloquent attribute). With a closure, you receive the row (array or model) and return the value:

```php
Columns\Text::make('Name', 'name'),

Columns\Text::make('Name', function (User $user) {
    return Str::upper($user->name);
}),
```

::: warning
Do not rely on attribute guessing when using a localized title (e.g. `__('Name')`). The guessed attribute may change with the active locale. Always pass the attribute explicitly.
:::

### Built-in column reference

- **Text** — `Columns\Text::make('Title', 'attribute')`. Methods: `displayUsing(Closure)`, `link(Link|Closure)`, `sortable()`, `sumarize(Closure)`, plus style methods (e.g. `alignRight()`, `numsTabular()`, `whitespaceNowrap()`).
- **Badge** — `Columns\Badge::make('Title', 'attribute')`. Methods: `label(array|Closure|string)`, `variant(array|Closure|string)` (e.g. `'default'`, `'positive'`).
- **Date** — `Columns\Date::make('Title', 'attribute')`. Default format `d.m.Y`. Methods: `format(string)`, `sortable()`.
- **DateTime** — `Columns\DateTime::make('Title', 'attribute')`. Default format `d.m.Y H:i`. Same methods as Date.
- **Icon** — `Columns\Icon::make('Title', attribute)`. Methods: `size(float)` (rem).
- **Image** — `Columns\Image::make('Title', attribute)`. Methods: `size(width, height?)`, `rounded(Rounding)` (e.g. `Rounding::Rounded`).

::: tip
Prefer a **Text** column with `link(Link::to($url))` or a closure for clickable cells instead of the deprecated **Link** column.
:::

### Column styling

Use `style(Style|Closure)` and `headingStyle(Style|Closure)` on the column, or use the fluent style methods forwarded from `Table\Style`: e.g. `alignRight()`, `bold()`, `numsTabular()`, `whitespaceNowrap()`. For alignment you can use `Align` and `VerticalAlign` enums with `algin(Align)` and `verticalAlign(VerticalAlign)`. Set dimensions with `width()`, `minWidth()`, `maxWidth()` (numeric values are treated as rem/4).

### Sorting

Make a column sortable with `sortable()`. With no arguments, the column’s attribute name is used as the sort key (for Eloquent/Scout/Collection). For custom logic use `sortable(Closure, Direction::Asc|Desc, 'named')` — the closure receives `($source, Direction)` and must return the modified source; the third argument is the name sent in the `sort_by` query param.

Default sort: the first column that has a default sort direction is used when the request has no `sort_by`. Set a default direction on the column via `sortable(null, Direction::Desc)` (or with a custom closure and name).

Table-level: `withoutSorting()` disables sorting on all columns. `defaultSorting(Closure)` runs when no column sort is applied; the closure receives the source and must return it (e.g. sorted).

### Footer (summaries)

Use `sumarize(Closure)` on a column. The closure receives `(Collection $resources, $source)` and returns a value. That value is rendered with the same cell component (e.g. Text) in the table footer.

### Links on cells

Use `link(\StackTrace\Ui\Link::to($url)|Closure)` on a column (e.g. Text). The closure can receive `($resource, $value)` and return a `Link` or `null`. `Link::to($url, $isExternal, $preserveScroll, $preserveState)` and `show(Closure|bool)` control visibility.

### Custom columns

Extend `StackTrace\Ui\Table\Column`, implement `component()` (return the Vue component name, e.g. `'DataTable::Columns/Text'`) and `toView($value, $resource)` (return props for that component). Use the `Concerns\RenderComponents` trait if you need the same name/props resolution as built-in columns. Give the column a stable ID with `name('my-column')`; otherwise an ID is derived (e.g. `col-01-name`).

## Actions

### Adding actions

Add actions with `withActions([...])` or `action($action, $name)`. When using an array, use string keys for names (e.g. `'edit' => Actions\Link::make(...)`); otherwise a name is taken from the action’s `withName()`/`getName()` or a UUID. Use `exceptActions(string|array)` and `onlyActions(string|array)` to limit which actions are shown.

### Action types

- **Link** — `StackTrace\Ui\Table\Actions\Link::make('Label', $url|Closure, $external)`. Navigates to the URL. Use `internal()` / `external()` to toggle. The URL can be a closure that receives the resource.
- **Event** — `StackTrace\Ui\Table\Actions\Event::make('Label', $eventName|Closure)`. The frontend emits this event (e.g. for client-side handling or custom endpoints). The event name can be a closure that receives the resource.
- **Executable (Action)** — Extend `StackTrace\Ui\Table\Actions\Action`. Define `handle(Selection $selection)` and optionally `authorize()`. Set `$label`, `$title`, `$description`, `$confirmLabel`, `$cancelLabel`, `$confirmable`, `$destructive`. The frontend POSTs to `route('ui.data-table-action')` with `action` (class name), `selection`, and `args`. The package registers this route in `UiServiceProvider` as `POST /__ui/data-table/actions`.

Common options (on any action): `can(Closure|bool)`, `bulk(bool)`, `inline(bool)`, `icon(string)`.

### Actions for a single resource

On a detail page you may want to show the same actions for one model. Use `getActionsForResource($model)` and pass the result to the view. You can combine with `exceptActions()` or `onlyActions()` (e.g. hide a bulk-only action):

```php
$actions = (new CustomerTable)
    ->exceptActions('Sync')
    ->getActionsForResource($customer);

return Inertia::render('Customers/Show', [
    'customer' => $customer,
    'actions' => $actions,
]);
```

The frontend can render the same action components using this payload.

## Filters

### Adding filters

Add filters with `filter($widget)` or `withFilters([...])`. The table uses the `Filterable` concern. Use `withoutFilter()` to hide filters, and `exceptFilters()` / `onlyFilters()` to restrict which widgets are shown.

### Filter widget contract

Extend `StackTrace\Ui\Table\FilterWidget`. Implement:

- `value()` — read the current value from the request (use `$this->qualifyField($name)` if using a prefix)
- `defaultValue()` — return an array of default query params (field names as keys)
- `component()` — Vue component name for the widget
- `toView()` — props for that component

Optional: `using(Closure)` to apply the filter — closure receives `($source, $value)`. For Eloquent/Scout, modify the builder; for Collection, return the filtered collection. Use `displayWhen(Closure)` / `displayUnless(Closure)` (receive the `Filter` instance) to show or hide the widget. Use `fallback(Closure)` when the value is empty to still apply something (e.g. default scope).

::: warning
Search, filter, and sort closures must return the modified source when using a Collection (e.g. return the filtered collection). For Eloquent/Scout, the closure typically modifies the builder in place; returning it is also supported.
:::

### Built-in filters

Built-in filter classes are in `StackTrace\Ui\Table\Filters`:

- **Boolean** — `Filters\Boolean::make('Title', 'field')`. Request field `field` (boolean). Use `using(Closure)` to apply (e.g. `$builder->where('is_active', $value)`).
- **DateRange** — `Filters\DateRange::make('Title', 'field')`. Uses `field_from` and `field_until`. Value is a `StackTrace\Ui\DateRange`; in `using()` call `$range->applyToQuery($builder, 'column')`.
- **Enum** — `Filters\Enum::make('Title', EnumClass::class, 'field')`. Value is an array of enum cases. Optional `labels(array|Closure)`.
- **Model** — `Filters\Model::make('Title', ModelClass::class, 'field')`. Value is `StackTrace\Ui\ModelSelection`. In `using()` call `$selection->applyOnBuilder($builder, 'column')`. Optional: `options(Collection|array)`, `label(string|Closure)`, `allowNull()`, `limit`.
- **Number** — `Filters\Number::make('Title', 'field')`. Value format: `operator:value` or `operator:min:max` (e.g. `lt:10`, `be:0:100`). Value is `StackTrace\Ui\NumberValue`; in `using()` call `$value->where($builder, 'column')`.
- **Select** — `Filters\Select::make('Title', 'field', $options)`. Options are array/Collection of `SelectOption` or a Closure that returns them.

When using a **query prefix** (`withQueryPrefix('prefix_')`), all filter request keys are prefixed so multiple tables do not clash.

## Search, pagination, and other options

### Search

Use `searchable(Closure)`. The closure receives `($source, string $term)`. For Eloquent/Scout, add conditions to the builder (e.g. `$builder->where('name', 'like', "%{$term}%")`). For Collection, return a filtered collection. The frontend sends the search term in the `search` query param. Use `withoutSearch()` to disable search.

### Pagination

The frontend sends `limit` to choose page size. Configure with `perPageOptions(array)` and `defaultPerPage(?int)`. If no default is set, the first value in `perPageOptions` is used. Use `cursorPaginate(true)` for cursor-based pagination (Builder/Scout only).

### Row key and highlight

By default, the row key is the Eloquent model key or the collection index. Use `keyBy(Closure)` to return a custom key per resource. Use `highlight(Closure)` so the closure receives the resource and returns a highlight type (string); the frontend uses it for row styling.

### After load and resource payload

`afterRetrieved(Closure)` is called with the loaded items (paginator or collection) after they are retrieved. By default, the row `resource` is not sent to the frontend. Use `mapResource(Closure)` to transform and send a custom payload per row (this also enables sending the resource). Use `withResource(true)` to send the raw resource without mapping.

## Using the table as a separate class

You can define a dedicated table class by extending `StackTrace\Ui\Table` and implementing:

- **`source()`** — return `EloquentBuilder|ScoutBuilder|Collection` (required for this style)
- **`columns()`** — return `array|Collection|ColumnCollection` (e.g. `ColumnCollection::of([...])`)
- **`actions()`** — optional; return `array|Collection|ActionCollection`
- **`filters()`** — optional; return an array of filter widgets; the table will call `filter($widget)` for each

Instantiate with `new MyTable()` (no arguments). When the table is serialized for the view, `boot()` is called and will invoke `source()`, `columns()`, `actions()`, and `filters()` and wire them. You can still call `withQueryPrefix()`, `exceptActions()`, `onlyFilters()`, etc., on the instance before passing it to the view.

Example:

```php
namespace App\Table;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Builder;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\ColumnCollection;
use StackTrace\Ui\Table\Columns;

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
            Columns\Text::make('Name', 'name'),
            Columns\Text::make('Email', 'email'),
        ]);
    }
}
```

In the controller:

```php
$table = new CustomerTable();
return Inertia::render('Customers/Index', ['customers' => $table]);
```

A full example with source, columns, actions, filters, and search is available in the demo app as `App\Table\CustomerTable`.

## Frontend rendering summary

1. Pass the table instance as a page prop (e.g. Inertia `'customers' => $table`).
2. In the page component, render `<DataTable :table="customers" />`. Optionally set `emptyTableMessage`, `emptyResultsMessage`, `borderless`, `insetLeft`, `insetRight`.
3. **Event actions** — the component emits an event with the same name as the action (e.g. `updatePlan`). Listen with `@updatePlan="onUpdatePlan"`; the handler receives the selection array (row keys).
4. **Executable actions** — the frontend POSTs to `route('ui.data-table-action')` with `selection`, `action`, and `args`. Ensure your application uses the package’s route (registered by `UiServiceProvider`). For a single-resource page, use `getActionsForResource($model)` and render the same action UI with the returned payload.

## Reference

### Conditionable

The table and `ColumnCollection` use Laravel’s `Conditionable` trait. You can use `when()` and `unless()` on the table or when building column/action collections to add columns or options conditionally.

### Executable action request flow

The action endpoint expects `selection` (array of row keys), `action` (class name of the action), and `args` (encrypted payload). The controller validates the request, decrypts `args`, instantiates the action, calls `authorize()` if present, then `handle(Selection)`. You can return `back()` or a custom `Response` from `handle()`.
