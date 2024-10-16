<?php


namespace App\Demo\Http\Controllers;


use App\Models\Customer;
use Inertia\Inertia;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;
use StackTrace\Ui\Table\Actions;

class CustomerController
{
    public function index()
    {
        $table = Table::make(Customer::query())
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
            ->action(
                Actions\Event::make('Update Plan', 'updatePlan')->bulk(),
            )
        ;

        return Inertia::render('Demo/Customers/ListCustomers', [
            'customers' => $table,
        ]);
    }
}
