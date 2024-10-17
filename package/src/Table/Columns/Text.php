<?php


namespace StackTrace\Ui\Table\Columns;


use Closure;
use StackTrace\Ui\Table\Column;
use StackTrace\Ui\Table\Wrappable;

class Text extends Column implements Wrappable
{
    /**
     * Text font weight.
     */
    protected ?string $fontWeight = 'normal';

    /**
     * Set whitespace to no-wrap.
     */
    protected bool $noWrap = false;

    protected bool $asChild = true;

    protected ?Closure $displayUsing = null;

    protected bool $tabularNums = false;

    public function tabularNums(bool $tabularNums = true): static
    {
        $this->tabularNums = $tabularNums;

        return $this;
    }

    public function displayUsing(Closure $closure): static
    {
        $this->displayUsing = $closure;

        return $this;
    }

    /**
     * Set whitespace to no-wrap.
     */
    public function noWrap(bool $noWrap = true): static
    {
        $this->noWrap = $noWrap;

        return $this;
    }

    /**
     * Set font weight to normal.
     */
    public function normal(): static
    {
        $this->fontWeight = 'normal';

        return $this;
    }

    /**
     * Set font weight to bold.
     */
    public function bold(): static
    {
        $this->fontWeight = 'bold';

        return $this;
    }

    /**
     * Set font weight to medium.
     */
    public function medium(): static
    {
        $this->fontWeight = 'medium';

        return $this;
    }

    /**
     * Retrieve displayed text value.
     */
    protected function toDisplayValue($value): mixed
    {
        if ($this->displayUsing instanceof Closure) {
            return call_user_func($this->displayUsing, $value);
        }

        return $value;
    }

    public function toView($value): array
    {
        return [
            'value' => $this->toDisplayValue($value),
            'fontWeight' => $this->fontWeight,
            'noWrap' => $this->noWrap,
            'tabularNums' => $this->tabularNums,
        ];
    }

    public function shouldWrap(): bool
    {
        return ! $this->noWrap;
    }

    public function component(): string
    {
        return 'DataTable::Columns/Text';
    }
}
