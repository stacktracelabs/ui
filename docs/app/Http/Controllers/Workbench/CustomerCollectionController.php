<?php

namespace App\Http\Controllers\Workbench;

use App\Models\Customer;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use StackTrace\Ui\Link;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;
use StackTrace\Ui\Table\Filters;

class CustomerCollectionController
{
    public function __invoke(): Response
    {
        return Inertia::render('Workbench/Customers/Collection', [
            'customers' => Table::make(Customer::all())
                ->searchable(
                    fn (Collection $customers, string $term): Collection => $customers->filter(
                        fn (Customer $customer): bool => Str::contains(
                            Str::lower($customer->name),
                            Str::lower($term)
                        )
                    )
                )
                ->withColumns([
                    Columns\Text::make('Name')
                        ->link(fn (Customer $customer): Link => Link::to(route('workbench.customers.show', $customer))),

                    Columns\Text::make('Company'),

                    Columns\Text::make('E-Mail', 'email'),

                    Columns\Badge::make('Plan', 'is_premium')
                        ->label([
                            true => 'Premium',
                            false => 'Basic',
                        ])
                        ->variant([
                            true => 'positive',
                            false => 'default',
                        ]),

                    Columns\Date::make('Founded', 'created_at')
                        ->sortable(),
                ])
                ->withFilters([
                    Filters\Boolean::make('Premium', 'premium')
                        ->name('Premium')
                        ->using(fn (Collection $customers, bool $value): Collection => $customers->where('is_premium', $value))
                        ->fallback(fn (Collection $customers): Collection => $customers->where('is_premium', false)),
                ]),
        ]);
    }
}
