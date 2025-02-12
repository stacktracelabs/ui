<?php


namespace StackTrace\Ui\Table;


use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Illuminate\Support\Traits\Conditionable;

class ActionCollection
{
    use Conditionable;

    /**
     * List of available actions.
     */
    protected array $actions = [];

    /**
     * Filter given list of actions.
     */
    public function filter(?callable $callback = null): static
    {
        return static::of($this->all()->filter($callback));
    }

    /**
     * Retrieve all inline actions.
     *
     * @return \Illuminate\Support\Collection<string, \StackTrace\Ui\Table\BaseAction>
     */
    public function getInlineActions(): Collection
    {
        return $this->all()->filter(fn (BaseAction $action) => $action->isInline());
    }

    /**
     * Retrieve all row actions.
     *
     * @return \Illuminate\Support\Collection<string, \StackTrace\Ui\Table\BaseAction>
     */
    public function getRowActions(): Collection
    {
        return $this->all()->filter(fn (BaseAction $action) => !$action->isInline());
    }

    /**
     * Retrieve all actions in the collection.
     *
     * @return \Illuminate\Support\Collection<string, \StackTrace\Ui\Table\BaseAction>
     */
    public function all(): Collection
    {
        return collect($this->actions);
    }

    /**
     * Add action to the collection.
     */
    public function add(BaseAction $action, ?string $name = null): static
    {
        $this->actions[($name ?: $action->getName()) ?: Str::uuid()->toString()] = $action;

        return $this;
    }

    /**
     * Create new instance of the collection.
     */
    public static function of(Collection|array $actions): static
    {
        $collection = new static;

        foreach (Collection::wrap($actions)->all() as $name => $action) {
            if (is_numeric($name)) {
                $collection->add($action);
            } else {
                $collection->add($action, $name);
            }
        }

        return $collection;
    }
}
