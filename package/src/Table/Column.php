<?php


namespace StackTrace\Ui\Table;


use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use StackTrace\Ui\Link;
use StackTrace\Ui\Table\Concerns\RenderComponents;

abstract class Column
{
    use RenderComponents;

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
     * The name of the sorting if it is different then column.
     */
    protected ?string $sortingName = null;

    /**
     * The name of the column.
     */
    protected ?string $name = null;

    /**
     * The link under the column.
     */
    protected Link|Closure|null $link = null;

    /**
     * Text font weight.
     */
    protected ?string $fontWeight = 'normal';

    /**
     * Set whitespace to no-wrap.
     */
    protected bool $noWrap = false;

    /**
     * Whether numbers should be displayed in fixed size.
     */
    protected bool $tabularNums = false;

    /**
     * The summary of the column in the footer.
     */
    protected ?Closure $sumarizer = null;

    public function __construct(
        protected string              $title,
        protected string|null|Closure $attribute = null,
    ) { }

    /**
     * Set the column summary displayed in the footer.
     */
    public function sumarize(?Closure $closure): static
    {
        $this->sumarizer = $closure;

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
     * Display numbers with fixed size.
     */
    public function tabularNums(bool $tabularNums = true): static
    {
        $this->tabularNums = $tabularNums;

        return $this;
    }

    /**
     * Set the link for given column.
     */
    public function link(Link|Closure|null $link): static
    {
        $this->link = $link;

        return $this;
    }

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
        if ($resource instanceof CellValue) {
            return $resource->value;
        }

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
     * Render column as header.
     */
    public function renderHeader($id): array
    {
        return [
            'id' => $id,
            'name' => $this->getTitle(),
            'align' => $this->getAlignment()->value,
            'width' => $this->getWidth(),
            'minWidth' => $this->getMinWidth(),
            'maxWidth' => $this->getMaxWidth(),
            'noWrap' => $this->noWrap,
            'sortableAs' => $this->getSortableAs(),
        ];
    }

    /**
     * Render column as footer.
     */
    public function renderFooter($id, Collection $resources, Collection|Builder $source): ?array
    {
        if (is_null($this->sumarizer)) {
            return null;
        }

        $summary = call_user_func($this->sumarizer, $resources, $source);

        return $this->renderCell($id, CellValue::warp($summary));
    }

    /**
     * Render column as cell.
     */
    public function renderCell($id, $resource): array
    {
        $value = $this->resolveValue($resource);

        $link = $this->link instanceof Closure ? call_user_func($this->link, $resource, $value) : $this->link;

        return [
            'column' => $id,
            'component' => $this->resolveComponentName($this->component()),
            'props' => $this->resolveComponentProps($this->toView($value)),
            'align' => $this->getAlignment()->value,
            'verticalAlign' => $this->getVerticalAlignment()->value,
            'asChild' => $this->shouldDisplayAsChild(),
            'width' => $this->getWidth(),
            'minWidth' => $this->getMinWidth(),
            'maxWidth' => $this->getMaxWidth(),
            'fontWeight' => $this->fontWeight,
            'noWrap' => $this->noWrap,
            'tabularNums' => $this->tabularNums,
            'link' => $link ? [
                'url' => $link->url,
                'isExternal' => $link->isExternal,
            ] : null,
        ];
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
