<?php

use App\Http\Controllers\Workbench\CustomerCollectionController;
use App\Http\Controllers\Workbench\CustomerController;
use App\Http\Controllers\Workbench\SidebarController;
use App\Http\Controllers\Workbench\UpdatePlanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

Route::prefix('workbench')->name('workbench.')->group(function (): void {
    Route::get('/', fn (): Response => Inertia::render('Workbench/Index'))->name('index');

    Route::get('/customers/collection', [CustomerCollectionController::class, '__invoke'])->name('customers.collection');
    Route::get('/customers', [CustomerController::class, 'index'])->name('customers.index');
    Route::get('/customers/{customer}', [CustomerController::class, 'show'])->name('customers.show');
    Route::patch('/customers/{customer}', [CustomerController::class, 'update'])->name('customers.update');
    Route::post('/customers/plan', [UpdatePlanController::class, '__invoke'])->name('customers.update-plan');

    Route::get('/sidebar/{action?}', [SidebarController::class, '__invoke'])->name('sidebar');
});
