<?php


namespace StackTrace\Ui\Table;


use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

abstract class Column
{
    /**
     * Horizonal alignment of the cell value.
     */
    protected Align $align = Align::Left;

    /**
     * Vertical alignment of the cell value.
     */
    protected VerticalAlign $verticalAlign = VerticalAlign::Middle;

    /**
     * Width of the column.
     */
    protected ?string $width = null;

    /**
     * Min width of the column.
     */
    protected ?string $minWidth = null;

    /**
     * Max width of the column
     */
    protected ?string $maxWidth = null;

    /**
     * Determine whether component should be displayed as child.
     */
    protected bool $asChild = false;

    /**
     * Sortable callback for the column.
     */
    protected Closure|string|null $sortableUsing = null;

    /**
     * Default sorting direction.
     */
    protected ?Direction $defaultDirection = null;

    /**
     * The name of the sorting if it is different than column.
     */
    protected ?string $sortingName = null;

    /**
     * The name of the column.
     */
    protected ?string $name = null;

    public function __construct(
        protected string              $title,
        protected string|null|Closure $attribute = null,
    ) { }

    /**
     * Set column as sortable.
     */
    public function sortable(Closure|string $using = null, ?Direction $default = null, ?string $named = null): static
    {
        if (is_null($using) && !is_string($this->attribute)) {
            throw new \RuntimeException("Using must be specified when attribute is not set.");
        } else if (is_null($using) && is_string($this->attribute)) {
            $this->sortableUsing = $this->attribute;
        } else {
            $this->sortableUsing = $using;
        }

        $this->defaultDirection = $default;
        $this->sortingName = $named;

        return $this;
    }

    /**
     * Set width of the column.
     */
    public function width(string|int|null $width): static
    {
        if (is_numeric($width)) {
            $this->width = ($width / 4).'rem';
        } else {
            $this->width = $width;
        }

        return $this;
    }

    /**
     * Set width of the column.
     */
    public function minWidth(string|int|null $width): static
    {
        if (is_numeric($width)) {
            $this->minWidth = ($width / 4).'rem';
        } else {
            $this->minWidth = $width;
        }

        return $this;
    }

    /**
     * Set width of the column.
     */
    public function maxWidth(string|int|null $width): static
    {
        if (is_numeric($width)) {
            $this->maxWidth = ($width / 4).'rem';
        } else {
            $this->maxWidth = $width;
        }

        return $this;
    }

    /**
     * Retrieve column width.
     */
    public function getWidth(): ?string
    {
        return $this->width;
    }

    /**
     * Retrieve min width of the column.
     */
    public function getMinWidth(): ?string
    {
        return $this->minWidth;
    }

    /**
     * Retrieve max width of the column.
     */
    public function getMaxWidth(): ?string
    {
        return $this->maxWidth;
    }

    /**
     * Set horizontal alignment of the cell.
     */
    public function algin(Align $align): static
    {
        $this->align = $align;

        return $this;
    }

    /**
     * Retrieve horizontal alignment of the cell.
     */
    public function getAlignment(): Align
    {
        return $this->align;
    }

    /**
     * Set vertical alignment of the cell.
     */
    public function verticalAlign(VerticalAlign $align): static
    {
        $this->verticalAlign = $align;

        return $this;
    }

    /**
     * Retrieve vertical alginment of the cell.
     */
    public function getVerticalAlignment(): VerticalAlign
    {
        return $this->verticalAlign;
    }

    /**
     * Resolve value of the column from the resource.
     */
    public function resolveValue($resource): mixed
    {
        $attribute = $this->getAttribute();

        if ($this->attribute instanceof Closure) {
            return call_user_func($attribute, $resource);
        }

        if ($resource instanceof Model) {
            return $resource->$attribute;
        }

        if (is_array($resource)) {
            return Arr::get($resource, $attribute);
        }

        return null;
    }

    /**
     * Retrieve attribute name.
     */
    protected function getAttribute(): string|Closure
    {
        if ($this->attribute instanceof Closure) {
            return $this->attribute;
        }

        if (is_string($this->attribute)) {
            return $this->attribute;
        }

        return Str::snake($this->title);
    }

    /**
     * Retrieve column title.
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * Set the column title.
     */
    public function title(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Retrieve column name.
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * Set the column name.
     */
    public function name(?string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Determine whether component should be displayed as child.
     */
    public function shouldDisplayAsChild(): bool
    {
        return $this->asChild;
    }

    /**
     * Retrieve component props.
     */
    public abstract function toView($value): array;

    /**
     * Retrieve name of the component to render.
     */
    public abstract function component(): string;

    /**
     * Determine whether column has default sorting.
     */
    public function hasDefaultSorting(): bool
    {
        if (is_null($this->sortableUsing)) {
            return false;
        }

        return $this->defaultDirection != null;
    }

    /**
     * Applies sorting on the source using callback.
     */
    public function applySorting(mixed $source, Direction $direction): mixed
    {
        if (is_string($this->sortableUsing) && $source instanceof Builder) {
            return $source->orderBy($this->sortableUsing, $direction->value);
        } else if ($this->sortableUsing instanceof Closure) {
            if ($result = call_user_func($this->sortableUsing, $source, $direction)) {
                return $result;
            }
        }

        return $source;
    }

    /**
     * Retrieve default sort direction.
     */
    public function getDefaultSortDirection(): ?Direction
    {
        return $this->defaultDirection;
    }

    /**
     * Retrieve name of the sorting for the column.
     */
    public function getSortableAs(): ?string
    {
        if (is_null($this->sortableUsing)) {
            return null;
        }

        if ($this->sortableUsing instanceof Closure && is_null($this->sortingName)) {
            throw new \RuntimeException("Unable to determine sorting name.");
        }

        if ($this->sortableUsing instanceof Closure) {
            return $this->sortingName;
        }

        return $this->sortableUsing;
    }

    /**
     * Create new instance of column.
     */
    public static function make(): static
    {
        return new static(...func_get_args());
    }
}
