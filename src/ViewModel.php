<?php

namespace StackTrace\Ui;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Inertia\PropertyContext;
use Inertia\ProvidesInertiaProperty;
use JsonSerializable;

/**
 * @deprecated Implement \Inertia\ProvidesInertiaProperty for a single prop value
 *             or \Inertia\ProvidesInertiaProperties for a set of page props.
 */
abstract class ViewModel implements Arrayable, JsonSerializable, ProvidesInertiaProperty
{
    /**
     * Define props of the view model.
     */
    abstract public function toView(): array;

    /**
     * Format key to camel case.
     */
    private function formatKey(string $key): string
    {
        return Str::camel($key);
    }

    /**
     * Format model attributes.
     */
    private function resolveValue(mixed $value): mixed
    {
        if ($value instanceof UnformattedViewModelData) {
            return $value->data;
        } elseif (is_array($value)) {
            // Convert associative array
            if (Arr::isAssoc($value)) {
                return collect($value)
                    ->mapWithKeys(fn ($val, $key) => [$this->formatKey($key) => $this->resolveValue($val)])
                    ->all();
            } else {
                // Convert regular array
                return collect($value)->map(fn ($val) => $this->resolveValue($val))->all();
            }
        } elseif ($value instanceof Collection) {
            // Convert collection
            return $value->map(fn ($val) => $this->resolveValue($val))->all();
        } elseif ($value instanceof ViewModel) {
            // Convert another view model
            return $this->resolveValue($value->toView());
        }

        return $value;
    }

    public function toArray()
    {
        return $this->resolveValue($this->toView());
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }

    public function toInertiaProperty(PropertyContext $prop): mixed
    {
        return $this->toArray();
    }

    /**
     * Create unformatted view model data.
     *
     * @deprecated Implement \Inertia\ProvidesInertiaProperty directly and return
     *             the keys exactly as they should be sent to the frontend.
     */
    public static function unformatted(array $data): UnformattedViewModelData
    {
        return new UnformattedViewModelData($data);
    }
}
