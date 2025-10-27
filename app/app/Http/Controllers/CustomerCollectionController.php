<?php


namespace App\Http\Controllers;


use App\Models\Customer;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Inertia\Inertia;
use StackTrace\Ui\Link;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;
use StackTrace\Ui\Table\Filters;

class CustomerCollectionController
{
    public function __invoke()
    {
        return Inertia::render('CollectionTable', [
            'customers' => Table::make(Customer::all())
                ->searchable(function (Collection $items, string $term) {
                    return $items->filter(fn (Customer $customer) => Str::of($customer->name)->lower()->contains(Str::lower($term)));
                })
                ->withColumns([
                    Columns\Text::make('Name')
                        ->link(fn (Customer $customer) => Link::to(route('customers.show', $customer))),

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
                ])
                ->withFilters([
                    Filters\Boolean::make('Premium', 'premium')
                        ->name('Premium')
                        ->using(fn (Collection $items, bool $value) => $items->where('is_premium', $value))
                        ->fallback(fn (Collection $items) => $items->where('is_premium', false)),
                ])
        ]);
    }
}
