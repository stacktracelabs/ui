<?php


namespace StackTrace\Ui\Table\Filters;


use Closure;
use Illuminate\Database\Eloquent\Model as EloquentModel;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Request;
use Merq\Contracts\HasTitle;
use StackTrace\Ui\ModelSelection;
use StackTrace\Ui\SelectOption;
use StackTrace\Ui\Table\FilterWidget;

class Model extends FilterWidget
{
    /**
     * Available models to select.
     */
    protected Collection|Closure|null $options = null;

    /**
     * Maximum amount of models to be retreived.
     */
    protected int $limit = 100;

    /**
     * Allow special @null value to allow searching null values.
     */
    protected bool $allowNull = false;

    /**
     * Label of the option.
     */
    protected string|Closure|null $label = null;

    public function __construct(
        protected string $title,
        protected string $model,
        protected string $field,
    ) { }

    /**
     * Set the label of the option.
     */
    public function label(string|Closure $label): static
    {
        $this->label = $label;

        return $this;
    }

    /**
     * Allow special @null value.
     */
    public function allowNull(bool $allow = true): static
    {
        $this->allowNull = $allow;

        return $this;
    }

    /**
     * Allow only given set of models to be selected.
     */
    public function options(Collection|array|Closure $models): static
    {
        $this->options = $models instanceof Closure ? $models : Collection::wrap($models);

        return $this;
    }

    /**
     * Create a new query builder.
     */
    protected function newModel(): EloquentModel
    {
        $model = $this->model;

        return new $model;
    }

    protected function getModels(): ?Collection
    {
        $input = Request::collect($this->field);

        $identifiers = $input
            ->map(fn ($it) => is_numeric($it) ? (int) $it : null)
            ->filter()
            ->values();

        if ($identifiers->isEmpty()) {
            return null;
        }

        $model = $this->newModel();

        if ($this->options instanceof Collection) {
            // If the collection is list of models, we'll select only models from the collection.
            if ($this->options->every(fn ($it) => $it instanceof EloquentModel)) {
                $results = $model->newCollection($this->options->all())
                    ->whereIn($model->getKeyName(), $identifiers)
                    ->values();

                if ($results->isEmpty()) {
                    return null;
                }

                return $results;
            }

            throw new \RuntimeException("Currently only collection of models is supported.");
        } else if ($this->options instanceof Closure) {
            throw new \RuntimeException("Currently only collection of models is supported.");
        }

        $results = $model->newQuery()
            ->whereIn($model->getKeyName(), $identifiers)
            ->limit($this->limit)
            ->get();

        if ($results->isEmpty()) {
            return null;
        }

        return $results;
    }

    public function value(): mixed
    {
        $input = Request::collect($this->field);

        $models = $this->getModels();

        $withNull = $input->contains('@null') && $this->allowNull;

        if ($models) {
            return new ModelSelection(
                models: $models,
                includeNull: $withNull,
            );
        }

        return $withNull ? new ModelSelection(
            models: collect(),
            includeNull: true
        ) : null;
    }

    public function component(): string
    {
        return 'DataTable::Filters/MultiSelect';
    }

    public function defaultValue(): array
    {
        return [
            $this->field => null,
        ];
    }

    protected function getSelectableModels(): Collection
    {
        if ($this->options instanceof Collection) {
            return $this->options;
        } else {
            throw new \RuntimeException("Currently only collection of options is supported.");
        }
    }

    public function toOptions(Collection $models): Collection
    {
        return $models->map(function (EloquentModel $model) {
            if ($this->label instanceof Closure) {
                return new SelectOption(
                    label: call_user_func($this->label, $model),
                    value: $model->getKey()
                );
            } else if (is_string($this->label)) {
                $attribute = $this->label;

                return new SelectOption(
                    label: $model->$attribute,
                    value: $model->getKey()
                );
            } else if ($model instanceof HasTitle) {
                return new SelectOption(
                    label: $model->getTitle(),
                    value: $model->getKey()
                );
            }

            throw new \RuntimeException("Unable to guess option label.");
        })->toBase();
    }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'field' => $this->field,
            'options' => $this->toOptions($this->getSelectableModels()),
        ];
    }
}
