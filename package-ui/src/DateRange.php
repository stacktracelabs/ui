<?php


namespace StackTrace\Ui;


use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class DateRange
{
    public function __construct(
        public readonly ?Carbon $from,
        public readonly ?Carbon $until
    ) { }

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
