<?php


namespace StackTrace\Ui\Table\Columns;


use Closure;
use StackTrace\Ui\Contracts\HasLabel;
use StackTrace\Ui\Table\Column;

class Text extends Column
{
    protected ?Closure $displayUsing = null;

    public function displayUsing(Closure $closure): static
    {
        $this->displayUsing = $closure;

        return $this;
    }

    /**
     * Retrieve displayed text value.
     */
    protected function toDisplayValue($value): mixed
    {
        if ($this->displayUsing instanceof Closure) {
            return call_user_func($this->displayUsing, $value);
        } else if ($value instanceof HasLabel) {
            return $value->label();
        }

        return $value;
    }

    public function toView($value, $resource): array
    {
        return [
            'value' => $this->toDisplayValue($value),
        ];
    }

    public function component(): string
    {
        return 'DataTable::Columns/Text';
    }
}
