<?php


namespace App\Http\Controllers;


use App\Enums\BusinessArea;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Inertia\Inertia;
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
            ->column(Columns\Text::make('Name'))
            ->column(Columns\Text::make('Company'))
            ->column(Columns\Text::make('E-Mail', 'email'))
            ->column(Columns\Text::make('Area', fn (Customer $customer) => $customer->business_area ? Str::headline($customer->business_area->name) : null))
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
            ->action(Actions\Event::make('Change Plan', 'updatePlan')->bulk())
            ->filter(Filters\Boolean::make('Premium only', 'premium')->using(fn (Builder $builder, bool $value) => $builder->where('is_premium', $value)))
            ->filter(Filters\DateRange::make('Founded', 'founded')->using(fn (Builder $builder, Table\DateRange $range) => $range->applyToQuery($builder, 'created_at')))
            ->filter(Filters\Enum::make('Area', BusinessArea::class, 'area')->using(fn (Builder $builder, array $areas) => $builder->whereIn('business_area', $areas)))
        ;

        return Inertia::render('Customers/ListCustomers', [
            'customers' => $table,
            'businessAreas' => SelectOption::fromEnum(BusinessArea::class),
        ]);
    }
}
