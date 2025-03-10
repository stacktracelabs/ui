<?php


namespace StackTrace\Ui;


use Illuminate\Support\Collection;

class Selection
{
    public function __construct(
        protected Collection $identifiers
    ) { }

    /**
     * Retrieve all selected identifiers.
     */
    public function all(): Collection
    {
        return $this->identifiers;
    }
}
