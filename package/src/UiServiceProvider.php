<?php


namespace StackTrace\Ui;


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
