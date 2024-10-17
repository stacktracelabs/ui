<?php


namespace StackTrace\Ui;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class ModelSelection
{
    public function __construct(
        protected Collection $models,
        protected bool $includeNull
    ) { }

    public function applyOnBuilder(Builder $builder, string $field): void
    {
        if ($this->models->isNotEmpty() && $this->includeNull) {
            $builder->where(function (Builder $builder) use ($field) {
                $builder->whereIn($field, $this->keys())->orWhereNull($field);
            });
        } else if ($this->models->isNotEmpty()) {
            $builder->whereIn($field, $this->keys());
        } else if ($this->includeNull) {
            $builder->whereNull($field);
        }
    }

    public function keys(): array
    {
        return $this->models->map(fn (Model $model) => $model->getKey())->all();
    }
}
