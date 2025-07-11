<?php


namespace App\Http\Controllers;


use App\Enums\BusinessArea;
use App\Models\Customer;
use App\Table\CustomerTable;
use Illuminate\Http\Request;
use Inertia\Inertia;
use StackTrace\Ui\SelectOption;

class CustomerController
{
    public function index()
    {
        $table = new CustomerTable;

        return Inertia::render('customers/ListCustomers', [
            'customers' => $table,
            'businessAreas' => SelectOption::collectFromEnum(BusinessArea::class),
        ]);
    }

    public function show(Customer $customer)
    {
        $actions = (new CustomerTable)
            ->exceptActions('Sync')
            ->getActionsForResource($customer);

        return Inertia::render('customers/ShowCustomer', [
            'id' => $customer->id,
            'name' => $customer->name,
            'company' => $customer->company,
            'email' => $customer->email,
            'plan' => $customer->is_premium ? 'Premium' : 'Basic',
            'actions' => $actions,
        ]);
    }

    public function update(Request $request, Customer $customer)
    {
        $input = $request->validate([
            'name' => ['required', 'string', 'max:254'],
        ]);

        $customer->update($input);

        return back();
    }
}
