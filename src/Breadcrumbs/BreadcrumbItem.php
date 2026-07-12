<?php

namespace StackTrace\Ui\Breadcrumbs;

use Inertia\PropertyContext;
use Inertia\ProvidesInertiaProperty;
use StackTrace\Ui\Link;

class BreadcrumbItem implements ProvidesInertiaProperty
{
    public function __construct(
        protected string $title,
        protected ?Link $action = null,
    ) {}

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
                'url' => $this->action->url,
                'external' => $this->action->isExternal,
            ] : null,
        ];
    }

    public function toInertiaProperty(PropertyContext $prop): mixed
    {
        return $this->toView();
    }

    /**
     * Create new breadcrumb item.
     */
    public static function make(string $title, ?Link $action = null): static
    {
        return new static($title, $action);
    }
}
