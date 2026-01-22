<?php


namespace StackTrace\Ui;


use Closure;

class Link
{
    /**
     * Determine whether the link should be displayed.
     */
    protected Closure|bool $show = true;

    public function __construct(
        public readonly string $url,
        public readonly bool $isExternal = false
    ) { }

    /**
     * Determine if the link should be visible.
     */
    public function show(Closure|bool $show): static
    {
        $this->show = $show;

        return $this;
    }

    /**
     * Determine whether the link should be displayed.
     */
    public function shouldShow(mixed $resource, mixed $value): bool
    {
        if ($this->show instanceof Closure) {
            return call_user_func($this->show, $resource, $value);
        }

        return $this->show;
    }

    /**
     * Create new link to given destination.
     */
    public static function to(string $url, bool $isExternal = false): static
    {
        return new static($url, $isExternal);
    }
}
