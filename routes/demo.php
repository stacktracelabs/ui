<?php

use Illuminate\Support\Facades\Route;
use App\Demo\Http\Controllers;

Route::get('/customers', [Controllers\CustomerController::class, 'index'])->name('customers');
Route::post('/customers/premium', Controllers\UpdatePremiumController::class)->name('customers.update-premium');
