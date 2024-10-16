<?php


namespace StackTrace\Ui;


use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use RuntimeException;

class Installer
{
    public function __construct(
        protected string $configPath
    ) { }

    /**
     * Determine whether UI is installed.
     */
    public function installed(): bool
    {
        return file_exists($this->configPath);
    }

    /**
     * Install UI component library.
     */
    public function install(array $options = []): void
    {
        $this->removeFile([
            'vite.config.js',
        ]);

        $this->copyStubs([
            'postcss.config.js',
            'tailwind.config.js',
            'tsconfig.json',
            'vite.config.ts',
        ]);
    }

    /**
     * Remove file in installation path.
     */
    public function removeFile(string|array $path): void
    {
        foreach (Arr::wrap($path) as $filePath) {
            $file = $this->getInstallationPath($filePath);

            if (file_exists($file)) {
                unlink($file);
            }
        }
    }

    /**
     * Copy list of stubs to installation directory.
     */
    public function copyStubs(array $stubs): void
    {
        foreach ($stubs as $from => $to) {
            if (is_numeric($from)) {
                $this->copyStub($to);
            } else {
                $this->copyStub($from, $to);
            }
        }
    }

    /**
     * Copy stub to given location.
     */
    public function copyStub(string $path, ?string $to = null, bool $force = true): void
    {
        $to = $to ?: $path;

        $source = $this->resolveStubPath($path);
        $destination = $this->getInstallationPath($to);

        if (file_exists($destination) && !$force) {
            throw new RuntimeException("The file [$destination] already exist.");
        }

        $this->ensureDirectoryForFile($destination);

        if (file_exists($destination)) {
            unlink($destination);
        }

        copy($source, $destination);
    }

    /**
     * Ensure all directories exist for given file.
     */
    protected function ensureDirectoryForFile(string $filePath): void
    {
        $dir = File::dirname($filePath);

        File::ensureDirectoryExists($dir);
    }

    /**
     * Retrieve installation path where UI will be installed.
     */
    protected function getInstallationPath(?string $path = null): string
    {
        // TODO: Read from config

        return $path ? base_path($path) : base_path();
    }

    /**
     * Resolve path to stub file.
     */
    protected function resolveStubPath(string $name): string
    {
        if (! Str::endsWith($name, '.stub')) {
            $name .= '.stub';
        }

        return realpath(__DIR__."/../stubs/{$name}");
    }

    /**
     * Create new instance of the installer.
     */
    public static function make(): static
    {
        return new static(base_path('ui.json'));
    }
}
