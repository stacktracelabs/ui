<?php


namespace StackTrace\Ui\Table;


use Closure;
use StackTrace\Ui\Icon;

abstract class BaseAction
{
    /**
     * The action label.
     */
    protected ?string $label = null;

    /**
     * Determine if the action can be run.
     */
    protected Closure|bool $canRun = true;

    /**
     * Flag whether the action can be run in bulk.
     */
    protected bool $bulk = false;

    /**
     * Flag whether action is displayed inline.
     */
    protected bool $inline = false;

    /**
     * The icon of the action.
     */
    protected ?string $icon = null;

    /**
     * Set the icon to be inline.
     */
    public function inline(bool $inline = true): static
    {
        $this->inline = $inline;

        return $this;
    }

    /**
     * Set the action icon.
     */
    public function icon(?string $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * Allow action to be run as bulk action.
     */
    public function bulk(bool $bulk = true): static
    {
        $this->bulk = $bulk;

        return $this;
    }

    /**
     * Set custom callback whether action can be run.
     */
    public function can(Closure|bool $canRun): static
    {
        $this->canRun = $canRun;

        return $this;
    }

    /**
     * Determine whether action can be run for given resource.
     */
    protected function isRunnable(mixed $resource): bool
    {
        return $this->canRun instanceof Closure
            ? call_user_func($this->canRun, $resource)
            : $this->canRun;
    }

    /**
     * Determine whether action is an inline action.
     */
    public function isInline(): bool
    {
        return $this->inline;
    }

    /**
     * Retrieve label of the action.
     */
    public function getLabel(): ?string
    {
        return $this->label;
    }

    /**
     * Retrieve the action icon.
     */
    public function getIcon(): ?Icon
    {
        return $this->icon ? new Icon($this->icon) : null;
    }

    /**
     * Retrieve the action type.
     */
    protected abstract function getType(): string;

    public function toView(mixed $resource): array
    {
        return [
            'type' => $this->getType(),
            'label' => $this->getLabel(),
            'icon' => $this->getIcon(),
            'canRun' => $this->isRunnable($resource),
            'isBulk' => $this->bulk,
            'isInline' => $this->inline,
        ];
    }

    /**
     * Create new instance of action.
     */
    public static function make(): static
    {
        return new static(...func_get_args());
    }
}
