<?php


namespace StackTrace\Ui\Table;


use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Illuminate\Support\Traits\Conditionable;

class ColumnCollection
{
    use Conditionable;

    /**
     * List of columns.
     */
    protected array $columns = [];

    /**
     * Add a column to the collection.
     */
    public function add(Column $column): static
    {
        $this->columns[$this->resolveColumnName($column, count($this->columns) + 1)] = $column;

        return $this;
    }

    /**
     * Remove column from collection.
     */
    public function remove(string $name): static
    {
        if (Arr::has($this->columns, $name)) {
            Arr::forget($this->columns, $name);
        }

        return $this;
    }

    protected function resolveColumnName(Column $column, int $position): string
    {
        return $column->getName() ?: 'col-'.str_pad(''.$position, 2, '0', STR_PAD_LEFT).'-'.Str::of($column->getTitle())->ascii()->kebab();
    }

    /**
     * Add a column after another column.
     */
    public function after(string $name, Column $column): static
    {
        if (array_key_exists($name, $this->columns)) {
            $collection = new static;

            foreach ($this->columns as $key => $col) {
                $collection->add($col);

                if ($key == $name) {
                    $collection->add($column);
                }
            }

            $this->columns = $collection->columns;
        } else {
            $this->add($column);
        }

        return $this;
    }

    /**
     * Retrieve all columns in the collection.
     */
    public function all(): Collection
    {
        return collect($this->columns);
    }

    /**
     * Craete column collection from array or Collection.
     */
    public static function of(array|Collection $columns): static
    {
        $collection = new static;

        foreach (Collection::wrap($columns)->all() as $column) {
            $collection->add($column);
        }

        return $collection;
    }
}
