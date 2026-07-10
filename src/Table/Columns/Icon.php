<?php


namespace StackTrace\Ui\Table\Columns;


use StackTrace\Ui\Table\Column;

class Icon extends Column
{
    /**
     * The size of the icon.
     */
    protected float $size = 1.0;

    /**
     * Set the size of the icon in REM units.
     */
    public function size(float $size): static
    {
        $this->size = $size;

        return $this;
    }

    public function toView($value, $resource): array
    {
        if ($value instanceof \StackTrace\Ui\Icon) {
            $src = $value->content();
        } else {
            $src = (new \StackTrace\Ui\Icon($value))->content();
        }

        return [
            'src' => $src,
            'size' => $this->size,
        ];
    }

    public function component(): string
    {
        return 'DataTable::Columns/Icon';
    }
}
