<?php


namespace StackTrace\Ui;


use Closure;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\CursorPaginator;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Traits\Conditionable;
use InvalidArgumentException;
use JsonSerializable;
use Laravel\Scout\Builder as ScoutBuilder;
use StackTrace\Ui\Table\ActionCollection;
use StackTrace\Ui\Table\BaseAction;
use StackTrace\Ui\Table\Column;
use StackTrace\Ui\Table\ColumnCollection;
use StackTrace\Ui\Table\Direction;
use StackTrace\Ui\Table\Filter;
use StackTrace\Ui\Table\FilterWidget;
use StackTrace\Ui\Table\Resource;
use StackTrace\Ui\Table\ResourceActions;

class Table implements Arrayable, JsonSerializable
{
    use Conditionable;

    /**
     * List of table columns.
     */
    protected ?ColumnCollection $columns = null;

    /**
     * Loaded table items.
     */
    protected LengthAwarePaginator|CursorPaginator|Collection|null $items = null;

    /**
     * Total number for items without applied filters.
     */
    protected ?int $baseTotalCount = null;

    /**
     * Append resource to each row.
     */
    protected ?Closure $resourceCallback = null;

    /**
     * List of actions for each row.
     */
    protected ?ActionCollection $actions = null;

    /**
     * List of actions which should be excluded.
     */
    protected array $excludedActions = [];

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
    protected EloquentBuilder|ScoutBuilder|Collection|Closure|null $source = null;

    /**
     * Do not pass resource to the frontend.
     */
    protected bool $withoutResource = true;

    /**
     * Determine whether cursor pagination should be used.
     */
    protected bool $cursorPagination = false;

    /**
     * Default sorting on the table.
     */
    protected ?Closure $defaultSorting = null;

    /**
     * A closure called after items have been retrieved from source.
     */
    protected ?Closure $afterRetrieved = null;

    /**
     * Custom callback for retrieving unique resource key.
     */
    protected ?Closure $keyBy = null;

    /**
     * Closure which will determine how the row should be highlighted.
     */
    protected ?Closure $highlightUsing = null;

    /**
     * Set how the row should be highlighted.
     */
    public function highlight(?Closure $closure): static
    {
        $this->highlightUsing = $closure;

        return $this;
    }

    /**
     * Set custom callback for resolving key of the resource.
     */
    public function keyBy(?Closure $closure): static
    {
        $this->keyBy = $closure;

        return $this;
    }

    /**
     * Set a closure which will be called after items have been retrieved from source.
     */
    public function afterRetrieved(?Closure $closure): static
    {
        $this->afterRetrieved = $closure;

        return $this;
    }

    /**
     * Set default table sorting, when no column sorting is applied.
     */
    public function defaultSorting(?Closure $using): static
    {
        $this->defaultSorting = $using;

        return $this;
    }

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
     *
     * @deprecated Use setSource instead.
     */
    public function setQuery(EloquentBuilder|ScoutBuilder $builder): static
    {
        return $this->setSource($builder);
    }

    /**
     * Set the table source.
     */
    public function setSource(EloquentBuilder|ScoutBuilder|Collection $source): static
    {
        $this->source = $source;

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
     * Add filters to the table.
     */
    public function withFilters(array $filters): static
    {
        foreach ($filters as $filter) {
            if ($filter !== null) {
                $this->filter($filter);
            }
        }

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
     * Add column to the table.
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
     * Add columns to the table.
     */
    public function withColumns(array|ColumnCollection $columns): static
    {
        if (is_array($columns)) {
            foreach ($columns as $column) {
                if ($column !== null) {
                    $this->column($column);
                }
            }
        } else {
            $columns->all()->each(fn (Column $column) => $this->column($column));
        }

        return $this;
    }

    /**
     * Add action to table.
     */
    public function action(BaseAction $action, ?string $name = null): static
    {
        if (! $this->actions) {
            $this->actions = new ActionCollection;
        }

        $this->actions->add($action, $name);

        return $this;
    }

    /**
     * Exclude given action from action list.
     */
    public function withoutAction(string|array $name): static
    {
        $this->excludedActions = array_merge($this->excludedActions, Arr::wrap($name));

        return $this;
    }

    /**
     * Add actions to the table.
     */
    public function withActions(array|ActionCollection $actions): static
    {
        if (is_array($actions)) {
            foreach ($actions as $name => $action) {
                if (is_null($action)) {
                    continue;
                }

                if (is_numeric($name)) {
                    $this->action($action);
                } else {
                    $this->action($action, $name);
                }
            }
        } else {
            $actions->all()->each(fn (BaseAction $action, string $name) => $this->action($action, $name));
        }

        return $this;
    }

    /**
     * Set the cursor pagination on the table.
     */
    public function cursorPaginate(bool $cursorPagination = true): static
    {
        $this->cursorPagination = $cursorPagination;

        return $this;
    }

    /**
     * Retrieve resources for the table.
     */
    protected function getResources(): Collection
    {
        $items = $this->getItems();

        if ($items instanceof LengthAwarePaginator || $items instanceof CursorPaginator) {
            return $items->collect();
        }

        return $items;
    }

    /**
     * Retrieve table items.
     */
    protected function getItems(): LengthAwarePaginator|CursorPaginator|Collection
    {
        if ($this->items != null) {
            return $this->items;
        }

        if ($this->source instanceof ScoutBuilder) {
            if ($this->searchUsing instanceof Closure && ($term = $this->getSearchTerm())) {
                call_user_func($this->searchUsing, $this->source, $term);
            }

            if ($this->filter) {
                $this->filter->apply($this->source);
            }

            $sortBy = $this->getSortColumn() ?: $this->getDefaultSortColumn();
            $sortAs = $this->getSortDirection() ?: $sortBy?->getDefaultSortDirection();

            if ($sortBy && $sortAs) {
                $sortBy->applySorting($this->source, $sortAs);
            } else if ($this->defaultSorting instanceof Closure) {
                call_user_func($this->defaultSorting, $this->source);
            }

            if ($this->cursorPagination) {
                $this->items = $this->source->cursorPaginate($this->getPerPage())->withQueryString();
            } else {
                $this->items = $this->source->paginate($this->getPerPage())->withQueryString();
            }
        } else if ($this->source instanceof EloquentBuilder) {
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
            } else if ($this->defaultSorting instanceof Closure) {
                call_user_func($this->defaultSorting, $this->source);
            }

            if ($this->cursorPagination) {
                $this->items = $this->source->cursorPaginate($this->getPerPage())->withQueryString();
            } else {
                $this->items = $this->source->paginate($this->getPerPage())->withQueryString();
            }
        } else if ($this->source instanceof Collection) {
            $this->items = $this->source->toBase();
            $this->baseTotalCount = $this->source->count();
        } else {
            throw new InvalidArgumentException("The source type is not supported.");
        }

        if ($this->items instanceof CursorPaginator && !$this->items->previousCursor() && $this->items->isEmpty()) {
            $this->baseTotalCount = 0;
        }

        if ($this->afterRetrieved instanceof Closure) {
            call_user_func($this->afterRetrieved, $this->items);
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
            $cells = $this->getColumns()->map(fn(Column $column, string $id) => $column->renderCell($id, $resource))->values();

            $actions = $this->resolveActionsForResource($resource);

            $highlightAs = $this->highlightUsing instanceof Closure
                ? call_user_func($this->highlightUsing, $resource)
                : null;

            return [
                'key' => $this->keyBy instanceof Closure
                    ? call_user_func($this->keyBy, $resource) :
                    ($resource instanceof Model ? $resource->getKey() : $resourceIndex),
                'cells' => $cells,
                'actions' => $actions->all()->map(fn (BaseAction $action, string $name) => [
                    'name' => $name,
                    ...$action->toView($resource),
                ])->values(),
                'resource' => $this->withoutResource ? null : value(
                    fn () => $this->resourceCallback instanceof Closure
                        ? call_user_func($this->resourceCallback, $resource)
                        : $resource
                ),
                'highlightAs' => $highlightAs,
            ];
        });
    }

    /**
     * Map resource to data value.
     */
    public function mapResource(?Closure $closure): static
    {
        $this->resourceCallback = $closure;

        $this->withoutResource = false;

        return $this;
    }

    /**
     * Retrieve table rows.
     */
    protected function renderRows(): Collection
    {
        $items = $this->getItems();

        return $this->toRows(
            ($items instanceof LengthAwarePaginator || $items instanceof CursorPaginator)
                ? $items->collect()
                : $items
        );
    }

    /**
     * Render header columns,
     */
    protected function renderHeaderColumns(): Collection
    {
        return $this->getColumns()->map(fn (Column $column, string $id) => $column->renderHeader($id))->values();
    }

    /**
     * Render footer cells.
     */
    protected function renderFooterCells(): Collection
    {
        $resources = $this->getResources();

        $cells = $this->getColumns()->map(fn (Column $column, string $id) => $column->renderFooter($id, $resources, $this->source))->values();

        if ($cells->every(fn ($it) => is_null($it))) {
            return collect();
        }

        return $cells;
    }

    /**
     * Retrieve default number of rows per page.
     */
    protected function getDefaultPerPage(): int
    {
        if ($this->defaultPerPage === null && ! empty($this->perPageOptions)) {
            return Arr::first($this->perPageOptions);
        }

        return $this->defaultPerPage ?: 15;
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
     * Retrieve cursor paginator for the table.
     */
    protected function getCursorPagination(): ?array
    {
        $paginator = $this->getItems();

        if ($paginator instanceof CursorPaginator) {
            return [
                'prevPageUrl' => $paginator->previousPageUrl(),
                'nextPageUrl' => $paginator->nextPageUrl(),
            ];
        }

        return null;
    }

    /**
     * Boot the table.
     */
    protected function boot(): void
    {
        if (method_exists($this, 'source')) {
            $this->source = $this->source();
        }

        if (method_exists($this, 'columns')) {
            $columns = $this->columns();

            if ($columns instanceof ColumnCollection) {
                $this->withColumns($columns);
            } else if ($columns instanceof Collection || is_array($columns)) {
                $this->withColumns(ColumnCollection::of($columns));
            } else {
                throw new InvalidArgumentException("Return value of the columns method must be either array, Collection or ColumnCollection.");
            }
        }

        if (method_exists($this, 'actions')) {
            $actions = $this->actions();

            if ($actions instanceof ActionCollection) {
                $this->withActions($actions);
            } else if ($actions instanceof Collection || is_array($actions)) {
                $this->withActions(ActionCollection::of($actions));
            } else {
                throw new InvalidArgumentException("Return value of the actions method must be either array, Collection or ActionCollection.");
            }
        }

        if (method_exists($this, 'filters')) {
            foreach ($this->filters() as $filter) {
                $this->filter($filter);
            }
        }
    }

    /**
     * Prepare table view.
     */
    protected function toView(): array
    {
        $this->boot();

        return [
            'headings' => $this->renderHeaderColumns(),
            'rows' => $this->renderRows(),
            'footerCells' => $this->renderFooterCells(),
            'perPageOptions' => count($this->perPageOptions) > 1 ? $this->perPageOptions : [],
            'perPage' => $this->getPerPage(),
            'defaultPerPage' => $this->getDefaultPerPage(),
            'pagination' => $this->getPagination(),
            'cursorPagination' => $this->getCursorPagination(),
            'isSearchable' => $this->searchUsing != null,
            'filter' => $this->filter?->toView(),
            'isEmpty' => $this->baseTotalCount === 0,
        ];
    }

    /**
     * Create new Resource instance.
     */
    protected function createResource(mixed $resource): Resource
    {
        return (new Resource($resource))
            ->map($this->resourceCallback)
            ->keyBy($this->keyBy)
            ->withValue(! $this->withoutResource);
    }

    /**
     * Resolve available actions for given resource.
     */
    protected function resolveActionsForResource(mixed $resource): ActionCollection
    {
        $actions = $this->actions ?: new ActionCollection;

        return $actions->filter(function (BaseAction $action, string $name) {
            if (in_array($name, $this->excludedActions)) {
                return false;
            }

            return true;
        });
    }

    /**
     * Retrieve Resource actions for given resource.
     */
    public function getActionsForResource(mixed $resource): ResourceActions
    {
        $this->boot();

        return new ResourceActions(
            actions: $this->resolveActionsForResource($resource),
            resource: $this->createResource($resource)
        );
    }

    public function toArray()
    {
        return $this->toView();
    }

    public function jsonSerialize(): mixed
    {
        return $this->toArray();
    }

    public static function make(Collection|EloquentBuilder|ScoutBuilder|string|null $source = null): static
    {
        if (is_null($source)) {
            return app(static::class);
        }

        if (is_string($source) && class_exists($source) && in_array(Model::class, class_parents($source))) {
            return app(static::class)->setSource($source::query());
        }

        return app(static::class)->setSource($source);
    }
}
