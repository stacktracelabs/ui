<?php


namespace StackTrace\Ui\Setup;


use Illuminate\Console\OutputStyle;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use StackTrace\Ui\Exceptions\ComponentAlreadyInstalledException;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;

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
    public function add(string|array $name, bool $force = false, bool $forceDeps = false): InstallationResult
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
        $toInstall = $components->merge($deps)->unique()->values();

        $toInstall->each(fn (string $component) => $this->installComponent($component));

        return new InstallationResult(
            installed: $toInstall->all(),
        );
    }

    /**
     * Install single component.
     */
    protected function installComponent(string $component): void
    {
        $src = realpath($this->getSourceComponentPath($component));

        $dest = $this->resolveComponentPath($component);

        Utils::copyDirectory($src, $dest, except: ['*.md']);
    }

    /**
     * Ensure that given list of components are not installed.
     */
    protected function ensureComponentsNotInstalled(Collection|array $components): void
    {
        foreach ($components as $component) {
            if ($this->isInstalled($component)) {
                throw new ComponentAlreadyInstalledException($component);
            }
        }
    }

    /**
     * Resolve component dependencies.
     */
    protected function resolveDependencies(string $component): array
    {
        return collect(Finder::create()->files()->in($this->getSourceComponentPath($component))->name(["*.vue", "*.ts"]))
            ->map(
                fn (SplFileInfo $file) => Str::matchAll("/['\"]@\/Components\/([^'\"]+)['\"]/", $file->getContents())
                    ->map(fn (string $match) => explode('/', $match)[0])
            )
            ->values()
            ->flatten(1)
            ->unique()
            ->filter(function (string $dependency) use ($component) {
                return $dependency != $component
                    && file_exists($this->getSourceComponentPath($dependency));
            })
            ->values()
            ->all();
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
     * Get path to the component source.
     */
    protected function getSourceComponentPath(string $name): string
    {
        return __DIR__.'/../../components/'.$name;
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
