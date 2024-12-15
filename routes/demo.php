<?php

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function () {
    Route::get('/customers', [Controllers\CustomerController::class, 'index'])->name('customers');
    Route::get('/customers/{customer}', [Controllers\CustomerController::class, 'show'])->name('customers.show');
    Route::patch('/customers/{customer}', [Controllers\CustomerController::class, 'update'])->name('customers.update');
    Route::post('/customers/plan', Controllers\UpdatePlanController::class)->name('customers.update-plan');

    Route::get('/forms', Controllers\FormController::class)->name('forms');
});
