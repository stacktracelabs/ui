<?php


namespace StackTrace\Ui\Setup;


use Illuminate\Console\OutputStyle;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use RuntimeException;

class ComponentLibrary
{
    /**
     * The output of the command.
     */
    protected ?OutputStyle $output = null;

    public function __construct(
        protected array $config,
    ) { }

    /**
     * Set output of the command.
     */
    public function withOutput(?OutputStyle $output): static
    {
        $this->output = $output;

        return $this;
    }

    /**
     * Install component to application.
     */
    public function add(string|array $name, bool $force = false, bool $forceDeps = false): void
    {
        $components = collect(Arr::wrap($name))->map(fn (string $name) => Str::studly($name));

        // Check whether components are not installed.
        if (! $force) {
            $this->ensureComponentsNotInstalled($components);
        }

        $deps = $components
            ->map(fn (string $component) => $this->resolveDependencies($component))
            ->flatten(1)
            ->unique()
            ->values();

        // Filter only dependencies which are not installed.
        if (! $forceDeps) {
            $deps = $deps->filter(fn (string $component) => !$this->isInstalled($component))->values();
        }

        // Install all necessary components.
        $components->merge($deps)->unique()->values()->each(fn (string $component) => $this->installComponent($component));
    }

    /**
     * Install single component.
     */
    protected function installComponent(string $component): void
    {
        $src = realpath(__DIR__."/../../stubs/components/{$component}");

        if (! $src) {
            throw new RuntimeException("The [$component] component does not exist.");
        }

        $dest = $this->resolveComponentPath($component);

        Utils::copyDirectory($src, $dest, except: ['manifest.json']);
    }

    /**
     * Ensure that given list of components are not installed.
     */
    protected function ensureComponentsNotInstalled(Collection|array $components): void
    {
        foreach ($components as $component) {
            if ($this->isInstalled($component)) {
                throw new RuntimeException("Component [$component] is already installed.");
            }
        }
    }

    /**
     * Resolve component dependencies.
     */
    protected function resolveDependencies(string $component): array
    {
        $manifest = __DIR__."/../../stubs/components/{$component}/manifest.json";

        if (file_exists($manifest)) {
            $meta = json_decode(file_get_contents($manifest), true);

            return Arr::get($meta, 'dependencies', []);
        }

        return [];
    }

    /**
     * Check whether given component is installed.
     */
    protected function isInstalled(string $name): bool
    {
        $path = $this->resolveComponentPath($name);

        return File::exists($path);
    }

    /**
     * Resolve path of the component.
     */
    protected function resolveComponentPath(?string $path = null): string
    {
        return $path ? resource_path("js/Components/{$path}") : resource_path("js/Components");
    }

    /**
     * Create new instance of the component library.
     */
    public static function make(): static
    {
        return new static(
            config: []
        );
    }
}
