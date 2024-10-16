<?php

use Illuminate\Support\Facades\Route;
use App\Demo\Http\Controllers;

Route::group(['middleware' => 'auth'], function () {
    Route::get('/customers', [Controllers\CustomerController::class, 'index'])->name('customers');
    Route::post('/customers/plan', Controllers\UpdatePlanController::class)->name('customers.update-plan');
});
