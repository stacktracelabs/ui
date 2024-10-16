<?php


namespace StackTrace\Ui\Table;


use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

abstract class FilterWidget
{
    /**
     * A custom callback for applying filter value.
     */
    protected ?Closure $applyUsing = null;

    /**
     * Set custom filter application callback.
     */
    public function using(Closure $closure): static
    {
        $this->applyUsing = $closure;

        return $this;
    }

    /**
     * Run given filter widget.
     */
    public function filter(mixed $source): mixed
    {
        $value = $this->value();

        if (! $value) {
            return $source;
        }

        if ($this->applyUsing instanceof Closure) {
            if ($result = call_user_func($this->applyUsing, $source, $value)) {
                return $result;
            }

            return $source;
        }

        if ($source instanceof Builder) {
            $this->applyOnBuilder($source, $value);
        } else if ($source instanceof Collection) {
            return $this->applyOnCollection($source, $value);
        }

        return $source;
    }

    /**
     * Applies filter on query builder.
     */
    public function applyOnBuilder(Builder $builder, mixed $value): void
    {
        //
    }

    /**
     * Applies filter on collection.
     */
    public function applyOnCollection(Collection $collection, mixed $value): Collection
    {
        return $collection;
    }

    /**
     * Retrieve current filter value.
     */
    public abstract function value(): mixed;

    /**
     * Default value of the filter.
     */
    public abstract function defaultValue(): array;

    /**
     * The filter component name.
     */
    public abstract function component(): string;

    /**
     * Props of the filter component.
     */
    public function toView(): array
    {
        return [];
    }

    /**
     * Create new instance of filter.
     */
    public static function make(): static
    {
        return new static(...func_get_args());
    }
}
