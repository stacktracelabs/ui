<?php


namespace StackTrace\Ui\Breadcrumbs;


use Illuminate\Support\Traits\Conditionable;
use StackTrace\Ui\ViewModel;

class BreadcrumbList extends ViewModel
{
    use Conditionable;

    /**
     * List of items.
     *
     * @var array<\StackTrace\Ui\Breadcrumbs\BreadcrumbItem>
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

    /**
     * Create new Breadcrumb list.
     */
    public static function make(): static
    {
        return new static;
    }
}
