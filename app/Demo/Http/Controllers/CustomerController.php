<?php


namespace App\Demo\Http\Controllers;


use App\Models\Customer;
use Inertia\Inertia;
use StackTrace\Ui\Table;
use StackTrace\Ui\Table\Columns;

class CustomerController
{
    public function index()
    {
        $table = Table::make(Customer::query())
            ->column(
                Columns\Text::make('Name'),
            );

        return Inertia::render('Demo/Customers/ListCustomers', [
            'customers' => $table,
        ]);
    }
}
