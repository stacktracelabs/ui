<?php


namespace StackTrace\Ui;


use Illuminate\Console\OutputStyle;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use RuntimeException;
use Symfony\Component\Finder\Finder;

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
        $base = realpath(__DIR__."/../components/{$component}");

        $out = $this->resolveComponentPath($component);

        if (File::exists($out)) {
            File::deleteDirectory($out);
        }

        $this->copyDir($base, $out, [
            'manifest.json',
        ]);
    }

    /**
     * Copy content of the source directory to destination directory.
     */
    protected function copyDir(string $from, string $to, array $except = []): void
    {
        collect(Finder::create()->in($from)->files()->exclude($except))->keys()->each(function (string $file) use ($from, $to, $except) {
            $relativeName = Str::of($file)->replaceFirst($from, '')->ltrim('/')->value();

            $out = $to.'/'.$relativeName;

            File::ensureDirectoryExists(File::dirname($out));

            copy($file, $out);
        });
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
