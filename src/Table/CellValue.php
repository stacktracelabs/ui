<?php


namespace StackTrace\Ui\Table;


class CellValue
{
    public function __construct(
        public readonly mixed $value,
    ) { }

    public static function warp(mixed $value): static
    {
        if ($value instanceof CellValue) {
            return $value;
        }

        return new static($value);
    }
}
