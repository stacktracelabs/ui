# Data Table

A backend driven table component.

<ComponentSource
  source="components/data-table"
/>

## Installation

#### Run the following command

```shell
php artisan ui:add data-table
```

#### Register `DataTablePlugin`

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

## Usage

To create a Data Table, simply instantiate a new `StackTrace\Ui\Table` instance with desired
data source:

```php
use StackTrace\Ui\Table;

$source = collect([
    ['id' => 1, 'name' => 'Peter'],
    ['id' => 2, 'name' => 'Adriana'],
]);

$table = Table::make($source);
```

The data source can be one of `Illuminate\Support\Collection`, `Illuminate\Database\Eloquent\Collection`,
`Illuminate\Database\Eloquent\Builder` or `Laravel\Scout\Builder`. 

### Adding columns

To add columns to your table, call a `withColumns` method on the table instance with list of desired columns. 
While you can create your own columns, we already provide basic built-in columns you can use from `StackTrace\Ui\Table\Columns` namespace.   

```php
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;

$source = collect([
    ['id' => 1, 'name' => 'Peter'],
    ['id' => 2, 'name' => 'Adriana'],
]);

$table = Table::make($source)
    ->withColumns([
        Columns\Text::make('Name', 'name'),    
    ]);
```

Depending on column requirements, each column can require different arguments to build. But most of the built-in columns
follows this argument structure: 

1. Column display name
2. Column value retriever
3. All other required column arguments

Make sure to read the column documentation or browser the source code of the column,
to see what arguments are necessary when constructing one.

#### Column display name

The column name can be an arbitrary `string` and is displayed in your frontend as column name.  It is usually the first argument of the column. 
You can use also localized column name, simply by using `__('Name')` helper function. Make sure to explicitly specify value retriever when using localized column name and do not rely on attribute guessing from column name.

#### Column value retriever

Each column deals with retrieving value from the source on its own. 
Therefore, you have to specify, how the value of each column should be retrieved. 
A value retriever is usually the second argument of the column and can be either a source object attribute name
or a closure with custom value retrieval logic.

By specifying an attribute name, the column will automatically resolve a value from underlying
source. This works with array-like values or Eloquent models as a source.

```php
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;

Table::make(collect([['id' => 1, 'name' => 'Peter']]))
    ->withColumns([
        // The column will have "Peter" value.
        Columns\Text::make('Name', 'name'),
    ]);
```

If you omit the attribute name, it will be derived from actual column name.

```php
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;

Table::make(collect([['id' => 1, 'name' => 'Peter']]))
    ->withColumns([
        // The column will have "Peter" value too,
        // attribute guessed from a column name.
        Columns\Text::make('Name'),
    ]);
```

:::warning
You should not rely on attribute name guessing if you use localized column name. This way,
a different attribute name may be guessed based on a currently set language.
:::

If you want to fully control the column value, use custom `Closure` as attribute with your very own logic:

```php
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;
use Illuminate\Support\Str;

Table::make(collect([['id' => 1, 'name' => 'Peter']]))
    ->withColumns([
        Columns\Text::make('Name', function (array $user) {
            return Str::upper($user['name']);        
        }),
    ]);
```

Depending on the data source, you may expect a different value as closure argument. When using array or collection,
the value will be the same type as your values inside the collection. When sourcing from Eloquent or Scout builders,
the value will be the actual Eloquent model.

```php
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;
use App\Models\User;
use Illuminate\Support\Str;

Table::make(User::query())
    ->withColumns([
        // Here the argument is a User model
        Columns\Text::make('Name', function (User $user) {
            return Str::upper($user->name);        
        }),
    ]);
```

### Displaying the table

To display a Data Table, send your `StackTrace\Ui\Table` instance to the frontend.
The `StackTrace\Ui\Table` conforms a ViewModel protocol and can be directly passed to the frontend: 

```php
use StackTrace\Ui\Table;
use Inertia\Inertia;

class CustomerController 
{
    public function index() 
    {
        $table = Table::make(/* ... */)
            ->withColumns([/* ... */]);
            
        return Inertia::render('CustomerList', [
            'customers' => $table,
        ]);    
    }
}
```

Then in your frontend, render the table using `DataTable` component and pass your table data as a value:

```vue
<template>
  <DataTable :table="customers"/>
</template>

<script setup lang="ts">
import { type DataTableValue, DataTable } from '@/Components/DataTable'

defineProps<{
  customers: DataTableValue
}>()
</script>
```

