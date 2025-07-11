<?php


namespace StackTrace\Ui\Providers;


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use StackTrace\Ui\Commands;
use Illuminate\Support\ServiceProvider;
use StackTrace\Ui\Http\Controllers\ActionController;
use StackTrace\Ui\Toaster;

class UiServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->commands([
            Commands\AddCommand::class,
        ]);

        $this->app->scoped(Toaster::class);
    }

    public function boot(): void
    {
        Route::group(['middleware' => 'web'], function () {
            Route::post('/__ui/data-table/actions', ActionController::class)->name('ui.data-table-action');
        });

        Inertia::share('toasts', function () {
            /** @var Toaster $toaster */
            $toaster = $this->app->make(Toaster::class);

            return $toaster->getMessages();
        });
    }
}
