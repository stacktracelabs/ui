<?php

namespace App\Http\Controllers\Workbench;

use App\Models\Customer;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdatePlanController
{
    public function __invoke(Request $request): RedirectResponse
    {
        $attributes = $request->validate([
            'customers' => ['required', 'array', 'min:1'],
            'customers.*' => ['required', 'integer', 'distinct', Rule::exists(Customer::class, 'id')],
            'is_premium' => ['required', 'boolean'],
        ]);

        Customer::query()
            ->whereKey($attributes['customers'])
            ->update(['is_premium' => $request->boolean('is_premium')]);

        return back();
    }
}
