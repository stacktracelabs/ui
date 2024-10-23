<?php


namespace StackTrace\Ui\Table;


use Closure;

abstract class BaseAction
{
    /**
     * The action label.
     */
    protected string $label;

    protected Closure|bool $canRun = true;

    protected bool $bulk = false;

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

    protected abstract function getType(): string;

    public function toView(mixed $resource): array
    {
        return [
            'type' => $this->getType(),
            'label' => $this->label,
            'canRun' => $this->isRunnable($resource),
            'isBulk' => $this->bulk,
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
