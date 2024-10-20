<?php


namespace StackTrace\Ui;


use Closure;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Str;
use InvalidArgumentException;
use StackTrace\Ui\Table\BaseAction;
use StackTrace\Ui\Table\Column;
use StackTrace\Ui\Table\ColumnCollection;
use StackTrace\Ui\Table\Concerns\RenderComponents;
use StackTrace\Ui\Table\Direction;
use StackTrace\Ui\Table\Filter;
use StackTrace\Ui\Table\FilterWidget;
use StackTrace\Ui\Table\Wrappable;

class Table implements Arrayable, \JsonSerializable
{
    use RenderComponents;

    /**
     * List of table columns.
     */
    protected ?ColumnCollection $columns = null;

    /**
     * Loaded table items.
     */
    protected LengthAwarePaginator|Collection|null $items = null;

    /**
     * Total number for items without applied filters.
     */
    protected int $baseTotalCount = 0;

    /**
     * Append resource to each row.
     */
    protected ?Closure $resourceCallback = null;

    /**
     * List of actions for each row.
     */
    protected array $actions = [];

    /**
     * Default per page options.
     */
    protected array $perPageOptions = [25, 50, 100];

    /**
     * Default rows per page.
     */
    protected ?int $defaultPerPage = null;

    /**
     * Search query callback.
     */
    protected ?Closure $searchUsing = null;

    /**
     * Configured table filter.
     */
    protected ?Filter $filter = null;

    /**
     * The source of the table.
     */
    protected Builder|Collection|Closure|null $source = null;

    /**
     * Do not pass resource to the frontend.
     */
    protected bool $withoutResource = true;

    /**
     * Do not send resource to the frontend.
     */
    public function withoutResource(bool $without = true): static
    {
        $this->withoutResource = $without;

        return $this;
    }

    /**
     * Do not send resource to the frontend.
     */
    public function withResource(bool $with = true): static
    {
        return $this->withoutResource(! $with);
    }

    /**
     * Set query builder as source of the table.
     */
    public function setQuery(Builder $builder): static
    {
        $this->source = $builder;

        return $this;
    }

    /**
     * Add filter to the table.
     */
    public function filter(FilterWidget $filter): static
    {
        if (! $this->filter) {
            $this->filter = new Filter;
        }

        $this->filter->widget($filter);

        return $this;
    }

    /**
     * Configure search callback on the source.
     */
    public function searchable(?Closure $using): static
    {
        $this->searchUsing = $using;

        return $this;
    }

    /**
     * Set available per page options.
     */
    public function perPageOptions(array $options): static
    {
        $this->perPageOptions = $options;

        return $this;
    }

    /**
     * Set default number of rows per page.
     */
    public function defaultPerPage(?int $defaultPerPage = null): static
    {
        $this->defaultPerPage = $defaultPerPage;

        return $this;
    }

    /**
     * Add column to table.
     */
    public function column(Column $column): static
    {
        if (! $this->columns) {
            $this->columns = new ColumnCollection;
        }

        $this->columns->add($column);

        return $this;
    }

    /**
     * Add action to table.
     */
    public function action(BaseAction $action, ?string $name = null): static
    {
        $this->actions[$name ?: Str::uuid()->toString()] = $action;

        return $this;
    }

    /**
     * Retrieve table items.
     */
    protected function getItems(): LengthAwarePaginator|Collection
    {
        if ($this->items != null) {
            return $this->items;
        }

        if ($this->source instanceof Builder) {
            $this->baseTotalCount = $this->source->clone()->count();

            if ($this->searchUsing instanceof Closure) {
                $term = $this->getSearchTerm();

                if ($term) {
                    call_user_func($this->searchUsing, $this->source, $term);
                }
            }

            if ($this->filter) {
                $this->filter->apply($this->source);
            }

            $sortBy = $this->getSortColumn() ?: $this->getDefaultSortColumn();
            $sortAs = $this->getSortDirection() ?: $sortBy?->getDefaultSortDirection();

            if ($sortBy && $sortAs) {
                $sortBy->applySorting($this->source, $sortAs);
            }

            $this->items = $this->source->paginate($this->getPerPage())->withQueryString();
        } else {
            throw new InvalidArgumentException("The source type is not supported.");
        }

        return $this->items;
    }

    protected function getSortColumn(): ?Column
    {
        if ($sortBy = Request::input('sort_by')) {
            return $this->getColumns()->first(fn (Column $column) => $column->getSortableAs() == $sortBy);
        }

        return null;
    }

    protected function getDefaultSortColumn(): ?Column
    {
        return $this->getColumns()->first(fn (Column $column) => $column->hasDefaultSorting());
    }

    protected function getSortDirection(): ?Direction
    {
        return match (Request::input('sort_direction')) {
            'asc' => Direction::Asc,
            'desc' => Direction::Desc,
            default => null,
        };
    }

    /**
     * Retrieve table columns.
     */
    protected function getColumns(): Collection
    {
        return $this->columns?->all() ?: collect();
    }

    protected function toRows(Collection $items): Collection
    {
        return $items->map(function ($resource, int $resourceIndex) {
            $cells = $this->getColumns()->map(fn(Column $column, string $id) => [
                'column' => $id,
                'component' => $this->resolveComponentName($column->component()),
                'props' => $this->resolveComponentProps($column->toView($column->resolveValue($resource))),
                'align' => $column->getAlignment()->value,
                'verticalAlign' => $column->getVerticalAlignment()->value,
                'asChild' => $column->shouldDisplayAsChild(),
                'width' => $column->getWidth(),
                'minWidth' => $column->getMinWidth(),
                'maxWidth' => $column->getMaxWidth(),
            ])->values();

            $actions = $this->getActionsForResource($resource);

            return [
                'key' => $resource instanceof Model ? $resource->getKey() : $resourceIndex,
                'cells' => $cells,
                'actions' => $actions->map(fn (BaseAction $action, string $name) => [
                    'name' => $name,
                    ...$action->toView($resource),
                ])->values(),
                'resource' => $this->withoutResource ? null : value(
                    fn () => $this->resourceCallback instanceof Closure
                        ? call_user_func($this->resourceCallback, $resource)
                        : $resource
                ),
            ];
        });
    }

    /**
     * Map resource to data value.
     */
    public function mapResource(?Closure $closure): static
    {
        $this->resourceCallback = $closure;

        return $this;
    }

    /**
     * Retrieve table rows.
     */
    protected function getRows(): Collection
    {
        $items = $this->getItems();

        return $this->toRows(
            $items instanceof LengthAwarePaginator
                ? $items->collect()
                : $items
        );
    }

    public function getHeaderColumns(): Collection
    {
        return $this->getColumns()->map(function (Column $column, string $id) {
            return [
                'id' => $id,
                'name' => $column->getTitle(),
                'align' => $column->getAlignment()->value,
                'width' => $column->getWidth(),
                'minWidth' => $column->getMinWidth(),
                'maxWidth' => $column->getMaxWidth(),
                'noWrap' => $column instanceof Wrappable && !$column->shouldWrap(),
                'sortableAs' => $column->getSortableAs(),
            ];
        });
    }

    /**
     * Retrieve available actions for resource.
     */
    protected function getActionsForResource(mixed $resource): Collection
    {
        return collect($this->actions);
    }

    /**
     * Retrieve default number of rows per page.
     */
    protected function getDefaultPerPage(): int
    {
        if ($this->defaultPerPage === null && ! empty($this->perPageOptions)) {
            return Arr::first($this->perPageOptions);
        }

        return 15;
    }

    /**
     * Retrieve number of rows per page.
     */
    protected function getPerPage(): int
    {
        $limit = request()->integer('limit');

        if (in_array($limit, $this->perPageOptions)) {
            return $limit;
        }

        return $this->getDefaultPerPage();
    }

    /**
     * Determine whether table is paginated.
     */
    protected function isPaginated(): bool
    {
        return $this->getItems() instanceof LengthAwarePaginator;
    }

    /**
     * Retrieve current search term.
     */
    protected function getSearchTerm(): ?string
    {
        $term = request()->input('search');

        if (is_string($term) && Str::length($term) > 0) {
            return $term;
        }

        return null;
    }

    /**
     * Retrieve table paginator.
     */
    protected function getPagination(): ?array
    {
        $paginator = $this->getItems();

        if ($paginator instanceof LengthAwarePaginator) {
            return [
                'currentPage' => $paginator->currentPage(),
                'lastPage' => $paginator->lastPage(),
                'total' => $paginator->total(),
                'prevPageUrl' => $paginator->previousPageUrl(),
                'nextPageUrl' => $paginator->nextPageUrl(),
                'firstPageUrl' => $paginator->currentPage() > 1 ? $paginator->url(1) : null,
                'lastPageUrl' => $paginator->lastPage() > 1 && $paginator->currentPage() < $paginator->lastPage() ? $paginator->url($paginator->lastPage()) : null,
            ];
        }

        return null;
    }

    /**
     * Prepare table view.
     */
    protected function toView(): array
    {
        if (method_exists($this, 'source')) {
            $this->source = $this->source();
        }

        if (method_exists($this, 'columns')) {
            $columns = $this->columns();

            if ($columns instanceof ColumnCollection) {
                $this->columns = $columns;
            } else if ($columns instanceof Collection || is_array($columns)) {
                $this->columns = ColumnCollection::of($columns);
            } else {
                throw new InvalidArgumentException("Return value of the columns method must be either array, Collection or ColumnCollection.");
            }
        }

        if (method_exists($this, 'actions')) {
            foreach ($this->actions() as $action) {
                $this->action($action);
            }
        }

        if (method_exists($this, 'filters')) {
            foreach ($this->filters() as $filter) {
                $this->filter($filter);
            }
        }

        return [
            'headings' => $this->getHeaderColumns(),
            'rows' => $this->getRows(),
            'perPageOptions' => $this->perPageOptions,
            'perPage' => $this->getPerPage(),
            'defaultPerPage' => $this->getDefaultPerPage(),
            'pagination' => $this->getPagination(),
            'isSearchable' => $this->searchUsing != null,
            'filter' => $this->filter?->toView(),
            'isEmpty' => $this->baseTotalCount == 0,
        ];
    }

    public function toArray()
    {
        return $this->toView();
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }

    public static function make(Builder|string|null $source = null): static
    {
        if (is_null($source)) {
            return app(static::class);
        }

        if (is_string($source) && class_exists($source) && in_array(Model::class, class_parents($source))) {
            return app(static::class)->setQuery($source::query());
        }

        return app(static::class)->setQuery($source);
    }
}
