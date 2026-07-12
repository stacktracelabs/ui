<?php

namespace StackTrace\Ui;

use Illuminate\Support\Arr;
use Inertia\PropertyContext;
use Inertia\ProvidesInertiaProperty;
use RuntimeException;
use StackTrace\Ui\Contracts\IconRepository;

class Icon implements ProvidesInertiaProperty
{
    /**
     * List of registered icon repositories.
     *
     * @var array<string, IconRepository>
     */
    protected static array $repositories = [];

    /**
     * The default icon repository.
     */
    protected static ?string $defaultRepository = null;

    /**
     * List of loaded icons.
     */
    protected static array $cache = [];

    /**
     * Custom SVG content of the icon.
     */
    protected ?string $content = null;

    public function __construct(
        public readonly string $name,
        public readonly ?string $repository = null,
    ) {}

    /**
     * Retrieve the icon content.
     */
    public function content(): string
    {
        if ($this->content) {
            return $this->content;
        }

        if ($repository = $this->repository ?: static::$defaultRepository ?: Arr::first(array_keys(static::$repositories))) {
            return static::load($this->name, $repository);
        }

        throw new RuntimeException('No icon repository has been specified');
    }

    public function toView(): array
    {
        return [
            'src' => $this->content(),
        ];
    }

    public function toInertiaProperty(PropertyContext $prop): mixed
    {
        return $this->toView();
    }

    /**
     * Load icon from the repository.
     */
    protected static function load(string $name, string $repository): string
    {
        $key = "{$repository}:{$name}";

        if (Arr::has(static::$cache, $key)) {
            return static::$cache[$key];
        }

        if ($repo = Arr::get(static::$repositories, $repository)) {
            return static::$cache[$key] = $repo->load($name);
        }

        throw new RuntimeException("The repository [$repository] is not registered");
    }

    /**
     * Create new Icon from SVG content.
     */
    public static function svg(string $content): static
    {
        $icon = new static('svg');

        $icon->content = $content;

        return $icon;
    }

    /**
     * Register a new icon repository.
     */
    public static function repository(string $name, IconRepository $repository): void
    {
        static::$repositories[$name] = $repository;
    }

    /**
     * Set the default icon repository.
     */
    public static function default(?string $repository): void
    {
        static::$defaultRepository = $repository;
    }
}
