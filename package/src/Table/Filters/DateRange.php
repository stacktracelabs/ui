<?php


namespace StackTrace\Ui\Table\Filters;


use Illuminate\Support\Facades\Request;
use StackTrace\Ui\DateRange as Range;
use StackTrace\Ui\Table\FilterWidget;
use Throwable;

class DateRange extends FilterWidget
{
    public function __construct(
        protected string $title,
        protected string $field,
    ) { }

    public function value(): mixed
    {
        try {
            $from = Request::date("{$this->field}_from", 'Y-m-d')->startOfDay();
        } catch (Throwable) {
            $from = null;
        }

        try {
            $until = Request::date("{$this->field}_until", "Y-m-d")->endOfDay();
        } catch (Throwable) {
            $until = null;
        }

        if (!$from && !$until) {
            return null;
        }

        if ($from && $until) {
            if ($until->isBefore($from)) {
                return null;
            }

            return new Range($from, $until);
        }

        return new Range($from, $until);
    }

    public function defaultValue(): array
    {
        return [
            "{$this->field}_from" => null,
            "{$this->field}_until" => null,
        ];
    }

    public function component(): string
    {
        return 'DataTable::Filters/DateRange';
    }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'fieldFrom' => "{$this->field}_from",
            'fieldUntil' => "{$this->field}_until",
        ];
    }
}
