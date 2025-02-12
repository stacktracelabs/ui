<?php


namespace StackTrace\Ui\Table;


class TableActions implements Renderable
{
    public function __construct(
        protected ActionCollection $actions,
        protected mixed $resource,
    ) { }

    public function render(): array
    {
        $row = $this->actions->getRowActions();
        $inline = $this->actions->getInlineActions();

        return [
            'row' => $row->map(fn (BaseAction $action, string $name) => [
                'name' => $name,
                ...$action->toView($this->resource),
            ])->values(),
            'inline' => $inline->map(fn (BaseAction $action, string $name) => [
                'name' => $name,
                ...$action->toView($this->resource),
            ])->values(),
        ];
    }

}
