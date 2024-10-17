<?php


namespace StackTrace\Ui\Providers;


use StackTrace\Ui\Commands;
use Illuminate\Support\ServiceProvider;

class UiServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->commands([
            Commands\AddCommand::class,
            Commands\InstallCommand::class,
        ]);
    }
}
