<?php


namespace StackTrace\Ui\Table\Columns;


use StackTrace\Ui\Table\Column;

class Icon extends Column
{
    /**
     * The size of the icon.
     */
    protected int $size = 1;

    /**
     * Set the size of the icon in REM units.
     */
    public function size(int $size): static
    {
        $this->size = $size;

        return $this;
    }

    public function toView($value, $resource): array
    {
        return [
            'icon' => new \StackTrace\Ui\Icon($value),
            'size' => $this->size,
        ];
    }

    public function component(): string
    {
        return 'DataTable::Columns/Icon';
    }
}
