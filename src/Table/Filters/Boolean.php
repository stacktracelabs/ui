<?php


namespace StackTrace\Ui\Table\Filters;


use Illuminate\Support\Facades\Request;
use StackTrace\Ui\Table\FilterWidget;

class Boolean extends FilterWidget
{
    public function __construct(
        protected string $title,
        protected string $field
    ) { }

    public function value(): mixed
    {
        return Request::boolean($this->field);
    }

    public function defaultValue(): array
    {
        return [
            $this->field => false,
        ];
    }

    public function component(): string
    {
        return 'DataTable::Filters/Checkbox';
    }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'field' => $this->field,
        ];
    }
}
