<?php

namespace StackTrace\Ui;

enum Operator: string
{
    case LessThan = 'lt';
    case LessThanOrEqual = 'lte';
    case Equal = 'eq';
    case GreaterThenOrEqual = 'gte';
    case GreaterThen = 'gt';
    case Between = 'be';
    case NotBetween = 'nbe';

    /**
     * Determine if the operator is a single value operator.
     */
    public function isSingleValue(): bool
    {
        return match ($this) {
            Operator::Between, Operator::NotBetween => false,
            default => true,
        };
    }
}
