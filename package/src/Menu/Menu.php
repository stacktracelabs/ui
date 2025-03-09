<?php


namespace StackTrace\Ui\Menu;


use StackTrace\Ui\ViewModel;

class Menu extends ViewModel
{
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

    public function toView(): array
    {
        return [
            'navigations' => $this->navigations,
        ];
    }
}
