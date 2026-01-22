<?php

namespace StackTrace\Ui\Table\Filters;

use BackedEnum;
use Closure;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Str;
use StackTrace\Ui\Contracts\HasLabel;
use StackTrace\Ui\SelectOption;
use StackTrace\Ui\Table\FilterWidget;

class Enum extends FilterWidget
{
    /**
     * Custom labels for enums.
     */
    protected Closure|array|null $labels = null;

    public function __construct(
        protected string $title,
        protected string $enum,
        protected string $field,
    ) { }

    /**
     * Set label mapping for enum values.
     */
    public function labels(Closure|array $labels): static
    {
        $this->labels = $labels;

        return $this;
    }

    public function value(): mixed
    {
        $values = Request::input($this->field);

        if (is_null($values)) {
            return null;
        }

        $values = collect(Arr::wrap($values))->map(function ($val) {
            if (is_string($val) || is_numeric($val)) {
                return $this->enum::tryFrom($val);
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
        return collect($this->enum::cases())->map(function (BackedEnum $enum) {
            if (is_array($this->labels)) {
                return new SelectOption(
                    label: Arr::get($this->labels, $enum->value),
                    value: $enum->value
                );
            } else if ($this->labels instanceof Closure) {
                return new SelectOption(
                    label: call_user_func($this->labels, $enum),
                    value: $enum->value
                );
            } else if ($enum instanceof HasLabel) {
                return new SelectOption($enum->label(), $enum->value);
            } else {
                return new SelectOption(Str::headline($enum->name), $enum->value);
            }
        });
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
