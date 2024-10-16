<?php

use Illuminate\Support\Facades\Route;
use App\Demo\Http\Controllers;

Route::get('/customers', [Controllers\CustomerController::class, 'index'])->name('customers');
