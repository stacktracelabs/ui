<?php


namespace StackTrace\Ui\Breadcrumbs;


use StackTrace\Ui\Link;
use StackTrace\Ui\ViewModel;

class BreadcrumbItem extends ViewModel
{
    public function __construct(
        protected string $title,
        protected ?Link $action = null,
    ) { }

    /**
     * Set the item title.
     */
    public function title(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Set the item action.
     */
    public function action(?Link $action): static
    {
        $this->action = $action;

        return $this;
    }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'action' => $this->action instanceof Link ? [
                'type' => 'link',
                'link' => [
                    'url' => $this->action->url,
                    'external' => $this->action->isExternal,
                ]
            ] : null,
        ];
    }

    /**
     * Create new breadcrumb item.
     */
    public static function make(string $title, ?Link $action = null): static
    {
        return new static($title, $action);
    }
}
