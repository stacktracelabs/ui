<?php

use App\Demo\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth'], function () {
    Route::get('/customers', [\App\Http\Controllers\CustomerController::class, 'index'])->name('customers');
    Route::get('/customers/{customer}', [\App\Http\Controllers\CustomerController::class, 'show'])->name('customers.show');
    Route::post('/customers/plan', \App\Http\Controllers\UpdatePlanController::class)->name('customers.update-plan');
});
