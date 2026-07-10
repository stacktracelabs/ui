<?php

namespace App\Table;

use App\Enums\BusinessArea;
use App\Models\Customer;
use App\Table\Actions\MakePremiumAction;
use App\Table\Actions\RefreshAction;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use StackTrace\Ui\DateRange;
use StackTrace\Ui\Link;
use StackTrace\Ui\NumberValue;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\ActionCollection;
use StackTrace\Ui\Table\Actions;
use StackTrace\Ui\Table\ColumnCollection;
use StackTrace\Ui\Table\Columns;
use StackTrace\Ui\Table\Filters;

class CustomerTable extends Table
{
    public function __construct()
    {
        $this->searchable(
            fn (Builder $query, string $term): Builder => $query->where('name', 'like', "%{$term}%")
        );
    }

    /**
     * @return Builder<Customer>
     */
    public function source(): Builder
    {
        return Customer::query();
    }

    public function columns(): ColumnCollection
    {
        return ColumnCollection::of([
            Columns\Image::make('', fn (Customer $customer): string => $customer->getAvatarUrl()),

            Columns\Text::make('Name')
                ->link(fn (Customer $customer): Link => Link::to(route('workbench.customers.show', $customer))),

            Columns\Text::make('Company'),

            Columns\Text::make('E-Mail', 'email'),

            Columns\Text::make('Employees', 'employee_count')
                ->numsTabular()
                ->sortable()
                ->sumarize(fn (Collection $customers): int => $customers->sum('employee_count')),

            Columns\Text::make(
                'Area',
                fn (Customer $customer): ?string => $customer->business_area
                    ? Str::headline($customer->business_area->name)
                    : null
            ),

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
        ]);
    }

    public function actions(): ActionCollection
    {
        return ActionCollection::of([
            Actions\Event::make('Change Plan', 'updatePlan')
                ->bulk(),

            MakePremiumAction::make()->bulk(),

            RefreshAction::make()->bulk()->withName('Sync'),
        ]);
    }

    /**
     * @return array<int, Table\FilterWidget>
     */
    public function filters(): array
    {
        return [
            Filters\Boolean::make('Premium only', 'premium')
                ->name('Premium')
                ->using(fn (Builder $query, bool $value): Builder => $query->where('is_premium', $value)),

            Filters\DateRange::make('Founded', 'founded')
                ->using(fn (Builder $query, DateRange $range): Builder => $range->applyToQuery($query, 'created_at')),

            Filters\Enum::make('Area', BusinessArea::class, 'area')
                ->using(fn (Builder $query, array $areas): Builder => $query->whereIn('business_area', $areas)),

            Filters\Number::make('No. of Employees', 'employees')
                ->using(function (Builder $query, NumberValue $value): Builder {
                    $value->where($query, 'employee_count');

                    return $query;
                })
                ->displayUnless(fn (Table\Filter $filter): bool => $filter->isApplied('Premium')),
        ];
    }
}
