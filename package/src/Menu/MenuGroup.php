<?php


namespace StackTrace\Ui\Menu;


use Illuminate\Support\Collection;
use Illuminate\Support\Traits\Conditionable;
use StackTrace\Ui\Icon;
use StackTrace\Ui\ViewModel;

class MenuGroup extends ViewModel
{
    use Conditionable;

    public function __construct(
        protected ?string $id = null,
        protected ?string $title = null,
        protected ?Icon   $icon = null,
        protected array   $items = [],
    ) { }

    /**
     * Add item to the menu group.
     */
    public function add(MenuItem|MenuGroup $item): static
    {
        $this->items[] = $item;

        return $this;
    }

    /**
     * Add menu to the group if the given "value" is (or resolves to) truthy.
     */
    public function addWhen($value, MenuItem|MenuGroup $menu): static
    {
        return $this->when($value, fn (MenuGroup $group) => $group->add($menu));
    }

    /**
     * Add menu to the group if the given "value" is (or resolves to) falsy.
     */
    public function addUnless($value, MenuItem|MenuGroup $menu): static
    {
        return $this->unless($value, fn (MenuGroup $group) => $group->add($menu));
    }

    /**
     * Retrieve all items within the menu.
     *
     * @return \Illuminate\Support\Collection<int, \StackTrace\Ui\Menu\MenuItem|\StackTrace\Ui\Menu\MenuGroup>
     */
    public function getItems(): Collection
    {
        return collect($this->items);
    }

    /**
     * Retrieve id of the group.
     */
    public function getId(): ?string
    {
        return $this->id;
    }

    /**
     * Retrieve title of the group.
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * Retrieve icon of the group.
     */
    public function getIcon(): ?Icon
    {
        return $this->icon;
    }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'items' => collect($this->items)->map(fn (MenuItem|MenuGroup $item) => [
                'item' => $item,
                'type' => $item instanceof MenuGroup ? 'group' : 'item',
            ]),
            'icon' => $this->icon,
        ];
    }

    /**
     * Create new instance of the menu group.
     */
    public static function make(?string $id = null, ?string $title = null, ?Icon $icon = null): static
    {
        return new static($id, $title, $icon);
    }
}
