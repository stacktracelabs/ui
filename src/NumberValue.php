<?php


namespace StackTrace\Ui;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Collection;

class NumberValue
{
    public function __construct(
        public readonly Operator $operator,
        public readonly int|float $value1,
        public readonly int|float|null $value2 = null,
    ) { }

    /**
     * Filter by this value on given data source.
     */
    public function filter(Builder|Collection $source, string $attribute): Builder|Collection
    {
        return match ($this->operator) {
            Operator::LessThan => $source->where($attribute, '<', $this->value1),
            Operator::LessThanOrEqual => $source->where($attribute, '<=', $this->value1),
            Operator::Equal => $source->where($attribute, '=', $this->value1),
            Operator::GreaterThenOrEqual => $source->where($attribute, '>=', $this->value1),
            Operator::GreaterThen => $source->where($attribute, '>', $this->value1),
            Operator::Between => $source->whereBetween($attribute, [$this->value1, $this->value2]),
            Operator::NotBetween => $source->whereNotBetween($attribute, [$this->value1, $this->value2]),
        };
    }

    /**
     * Add where clause on given query.
     */
    public function where(Builder $builder, $column, string $boolean = 'and'): void
    {
        match ($this->operator) {
            Operator::LessThan => $builder->where($column, '<', $this->value1, $boolean),
            Operator::LessThanOrEqual => $builder->where($column, '<=', $this->value1, $boolean),
            Operator::Equal => $builder->where($column, '=', $this->value1, $boolean),
            Operator::GreaterThenOrEqual => $builder->where($column, '>=', $this->value1, $boolean),
            Operator::GreaterThen => $builder->where($column, '>', $this->value1, $boolean),
            Operator::Between => $builder->whereBetween($column, [$this->value1, $this->value2], $boolean),
            Operator::NotBetween => $builder->whereNotBetween($column, [$this->value1, $this->value2], $boolean),
        };
    }

    /**
     * Add having clause on given query.
     */
    public function having(Builder $builder, $column, string $boolean = 'and'): void
    {
        match ($this->operator) {
            Operator::LessThan => $builder->having($column, '<', $this->value1, $boolean),
            Operator::LessThanOrEqual => $builder->having($column, '<=', $this->value1, $boolean),
            Operator::Equal => $builder->having($column, '=', $this->value1, $boolean),
            Operator::GreaterThenOrEqual => $builder->having($column, '>=', $this->value1, $boolean),
            Operator::GreaterThen => $builder->having($column, '>', $this->value1, $boolean),
            Operator::Between => $builder->havingBetween($column, [$this->value1, $this->value2], $boolean),
            Operator::NotBetween => $builder->havingBetween($column, [$this->value1, $this->value2], $boolean, true),
        };
    }
}
