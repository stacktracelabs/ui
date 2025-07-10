<?php


namespace StackTrace\Ui\Table\Columns;


use BackedEnum;
use Closure;
use Illuminate\Support\Arr;
use StackTrace\Ui\Table\Column;

class Badge extends Column
{
    /**
     * Status label mapping.
     */
    protected array|Closure|string $label = [];

    /**
     * Status variant mapping.
     */
    protected array|Closure|string $variant = 'default';

    public function toView($value, $resource): array
    {
        $textValue = $value instanceof BackedEnum
            ? $value->value
            : $value;

        if ($this->label instanceof Closure) {
            $label = call_user_func($this->label, $value);
        } else if (is_array($this->label)) {
            $label = Arr::get($this->label, $textValue);
        } else {
            $label = $this->label;
        }

        if ($this->variant instanceof Closure) {
            $variant = call_user_func($this->variant, $value);
        } else if (is_array($this->variant)) {
            $variant = Arr::get($this->variant, $textValue);
        } else {
            $variant = $this->variant;
        }

        return [
            'text' => $label,
            'variant' => $variant,
        ];
    }

    /**
     * Set the label of the badge.
     */
    public function label(array|Closure|string $label): static
    {
        $this->label = $label;

        return $this;
    }

    /**
     * Set the variant of the badge.
     */
    public function variant(array|Closure|string $variant): static
    {
        $this->variant = $variant;

        return $this;
    }

    public function component(): string
    {
        return 'DataTable::Columns/Badge';
    }
}
