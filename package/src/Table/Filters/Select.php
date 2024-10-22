<?php

namespace StackTrace\Ui\Table\Filters;

use Closure;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Request;
use StackTrace\Ui\SelectOption;
use StackTrace\Ui\Table\FilterWidget;

class Select extends FilterWidget
{
    public function __construct(
        protected string $title,
        protected string $field,
        protected array|Closure|Collection $options,
    ) { }

    public function value(): mixed
    {
        $values = Request::input($this->field);

        if (is_null($values)) {
            return null;
        }

        $options = $this->getOptions();

        $values = collect(Arr::wrap($values))->map(function ($val) use ($options) {
            if ($option = $options->first(fn (SelectOption $option) => $option->value == $val)) {
                return $option;
            }

            return null;
        })->filter()->values();

        return $values->isEmpty() ? null : $values->all();
    }

    public function defaultValue(): array
    {
        return [
            $this->field => null,
        ];
    }

    public function component(): string
    {
        return 'DataTable::Filters/MultiSelect';
    }

    protected function getOptions(): Collection
    {
        if ($this->options instanceof Closure) {
            return Collection::wrap(call_user_func($this->options, $this));
        }

        return Collection::wrap($this->options);
    }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'field' => $this->field,
            'options' => $this->getOptions(),
        ];
    }
}
