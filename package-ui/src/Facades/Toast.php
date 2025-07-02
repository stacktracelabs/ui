<?php


namespace StackTrace\Ui\Facades;


use Illuminate\Support\Facades\Facade;
use StackTrace\Ui\Toaster;

/**
 * @method static void make(string $title, ?string $content, string $variant = 'default')
 * @method static void default(string $title, ?string $content)
 * @method static void destructive(string $title, ?string $content)
 */
class Toast extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return Toaster::class;
    }
}
