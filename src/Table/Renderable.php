<?php


namespace StackTrace\Ui\Table;


interface Renderable
{
    /**
     * Render object to array.
     */
    public function render(): array;
}
