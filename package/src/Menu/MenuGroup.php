<?php


namespace StackTrace\Ui\Menu;


use StackTrace\Ui\Icon;
use StackTrace\Ui\ViewModel;

class MenuGroup extends ViewModel
{
    public function __construct(
        protected ?string $id = null,
        protected ?string $title = null,
        protected ?Icon   $icon = null,
        protected array   $items = [],
    ) { }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'items' => collect($this->items)->map(fn (MenuItem|MenuGroup $item) => [
                'item' => $item,
                'type' => $item instanceof MenuGroup ? 'group' : 'item',
            ]),
        ];
    }
}
