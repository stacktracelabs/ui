<?php


namespace StackTrace\Ui\Table\Concerns;


use StackTrace\Ui\Table\Filter;
use StackTrace\Ui\Table\FilterWidget;

trait Filterable
{
    /**
     * Configured table filter.
     */
    protected ?Filter $filter = null;

    /**
     * Hide all available filters.
     */
    protected bool $withoutFilter = false;

    /**
     * Get the current filter instance.
     */
    protected function getFilter(): Filter
    {
        if ($this->filter) {
            return $this->filter;
        }

        return $this->filter = new Filter;
    }

    /**
     * Add filter to the table.
     */
    public function filter(FilterWidget $filter): static
    {
        $this->getFilter()->addWidget($filter);

        return $this;
    }

    /**
     * Add filters to the table.
     */
    public function withFilters(array $filters): static
    {
        foreach ($filters as $filter) {
            if ($filter !== null) {
                $this->filter($filter);
            }
        }

        return $this;
    }

    /**
     * Disable filtering on the table.
     */
    public function withoutFilter(bool $without = true): static
    {
        $this->withoutFilter = $without;

        return $this;
    }

    /**
     * Exclude given set of filters.
     */
    public function exceptFilters(string|array $name): static
    {
        $this->getFilter()->exceptWidgets($name);

        return $this;
    }

    /**
     * Allow only given set of filters.
     */
    public function onlyFilters(string|array $name): static
    {
        $this->getFilter()->onlyWidgets($name);

        return $this;
    }

    /**
     * Render a Filter.
     */
    protected function renderFilter(): ?array
    {
        return !$this->withoutFilter ? $this->filter?->toView() : null;
    }
}
