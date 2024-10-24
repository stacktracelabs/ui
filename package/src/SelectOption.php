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
     * Create new instance of option from enum.
     */
    public static function fromEnum(BackedEnum $value, array $extra = []): static
    {
        return new static(
            label: $value instanceof HasLabel ? $value->label() : Str::headline($value->name),
            value: $value->value,
            extra: $extra,
        );
    }

    /**
     * Create new instance of option from model.
     */
    public static function fromModel(Model $model, string $label, ?string $value = null, array $extra = []): static
    {
        return new static(
            label: $model->getAttribute($label),
            value: $value ? $model->getAttribute($value) : $model->getKey(),
            extra: $extra,
        );
    }

    /**
     * Create collection of select options from collection of models.
     */
    public static function collectFromModels(Collection|array $models, string $label, ?string $value = null, ?Closure $extra = null): Collection
    {
        return Collection::wrap($models)->map(fn (Model $model) => static::fromModel(
            model: $model,
            label: $label,
            value: $value,
            extra: $extra instanceof Closure ? call_user_func($extra, $model) : []
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

        return Collection::make($class::cases())->map(fn(BackedEnum $enum) => static::fromEnum(
            value: $enum,
            extra: $extra instanceof Closure ? call_user_func($extra, $enum) : []
        ))->sortBy('label')->values();
    }
}
