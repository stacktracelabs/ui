<?php


namespace StackTrace\Ui;


use BackedEnum;
use Closure;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use InvalidArgumentException;
use StackTrace\Ui\Contracts\HasLabel;

class SelectOption extends ViewModel
{
    public function __construct(
        public readonly string $label,
        public readonly string|int $value,
        public array $extra = [],
    ) { }

    public function toView(): array
    {
        return array_merge([
            'label' => $this->label,
            'value' => $this->value,
        ], $this->extra);
    }

    /**
     * Create collection of select options from collection of models.
     */
    public static function collectFromModels(Collection|array $models, string $label, ?string $value = null, ?Closure $extra = null): Collection
    {
        return Collection::wrap($models)->map(fn (Model $model) => new static(
            label: $model->getAttribute($label),
            value: $value ? $model->getAttribute($value) : $model->getKey(),
            extra: $extra instanceof Closure ? call_user_func($extra, $model) : [],
        ))->sortBy('label')->values();
    }

    /**
     * Create collection of options from enums.
     */
    public static function collectFromEnum(string $class, ?Closure $extra = null): Collection
    {
        if (! enum_exists($class)) {
            throw new InvalidArgumentException("The enum [$class] does not exist.");
        }

        return Collection::make($class::cases())->map(fn(BackedEnum $enum) => new static(
            label: $enum instanceof HasLabel ? $enum->label() : Str::headline($enum->name),
            value: $enum->value,
            extra: $extra instanceof Closure ? call_user_func($extra, $enum) : [],
        ))->sortBy('label')->values();
    }
}
