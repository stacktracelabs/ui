<?php


namespace StackTrace\Ui\Table;


interface Wrappable
{
    /**
     * Determine whether column text should be wrapped.
     */
    public function shouldWrap(): bool;
}
