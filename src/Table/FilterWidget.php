<?php


namespace StackTrace\Ui\Table;


use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use Illuminate\Support\Traits\Conditionable;

abstract class FilterWidget
{
    use Conditionable;

    /**
     * The filter name.
     */
    protected ?string $name = null;

    /**
     * A custom callback for applying filter value.
     */
    protected ?Closure $applyUsing = null;

    /**
     * Determine whether filter should be displayed.
     */
    protected ?Closure $displayWhen = null;

    /**
     * A custom callback for applying filter when filter has no value.
     */
    protected ?Closure $fallbackUsing = null;

    /**
     * The table ID for parameter prefixing.
     */
    protected ?string $tableId = null;

    /**
     * Set the filter name.
     */
    public function name(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Retrieve the filter name.
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * Set the table ID for parameter prefixing.
     */
    public function setTableId(?string $tableId): static
    {
        $this->tableId = $tableId;

        return $this;
    }

    /**
     * Get the table ID.
     */
    public function getTableId(): ?string
    {
        return $this->tableId;
    }

    /**
     * Prefix a single key with the table ID.
     */
    protected function prefixKey(string $key): string
    {
        if (!$this->tableId) {
            return $key;
        }
        return "table_{$this->tableId}_{$key}";
    }

    /**
     * Get the list of keys that should be prefixed in toView().
     */
    protected function getFieldKeysForPrefixing(): array
    {
        return ['field', 'fieldFrom', 'fieldUntil'];
    }

    /**
     * Set condition whether widget should be displayed.
     */
    public function displayWhen(?Closure $closure): static
    {
        $this->displayWhen = $closure;

        return $this;
    }

    /**
     * Set conditing whether widget should be displayed.
     */
    public function displayUnless(?Closure $closure): static
    {
        return $this->displayWhen(fn () => ! call_user_func($closure, ...func_get_args()));
    }

    /**
     * Set custom filter application callback.
     */
    public function using(Closure $closure): static
    {
        $this->applyUsing = $closure;

        return $this;
    }

    /**
     * Set a fallback filter callback when filter does not have a value.
     */
    public function fallback(Closure $closure): static
    {
        $this->fallbackUsing = $closure;

        return $this;
    }

    /**
     * Run given filter widget.
     */
    public function filter(mixed $source): array
    {
        $value = $this->value();

        if (! $value) {
            if ($this->fallbackUsing instanceof Closure) {
                if ($result = call_user_func($this->fallbackUsing, $source)) {
                    return [$result, false];
                }

                return [$source, false];
            }

            return [$source, false];
        }

        if ($this->applyUsing instanceof Closure) {
            if ($result = call_user_func($this->applyUsing, $source, $value)) {
                return [$result, true];
            }

            return [$source, true];
        }

        if ($source instanceof Builder) {
            $this->applyOnBuilder($source, $value);

            return [$source, true];
        } else if ($source instanceof Collection) {
            return [$this->applyOnCollection($source, $value), true];
        }

        return [$source, false];
    }

    /**
     * Applies filter on query builder.
     */
    protected function applyOnBuilder(Builder $builder, mixed $value): void
    {
        //
    }

    /**
     * Applies filter on collection.
     */
    protected function applyOnCollection(Collection $collection, mixed $value): Collection
    {
        return $collection;
    }

    /**
     * Determine whether this widget should be displayed.
     */
    public function shouldDisplay(Filter $filter): bool
    {
        if ($this->displayWhen instanceof Closure) {
            return call_user_func($this->displayWhen, $filter);
        }

        return true;
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
     * Get the default value with automatic prefixing based on tableId.
     */
    public function getDefaultValueWithPrefix(): array
    {
        $value = $this->defaultValue();
        
        if (!$this->tableId) {
            return $value;
        }
        
        $prefixed = [];
        foreach ($value as $key => $val) {
            $prefixed[$this->prefixKey($key)] = $val;
        }
        return $prefixed;
    }

    /**
     * Get the view data with automatic prefixing based on tableId.
     */
    public function getViewWithPrefix(): array
    {
        $view = $this->toView();
        
        if (!$this->tableId) {
            return $view;
        }
        
        $fieldKeys = $this->getFieldKeysForPrefixing();
        
        $prefixed = [];
        foreach ($view as $key => $value) {
            if (in_array($key, $fieldKeys) && is_string($value)) {
                $prefixed[$key] = $this->prefixKey($value);
            } else {
                $prefixed[$key] = $value;
            }
        }
        return $prefixed;
    }

    /**
     * Create new instance of filter.
     */
    public static function make(): static
    {
        return new static(...func_get_args());
    }
}
