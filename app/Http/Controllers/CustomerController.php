<?php


namespace App\Http\Controllers;


use App\Enums\BusinessArea;
use App\Models\Customer;
use App\Table\Actions\MakePremiumAction;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Inertia\Inertia;
use StackTrace\Ui\DateRange;
use StackTrace\Ui\Link;
use StackTrace\Ui\NumberValue;
use StackTrace\Ui\SelectOption;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Actions;
use StackTrace\Ui\Table\Columns;
use StackTrace\Ui\Table\Filters;

class CustomerController
{
    public function index()
    {
        $table = Table::make(Customer::query())
            ->searchable(function (Builder $builder, string $term) {
                $builder->where('name', 'like', "%{$term}%");
            })
            ->withColumns([
                Columns\Text::make('Name')
                    ->link(fn (Customer $customer) => Link::to(route('customers.show', $customer)))
                    ->verticalAlign(Table\VerticalAlign::Middle),

                Columns\Text::make('Company'),

                Columns\Text::make('E-Mail', 'email'),

                Columns\Text::make('Employees', 'employee_count')
                    ->tabularNums()
                    ->sortable(),

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
            ])
            ->withActions([
                Actions\Event::make('Change Plan', 'updatePlan')
                    ->bulk(),

                MakePremiumAction::make(Customer::class)->bulk(),
            ])
            ->withFilters([
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
            ])
        ;

        return Inertia::render('Customers/ListCustomers', [
            'customers' => $table,
            'businessAreas' => SelectOption::collectFromEnum(BusinessArea::class),
        ]);
    }

    public function show(Customer $customer)
    {
        return Inertia::render('Customers/ShowCustomer', [
            'name' => $customer->name,
            'company' => $customer->company,
            'email' => $customer->email,
        ]);
    }
}
