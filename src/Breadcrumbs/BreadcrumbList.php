<?php

namespace StackTrace\Ui\Breadcrumbs;

use Illuminate\Support\Traits\Conditionable;
use Inertia\PropertyContext;
use Inertia\ProvidesInertiaProperty;

class BreadcrumbList implements ProvidesInertiaProperty
{
    use Conditionable;

    /**
     * List of items.
     *
     * @var array<BreadcrumbItem>
     */
    protected array $items = [];

    /**
     * Add items to the end of the list.
     */
    public function append(BreadcrumbItem ...$items): static
    {
        $this->items = [...$this->items, ...$items];

        return $this;
    }

    /**
     * Add items to the beginning of the list.
     */
    public function prepend(BreadcrumbItem ...$items): static
    {
        $this->items = [...$items, ...$this->items];

        return $this;
    }

    public function toView(): array
    {
        return $this->items;
    }

    public function toInertiaProperty(PropertyContext $prop): mixed
    {
        return $this->toView();
    }

    /**
     * Create new Breadcrumb list.
     */
    public static function make(): static
    {
        return new static;
    }
}
