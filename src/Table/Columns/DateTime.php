<?php


namespace StackTrace\Ui\Table\Columns;


use Carbon\Carbon;
use Closure;
use StackTrace\Ui\Table\Align;

class DateTime extends Text
{
    /**
     * The date format.
     */
    protected string $format = 'd.m.Y H:i';

    public function __construct(string $name, string|Closure|null $attribute = null)
    {
        parent::__construct($name, $attribute);

        $this->algin(Align::Right)->width(40)->noWrap()->tabularNums();
    }

    /**
     * Set the date format.
     */
    public function format(string $format): static
    {
        $this->format = $format;

        return $this;
    }

    protected function toDisplayValue($value): mixed
    {
        if ($value instanceof Carbon) {
            return $value->format($this->format);
        }

        return parent::toDisplayValue($value);
    }
}
