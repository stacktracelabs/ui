<?php


namespace StackTrace\Ui;


use Illuminate\Database\Eloquent\Builder;

class NumberValue
{
    public function __construct(
        public readonly Operator $operator,
        public readonly int|float $value1,
        public readonly int|float|null $value2 = null,
    ) { }

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
