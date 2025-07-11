<?php


namespace StackTrace\Ui\Table\Actions;


use Closure;
use StackTrace\Ui\Table\BaseAction;

class Link extends BaseAction
{
    public function __construct(
        string $label,
        protected string|Closure $url,
        protected bool           $external = false,
    )
    {
        $this->label = $label;
    }

    /**
     * Set link as internal.
     */
    public function internal(bool $internal = true): static
    {
        return $this->external(! $internal);
    }

    /**
     * Set link as external.
     */
    public function external(bool $external = true): static
    {
        $this->external = $external;

        return $this;
    }

    public function getType(): string
    {
        return 'Link';
    }

    public function toView(mixed $resource): array
    {
        return [
            ...parent::toView($resource),
            'url' => $this->url instanceof Closure ? call_user_func($this->url, $resource) : $this->url,
            'isExternal' => $this->external,
        ];
    }
}
