<?php


namespace App\Demo\Http\Controllers;


use Inertia\Inertia;

class CustomerController
{
    public function index()
    {
        return Inertia::render('Demo/Customers/ListCustomers', [
            //
        ]);
    }
}
