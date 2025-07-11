<?php


namespace StackTrace\Ui\Table;


use Closure;
use Illuminate\Database\Eloquent\Model;
use RuntimeException;

class Resource implements Renderable
{
    /**
     * Custom callback for resolving resource value.
     */
    protected ?Closure $mapUsing = null;

    /**
     * Custom callback for resolving resource key.
     */
    protected ?Closure $keyUsing = null;

    /**
     * Determine whether value should be included in the response.
     */
    protected bool $includeValue = false;

    public function __construct(
        protected mixed $resource,
    ) { }

    /**
     * Map resource value using callback.
     */
    public function map(?Closure $using): static
    {
        $this->mapUsing = $using;

        $this->includeValue = $using instanceof Closure;

        return $this;
    }

    /**
     * Set custom callback for resolving resource key.
     */
    public function keyBy(?Closure $using): static
    {
        $this->keyUsing = $using;

        return $this;
    }

    /**
     * Include value in the rendered resource.
     */
    public function withValue(bool $includeValue = true): static
    {
        $this->includeValue = $includeValue;

        return $this;
    }

    /**
     * Resolve the resource key.
     */
    public function getKey(): string|int
    {
        if ($this->keyUsing instanceof Closure) {
            return call_user_func($this->keyUsing, $this->resource);
        }

        if ($this->resource instanceof Model) {
            return $this->resource->getKey();
        }

        throw new RuntimeException("Unable to determine resource key.");
    }

    /**
     * Retrieve rendered value of the resource.
     */
    public function getValue(): mixed
    {
        if (! $this->includeValue) {
            return null;
        }

        if ($this->mapUsing instanceof Closure) {
            return call_user_func($this->mapUsing, $this->resource);
        }

        return $this->resource;
    }

    /**
     * Retrieve underlying resource.
     */
    public function getResource(): mixed
    {
        return $this->resource;
    }

    public function render(): array
    {
        return [
            'key' => $this->getKey(),
            'value' => $this->getValue(),
        ];
    }
}
