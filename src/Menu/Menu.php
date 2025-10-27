<?php


namespace StackTrace\Ui\Menu;


use Closure;
use Illuminate\Support\Collection;
use Illuminate\Support\Traits\Conditionable;
use StackTrace\Ui\ViewModel;

class Menu extends ViewModel
{
    use Conditionable;

    /**
     * List of items within the menu.
     *
     * @var array<\StackTrace\Ui\Menu\MenuItem>
     */
    protected array $items = [];

    /**
     * Add item to the menu.
     */
    public function add(MenuItem $item): static
    {
        $this->items[] = $item;

        return $this;
    }

    /**
     * Add item to the menu when given value is truthy.
     */
    public function addWhen($value, Closure|MenuItem $item): static
    {
        return $this->when($value, fn (Menu $menu) => $menu->add(value($item)));
    }

    /**
     * Add item to the menu when given value is falsy.
     */
    public function addUnless($value, Closure|MenuItem $item): static
    {
        return $this->unless($value, fn (Menu $menu) => $menu->add(value($item)));
    }

    /**
     * Find item by its id or custom callback.
     */
    public function find(string|Closure $id): ?MenuItem
    {
        if ($id instanceof Closure) {
            return $this->getItems()->first($id);
        }

        return $this->getItems()->firstWhere('id', $id);
    }

    /**
     * Retrieve all items within menu.
     *
     * @return Collection<int, \StackTrace\Ui\Menu\MenuItem>
     */
    public function getItems(): Collection
    {
        return collect($this->items);
    }

    /**
     * Merge menu with another menu.
     */
    public function merge(Menu $menu): static
    {
        $this->items = array_merge($this->items, $menu->items);

        return $this;
    }

    public function toView(): array
    {
        return $this->items;
    }

    /**
     * Create new instance of the Menu.
     */
    public static function make(): static
    {
        return new static;
    }
}
