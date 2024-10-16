<?php


namespace App\Demo\Http\Controllers;


use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdatePremiumController
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'customers' => ['required', 'array', Rule::exists(Customer::class, 'id')],
            'is_premium' => ['boolean'],
        ]);

        Customer::query()->whereIn('id', $request->input('customers'))->update([
            'is_premium' => $request->boolean('is_premium'),
        ]);

        return back();
    }
}
