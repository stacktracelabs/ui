# Data Table

A backend driven table component.

## Installation

```shell
php artisan ui:add data-table
```

## Usage

::: code-group
```php [CustomerController.php]
<?php

use App\Models\Customer;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;

class CustomerController 
{
    public function index()
    {
        return Inertia::render('ListCustomers', [
            'customers' => Table::make(Customer::query())
              ->withColumns([
                  Columns\Text::make('Name'),
                  
                  Columns\Text::make('Company'),
                  
                  Columns\Text::make('E-Mail', 'email'),
                  
                  Columns\Text::make('Employees', 'employee_count')
                      ->tabularNums()
                      ->sortable(),
              ])
              ->searchable(function (Builder $builder, string $term) {
                  $builder->where('name', 'like', "%{$term}%");
              }),
        ]);    
    }  
}
```

```vue [ListCustomers.vue]

<template>
  <DataTable :table="customers"/>
</template>

<script setup lang="ts">
import { type DataTableValue, DataTable } from "@/Components/DataTable";

defineProps<{
  customers: DataTableValue
}>()
</script>
```
:::
