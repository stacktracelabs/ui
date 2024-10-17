<?php


namespace App\Demo\Http\Controllers;


use App\Models\Customer;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;
use StackTrace\Ui\Table\Actions;
use StackTrace\Ui\Table\Filters;

class CustomerController
{
    public function index()
    {
        $table = Table::make(Customer::query())
            ->searchable(function (Builder $builder, string $term) {
                $builder->where('name', 'like', "%{$term}%");
            })
            ->column(Columns\Text::make('Name'))
            ->column(Columns\Text::make('Company'))
            ->column(Columns\Text::make('E-Mail', 'email'))
            ->column(
                Columns\Badge::make('Plan', 'is_premium')
                    ->label([
                        true => 'Premium',
                        false => 'Basic',
                    ])
                    ->variant([
                        true => 'positive',
                        false => 'default',
                    ])
            )
            ->column(Columns\Date::make('Founded', 'created_at')->sortable())
            ->action(Actions\Event::make('Update Plan', 'updatePlan')->bulk())
            ->filter(Filters\Boolean::make('Premium only', 'premium')->using(fn (Builder $builder, bool $value) => $builder->where('is_premium', $value)))
            ->filter(Filters\DateRange::make('Founded', 'founded')->using(fn (Builder $builder, Table\DateRange $range) => $range->applyToQuery($builder, 'created_at')))
        ;

        return Inertia::render('Demo/Customers/ListCustomers', [
            'customers' => $table,
        ]);
    }
}
