<?php


namespace StackTrace\Ui\Providers;


use Illuminate\Support\Facades\Route;
use StackTrace\Ui\Commands;
use Illuminate\Support\ServiceProvider;
use StackTrace\Ui\Http\Controllers\ActionController;

class UiServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->commands([
            Commands\AddCommand::class,
            Commands\InstallCommand::class,
        ]);
    }

    public function boot(): void
    {
        Route::group(['middleware' => 'web'], function () {
            Route::post('/vendor/stacktrace/ui/data-table/actions', ActionController::class)->name('ui.data-table-action');
        });
    }
}
