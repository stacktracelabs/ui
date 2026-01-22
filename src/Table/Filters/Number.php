<?php


namespace StackTrace\Ui\Table\Filters;


use Illuminate\Support\Facades\Request;
use StackTrace\Ui\NumberValue;
use StackTrace\Ui\Operator;
use StackTrace\Ui\Table\FilterWidget;

class Number extends FilterWidget
{
    public function __construct(
        protected string $title,
        protected string $field,
    ) { }

    public function value(): mixed
    {
        $input = Request::input($this->field);

        if (! is_string($input)) {
            return null;
        }

        $parts = explode(':', $input);

        if (count($parts) == 2) {
            $operator = Operator::tryFrom($parts[0]);
            $value = is_numeric($parts[1]) ? $parts[1] : null;

            if ($operator && $operator->isSingleValue() && $value !== null) {
                return new NumberValue($operator, $value);
            }
        } else if (count($parts) == 3) {
            $operator = Operator::tryFrom($parts[0]);
            $value1 = is_numeric($parts[1]) ? $parts[1] : null;
            $value2 = is_numeric($parts[2]) ? $parts[2] : null;

            if ($operator && ! $operator->isSingleValue() && $value1 !== null && $value2 !== null) {
                return new NumberValue($operator, $value1, $value2);
            }
        }

        return null;
    }

    public function defaultValue(): array
    {
        return [
            $this->field => null,
        ];
    }

    public function component(): string
    {
        return 'DataTable::Filters/NumberValue';
    }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'field' => $this->field,
        ];
    }
}
