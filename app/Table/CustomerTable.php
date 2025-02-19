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
            Columns\Icon::make('', fn () => 'refresh-cw'),

            Columns\Text::make('Name')
                ->link(fn (Customer $customer) => Link::to(route('customers.show', $customer))),

            Columns\Text::make('Company'),

            Columns\Text::make('E-Mail', 'email'),

            Columns\Text::make('Employees', 'employee_count')
                ->numsTabular()
                ->sortable()
                ->sumarize(fn (Collection $customers) => $customers->sum('employee_count')),

            Columns\Text::make('Area', fn (Customer $customer) => $customer->business_area ? Str::headline($customer->business_area->name) : null),

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

            MakePremiumAction::make(Customer::class)->bulk(),

            RefreshAction::make()->bulk()->withName('Sync'),
        ]);
    }

    public function filters(): array
    {
        return [
            Filters\Boolean::make('Premium only', 'premium')
                ->name('Premium')
                ->using(fn (Builder $builder, bool $value) => $builder->where('is_premium', $value)),

            Filters\DateRange::make('Founded', 'founded')
                ->using(fn (Builder $builder, DateRange $range) => $range->applyToQuery($builder, 'created_at')),

            Filters\Enum::make('Area', BusinessArea::class, 'area')
                ->using(fn (Builder $builder, array $areas) => $builder->whereIn('business_area', $areas)),

            Filters\Number::make('No. of Employees', 'employees')
                ->using(fn (Builder $builder, NumberValue $value) => $value->where($builder, 'employee_count'))
                ->displayUnless(function (Table\Filter $filter) {
                    return $filter->isApplied('Premium');
                }),
        ];
    }
}
