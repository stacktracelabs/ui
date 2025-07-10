<?php

namespace StackTrace\Ui\Contracts;

interface HasLabel
{
    /**
     * Retrieve label for the value.
     */
    public function label(): string;
}
