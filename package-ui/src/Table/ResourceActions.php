<?php


namespace StackTrace\Ui\Table;


use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class ResourceActions implements Renderable, JsonSerializable, Arrayable
{
    public function __construct(
        protected ActionCollection $actions,
        protected Resource $resource,
    ) { }

    public function render(): array
    {
        return [
            'actions' => $this->actions->all()->map(fn (BaseAction $action, string $name) => [
                'name' => $name,
                ...$action->toView($this->resource->getResource()),
            ])->values()->all(),
            'resource' => $this->resource->render(),
        ];
    }

    public function toArray()
    {
        return $this->render();
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }
}
