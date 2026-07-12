# PHP UI API

Use the package's PHP types when Laravel prepares structure or behavior consumed by StackTrace Vue components. This keeps the serialized Inertia contract in one library instead of repeating array shapes in controllers.

Inspect `vendor/stacktrace/ui/src` for the exact API available in the installed package before using a method. Do not invent methods from a newer documentation version.

## API map

| Area | PHP types | Frontend relationship |
| --- | --- | --- |
| Links and icons | `StackTrace\Ui\Link`, `StackTrace\Ui\Icon` | Serializable actions and icon content used by menus, breadcrumbs, tables, and application UI. |
| Breadcrumbs | `Breadcrumbs\BreadcrumbList`, `Breadcrumbs\BreadcrumbItem` | Build hierarchical navigation in a controller and pass it as an Inertia prop. |
| Menus | `Menu\Menu`, `Menu\MenuItem`, `Menu\ActivePath`, `Menu\ActiveRoute` | Build nested navigation, actions, active destinations, icons, and badges. |
| Tables | `StackTrace\Ui\Table` plus `Table\Columns`, `Table\Filters`, `Table\Actions`, `Table\Resource`, and `Table\ResourceActions` | The Data Table component's backend-driven columns, values, filters, row actions, sorting, search, and pagination. |
| Selection and filtering values | `Selection`, `ModelSelection`, `DateRange`, `NumberValue`, `SelectOption`, `Operator` | Typed request/filter values used by table and form workflows. |
| Toast feedback | `StackTrace\Ui\Facades\Toast`, `StackTrace\Ui\Toaster` | Flash messages rendered by Sonner. |
| Serialization | `Inertia\ProvidesInertiaProperty`, `Inertia\ProvidesInertiaProperties` | First-party contracts for one prop value or a provider of multiple named page props. |
| Styling values | `Style\Rounding`, table alignment/style enums | Shared serialized presentation choices where the API exposes them. |

## Controller example

Return the package objects directly as Inertia props:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;
use StackTrace\Ui\Breadcrumbs\BreadcrumbItem;
use StackTrace\Ui\Breadcrumbs\BreadcrumbList;
use StackTrace\Ui\Link;

final class ProjectController
{
    public function show(Project $project): Response
    {
        return Inertia::render('Projects/Show', [
            'project' => $project,
            'breadcrumbs' => BreadcrumbList::make()->append(
                BreadcrumbItem::make('Projects', Link::to(route('projects.index'))),
                BreadcrumbItem::make($project->name),
            ),
        ]);
    }
}
```

Return package objects directly as prop values. They implement
`ProvidesInertiaProperty`, so Inertia resolves nested menus, breadcrumbs,
icons, and select options through its normal prop pipeline.

For custom application objects, implement `ProvidesInertiaProperty` when the
object is the value of one named prop. Implement `ProvidesInertiaProperties`
when one object should contribute several named props to an Inertia response.
The latter is passed directly to `Inertia::render()` or included at a numeric
array key; it is not a replacement for an individual value object.

`StackTrace\Ui\ViewModel` and `UnformattedViewModelData` are deprecated
compatibility APIs. Do not use them for new code. First-party providers return
keys exactly as authored; StackTrace no longer applies automatic camel-case
conversion to its package objects.

## Data tables

Use `Table` when PHP owns table behavior. Use the simpler Vue `Table` component when the page only needs semantic tabular markup.

```php
use StackTrace\Ui\Link;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;

'customers' => Table::make(Customer::query())
    ->withColumns([
        Columns\Text::make('Name')
            ->link(fn (Customer $customer): Link => Link::to(
                route('customers.show', $customer),
            )),
        Columns\Text::make('E-Mail', 'email'),
        Columns\Date::make('Created', 'created_at')->sortable(),
    ]),
```

Before extending a table, inspect the installed implementations under:

- `src/Table/Columns`
- `src/Table/Filters`
- `src/Table/Actions`
- `src/Table/Concerns`

Prefer a dedicated Table subclass for a large or reused definition instead of leaving a long builder chain in a controller.

## Menus and breadcrumbs

Prefer `Menu`, `MenuItem`, `BreadcrumbList`, and `BreadcrumbItem` over ad hoc controller arrays when their frontend components are used. Their builders support conditional composition and preserve the package's serialized keys.

Use `Link::to(...)` for internal or external destinations and configure active paths/routes with the installed Menu API. Keep authorization in Laravel: omit unauthorized items rather than sending them disabled to the client.

## Toast feedback

Use server-originated toast feedback after an Inertia action:

```php
use StackTrace\Ui\Facades\Toast;

Toast::default('Project saved');

return back();
```

Use `Toast::destructive(...)` for a destructive/error presentation when appropriate. The corresponding Sonner frontend component must be installed and mounted according to its component documentation.

## Boundaries

- PHP UI builders do not replace authorization, validation, policies, or domain services.
- Do not expose unauthorized actions or records in serialized UI props.
- Do not duplicate a builder's output shape in TypeScript when the project already has shared types for it.
- When changing a PHP builder contract, verify its Vue consumer and an end-to-end Inertia response.
