<?php

namespace StackTrace\Ui\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use StackTrace\Ui\Http\Controllers\ActionController;
use StackTrace\Ui\Toaster;

class UiServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->singleton(Toaster::class);
    }

    public function boot(): void
    {
        Route::group(['middleware' => 'web'], function () {
            Route::post('/__ui/data-table/actions', ActionController::class)->name('ui.data-table-action');
        });
    }
}
