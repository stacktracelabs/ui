<?php


namespace StackTrace\Ui\Table\Columns;


use Closure;

class Link extends Text
{
    protected bool $internal = true;

    protected string|Closure|null $href = null;

    protected ?string $target = null;

    public function __construct(string $name, string|Closure $label, string|Closure $url)
    {
        parent::__construct($name, fn ($value) => $value);

        $this->displayUsing($label)->url($url);
    }

    public function blank(): static
    {
        $this->target = '_blank';

        return $this;
    }

    public function url(string|Closure|null $href): static
    {
        $this->href = $href;

        return $this;
    }

    public function internal(bool $internal = true): static
    {
        $this->internal = $internal;

        return $this;
    }

    public function external(bool $external = true): static
    {
        return $this->internal(! $external);
    }

    public function toView($value): array
    {
        return [
            ...parent::toView($value),
            'href' => $this->href instanceof Closure
                ? call_user_func($this->href, $value)
                : $this->href,
            'external' => ! $this->internal,
            'target' => $this->target,
        ];
    }

    public function component(): string
    {
        return 'DataTable::Columns/Link';
    }
}
