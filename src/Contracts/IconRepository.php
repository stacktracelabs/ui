<?php


namespace StackTrace\Ui\Contracts;


interface IconRepository
{
    /**
     * Load an icon by its name.
     */
    public function load(string $name): string;
}
