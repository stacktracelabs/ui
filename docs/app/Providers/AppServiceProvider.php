<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use StackTrace\Ui\Providers\UiServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($this->app->environment(['local', 'testing'])) {
            $this->app->register(UiServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
