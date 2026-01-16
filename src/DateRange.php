<?php


namespace StackTrace\Ui;


use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;
use InvalidArgumentException;

class DateRange
{
    public function __construct(
        public readonly ?Carbon $from,
        public readonly ?Carbon $until
    ) { }

    /**
     * Filter by this value on given data source.
     */
    public function filter(Builder|Collection $source, string $attribute): Builder|Collection
    {
        if ($source instanceof Builder) {
            return $this->applyToQuery($source, $attribute);
        }

        return $source->filter(function ($model) use ($attribute) {
            $value = $model->$attribute;

            if (is_null($value)) {
                return false;
            }

            if ($value instanceof Carbon) {
                if ($this->from && $this->until) {
                    return $value->between($this->from, $this->until);
                } else if ($this->from) {
                    return $value->gte($this->from);
                } else if ($this->until) {
                    return $value->lte($this->until);
                }

                return true;
            }

            throw new InvalidArgumentException("The value must be a Carbon instance.");
        });
    }

    /**
     * Apply date range filter safely on the query builder.
     */
    public function applyToQuery(Builder $builder, string $column): Builder
    {
        if ($this->from && $this->until) {
            $builder->where($column, '>=', $this->from)->where($column, '<=', $this->until);
        } else if ($this->from) {
            $builder->where($column, '>=', $this->from);
        } else if ($this->until) {
            $builder->where($column, '<=', $this->until);
        }

        return $builder;
    }
}
