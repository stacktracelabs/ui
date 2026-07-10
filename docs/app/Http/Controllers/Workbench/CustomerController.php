<?php

namespace App\Http\Controllers\Workbench;

use App\Models\Customer;
use App\Table\CustomerTable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CustomerController
{
    public function index(): Response
    {
        return Inertia::render('Workbench/Customers/Index', [
            'customers' => new CustomerTable,
        ]);
    }

    public function show(Customer $customer): Response
    {
        $actions = (new CustomerTable)
            ->exceptActions('Sync')
            ->getActionsForResource($customer);

        return Inertia::render('Workbench/Customers/Show', [
            'id' => $customer->id,
            'name' => $customer->name,
            'company' => $customer->company,
            'email' => $customer->email,
            'plan' => $customer->is_premium ? 'Premium' : 'Basic',
            'actions' => $actions,
        ]);
    }

    public function update(Request $request, Customer $customer): RedirectResponse
    {
        $attributes = $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);

        $customer->update($attributes);

        return back();
    }
}
