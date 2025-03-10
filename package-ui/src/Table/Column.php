<?php


namespace StackTrace\Ui\Table;


use Closure;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Support\Traits\ForwardsCalls;
use Laravel\Scout\Builder as ScoutBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use StackTrace\Ui\Link;
use StackTrace\Ui\Table\Concerns\RenderComponents;

/**
 * @mixin \StackTrace\Ui\Table\Style
 */
abstract class Column
{
    use RenderComponents, ForwardsCalls;

    /**
     * A column text style.
     */
    protected Style $cellStyle;

    /**
     * A colum heading style.
     */
    protected ?Style $headingStyle = null;

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
     * The summary of the column in the footer.
     */
    protected ?Closure $sumarizer = null;

    /**
     * Custom closure for configuring heading style.
     */
    protected ?Closure $configureHeadingStyleUsing = null;

    /**
     * Custom closure for configuring cell style.
     */
    protected ?Closure $configureCellStyleUsing = null;

    public function __construct(
        protected string              $title,
        protected string|null|Closure $attribute = null,
    )
    {
        $this->cellStyle = new Style;
    }

    /**
     * Configure style of the cell.
     */
    public function style(Style|Closure $style): static
    {
        if ($style instanceof Closure) {
            $this->configureCellStyleUsing = $style;
        } else {
            $this->cellStyle = $style;
        }

        return $this;
    }

    /**
     * Configure style of the heading.
     */
    public function headingStyle(Style|Closure $style): static
    {
        if ($style instanceof Closure) {
            $this->configureHeadingStyleUsing = $style;
        } else {
            $this->headingStyle = $style;
        }

        return $this;
    }

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
     *
     * @deprecated Use text style property. This will be removed in the future release.
     */
    public function noWrap(bool $noWrap = true): static
    {
        if ($noWrap) {
            $this->cellStyle->whitespaceNowrap();
        } else {
            $this->cellStyle->whitespace(null);
        }

        return $this;
    }

    /**
     * Set font weight to normal.
     *
     * @deprecated Use text style property. This will be removed in the future release.
     */
    public function normal(): static
    {
        $this->cellStyle->fontNormal();

        return $this;
    }

    /**
     * Set font weight to bold.
     *
     * @deprecated Use text style property. This will be removed in the future release.
     */
    public function bold(): static
    {
        $this->cellStyle->fontBold();

        return $this;
    }

    /**
     * Set font weight to medium.
     *
     * @deprecated Use text style property. This will be removed in the future release.
    */
    public function medium(): static
    {
        $this->cellStyle->fontMedium();

        return $this;
    }

    /**
     * Display numbers with fixed size.
     *
     * @deprecated Use text style property. This will be removed in the future release.
     */
    public function tabularNums(bool $tabularNums = true): static
    {
        if ($tabularNums) {
            $this->cellStyle->numsTabular();
        } else {
            $this->cellStyle->fontVariantNumeric(null);
        }

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
        match ($align) {
            Align::Right => $this->alignRight(),
            Align::Left => $this->alignLeft(),
            Align::Center => $this->alignCenter(),
        };

        return $this;
    }

    /**
     * Set vertical alignment of the cell.
     */
    public function verticalAlign(VerticalAlign $align): static
    {
        match ($align) {
            VerticalAlign::Top => $this->cellStyle->verticalAlignTop(),
            VerticalAlign::Middle => $this->cellStyle->verticalAlignMiddle(),
            VerticalAlign::Bottom => $this->cellStyle->verticalAlignBottom(),
        };

        return $this;
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
     * Render column as header.
     */
    public function renderHeader($id): array
    {
        return [
            'id' => $id,
            'name' => $this->getTitle(),
            'width' => $this->getWidth(),
            'minWidth' => $this->getMinWidth(),
            'maxWidth' => $this->getMaxWidth(),
            'sortableAs' => $this->getSortableAs(),
            'style' => $this->resolveHeadingStyle($id)->toArray(),
        ];
    }

    /**
     * Resolve heading style.
     */
    protected function resolveHeadingStyle($id): Style
    {
        if ($this->headingStyle) {
            $style = $this->headingStyle;
        } else {
            $style = new Style();
            $style->align($this->cellStyle->getAlign());
        }

        if ($this->configureHeadingStyleUsing instanceof Closure) {
            call_user_func($this->configureHeadingStyleUsing, $style, $id);
        }

        return $style;
    }

    /**
     * Render column as footer.
     */
    public function renderFooter($id, Collection $resources, Collection|EloquentBuilder|ScoutBuilder $source): ?array
    {
        if (is_null($this->sumarizer)) {
            return null;
        }

        $summary = call_user_func($this->sumarizer, $resources, $source);

        return $this->renderCell($id, CellValue::warp($summary));
    }

    /**
     * Resolve link to given resource.
     */
    protected function resolveLink(mixed $resource, mixed $value): ?Link
    {
        if (($link = $this->link instanceof Closure ? call_user_func($this->link, $resource, $value) : $this->link) && $link->shouldShow($resource, $value)) {
            return $link;
        }

        return null;
    }

    /**
     * Render column as cell.
     */
    public function renderCell($id, $resource): array
    {
        $value = $this->resolveValue($resource);

        $link = $this->resolveLink($resource, $value);

        return [
            'column' => $id,
            'component' => $this->resolveComponentName($this->component()),
            'props' => $this->resolveComponentProps($this->toView($value, $resource)),
            'width' => $this->getWidth(),
            'minWidth' => $this->getMinWidth(),
            'maxWidth' => $this->getMaxWidth(),
            'style' => $this->resolveCellStyle($resource, $value)->toArray(),
            'link' => $link ? [
                'url' => $link->url,
                'isExternal' => $link->isExternal,
            ] : null,
        ];
    }

    /**
     * Resolve style for a cell.
     */
    protected function resolveCellStyle($resource, $value): Style
    {
        $style = clone $this->cellStyle;

        if ($this->configureCellStyleUsing instanceof Closure) {
            call_user_func($this->configureCellStyleUsing, $style, $resource, $value);
        }

        return $style;
    }

    /**
     * Retrieve component props.
     */
    public abstract function toView($value, $resource): array;

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
        if (is_string($this->sortableUsing) && $source instanceof EloquentBuilder) {
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

    public function __call(string $name, array $arguments)
    {
        return $this->forwardDecoratedCallTo($this->cellStyle, $name, $arguments);
    }

    /**
     * Create new instance of column.
     */
    public static function make(): static
    {
        return new static(...func_get_args());
    }
}
