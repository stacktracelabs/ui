<?php


namespace StackTrace\Ui\Menu;


use Illuminate\Support\Collection;
use Illuminate\Support\Traits\Conditionable;
use StackTrace\Ui\ViewModel;

class Menu extends ViewModel
{
    use Conditionable;

    /**
     * List of navigations within menu.
     *
     * @var array<\StackTrace\Ui\Menu\MenuGroup>
     */
    protected array $navigations = [];

    /**
     * Add navigation to the menu.
     */
    public function add(MenuGroup $navigation): static
    {
        $this->navigations[] = $navigation;

        return $this;
    }

    /**
     * Add navigation to the menu if the given "value" is (or resolves to) truthy.
     */
    public function addWhen($value, MenuGroup $navigation): static
    {
        return $this->when($value, fn (Menu $menu) => $menu->add($navigation));
    }

    /**
     * Add navigation to the menu if the given "value" is (or resolves to) falsy.
     */
    public function addUnless($value, MenuGroup $navigation): static
    {
        return $this->unless($value, fn (Menu $menu) => $menu->add($navigation));
    }

    /**
     * Find navigation by its identifier.
     */
    public function find(string $id): ?MenuGroup
    {
        return $this->all()->firstWhere('id', $id);
    }

    /**
     * Retrieve all navigations within menu.
     *
     * @return Collection<int, \StackTrace\Ui\Menu\MenuGroup>
     */
    public function all(): Collection
    {
        return collect($this->navigations);
    }

    /**
     * Merge menu with another menu.
     */
    public function merge(Menu $menu): static
    {
        $this->navigations = array_merge($this->navigations, $menu->navigations);

        return $this;
    }

    public function toView(): array
    {
        return [
            'navigations' => $this->navigations,
        ];
    }

    /**
     * Create new instance of the Menu.
     */
    public static function make(): static
    {
        return new static;
    }
}
