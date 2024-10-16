<?php


namespace StackTrace\Ui\Setup;


use Closure;
use Illuminate\Console\OutputStyle;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use RuntimeException;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Process\Process;

class Installer
{
    /**
     * The installer output.
     */
    protected ?OutputStyle $output = null;

    public function __construct(
        protected string $configPath
    ) { }

    /**
     * Set output of the installer.
     */
    public function withOutput(?OutputStyle $output): static
    {
        $this->output = $output;

        return $this;
    }

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
        if (! $this->requireComposerPackages([
            "inertiajs/inertia-laravel:^1.0",
            "laravel/sanctum:^4.0",
            "tightenco/ziggy:^2.0"
        ])) {
            throw new RuntimeException("Unable to install composer packages.");
        }

        $this->removeFile([
            'vite.config.js',
            'resources/css/app.css',
            'resources/js/app.js',
            'resources/js/bootstrap.js',
            'resources/views/welcome.blade.php',
        ]);

        $this->copyStubsDir('app');
        $this->copyStubsDir('resources');
        $this->copyStubsDir('routes');

        $this->copyStubs([
            'postcss.config.js',
            'tailwind.config.js',
            'tsconfig.json',
            'vite.config.ts',
        ]);

        $this->installMiddleware([
            '\App\Http\Middleware\HandleInertiaRequests::class',
            '\Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class',
        ]);

        $this->updatePackages(fn(array $packages) => [
            "@inertiajs/vue3" => "^1.0.0",
            "@radix-icons/vue" => "^1.0.0",
            "@stacktrace/ui" => "^0.0.2",
            "@vitejs/plugin-vue" => "^5.0.0",
            "@vueuse/core" => "^10.11.0",
            "class-variance-authority" => "^0.7.0",
            "clsx" => "^2.1.1",
            "lucide-vue-next" => "^0.453.0",
            "radix-vue" => "^1.9.0",
            "tailwind-merge" => "^2.4.0",
            "tailwindcss-animate" => "^1.0.7",
            "typescript" => "^5.5.3",
            "unplugin-vue-components" => "^0.27.4",
            "vue" => "^3.4.0",
            "vue-tsc" => "^2.0.24"
        ] + $packages);

        $this->putFile('ui.json', json_encode((object) [
            //
        ], JSON_PRETTY_PRINT));

        ComponentLibrary::make()->add([
            'Alert',
            'AlertDialog',
            'Button',
            'Card',
            'Checkbox',
            'DropdownMenu',
            'Form',
            'Input',
            'Label',
            'NavigationMenu',
            'Spinner',
        ]);

        $this->runCommands(['npm install', 'npm run build']);
    }

    /**
     * Write contents to given file.
     */
    public function putFile(string $fileName, string $contents): void
    {
        File::ensureDirectoryExists(File::dirname($fileName));

        file_put_contents($fileName, $contents);
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
     * Install entire stub directory.
     */
    public function copyStubsDir(string $path, ?string $to = null, bool $force = true): void
    {
        $to = $to ?: $path;

        $source = $this->resolveStubPath($path);
        File::ensureDirectoryExists($this->getInstallationPath($to));

        collect(Finder::create()->in($source)->files())->keys()->each(function (string $file) use ($source, $to, $force) {
            $fileDestination = $to.Str::replaceFirst($source, '', $file);

            $dir = File::dirname($fileDestination);

            File::ensureDirectoryExists($this->getInstallationPath($dir));

            $fileName = File::basename($file);

            $destinationFilePath = $this->getInstallationPath("{$dir}/{$fileName}");

            if (file_exists($destinationFilePath) && !$force) {
                throw new RuntimeException("The file [$destinationFilePath] already exist.");
            }

            copy($file, $destinationFilePath);
        });
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
        return realpath(__DIR__."/../stubs/{$name}");
    }

    /**
     * Update the "package.json" file.
     */
    protected function updatePackages(Closure $using, $dev = true): void
    {
        $path = $this->getInstallationPath('package.json');

        if (! file_exists($path)) {
            return;
        }

        $configurationKey = $dev ? 'devDependencies' : 'dependencies';

        $packages = json_decode(file_get_contents($path), true);

        $packages[$configurationKey] = $using(
            array_key_exists($configurationKey, $packages) ? $packages[$configurationKey] : [],
            $configurationKey
        );

        ksort($packages[$configurationKey]);

        file_put_contents(
            $path,
            json_encode($packages, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT).PHP_EOL
        );
    }

    /**
     * Installs the given Composer Packages into the application.
     */
    protected function requireComposerPackages(array $packages, $asDev = false): bool
    {
        $composer = 'global'; // TODO: Get from config

        if ($composer !== 'global') {
            $command = ['php', $composer, 'require'];
        }

        $command = array_merge(
            $command ?? ['composer', 'require'],
            $packages,
            $asDev ? ['--dev'] : [],
        );

        return (new Process($command, $this->getInstallationPath(), ['COMPOSER_MEMORY_LIMIT' => '-1']))
                ->setTimeout(null)
                ->run(function ($type, $output) {
                    $this->output?->write($output);
                }) === 0;
    }

    /**
     * Delete the "node_modules" directory and remove the associated lock files.
     */
    protected function flushNodeModules(): void
    {
        tap(new Filesystem, function (Filesystem $files) {
            $files->deleteDirectory($this->getInstallationPath('node_modules'));

            $files->delete($this->getInstallationPath('pnpm-lock.yaml'));
            $files->delete($this->getInstallationPath('yarn.lock'));
            $files->delete($this->getInstallationPath('bun.lockb'));
            $files->delete($this->getInstallationPath('deno.lock'));
            $files->delete($this->getInstallationPath('package-lock.json'));
        });
    }

    /**
     * Run the given commands.
     */
    protected function runCommands(array $commands): void
    {
        $process = Process::fromShellCommandline(implode(' && ', $commands), null, null, null, null);

        if ('\\' !== DIRECTORY_SEPARATOR && file_exists('/dev/tty') && is_readable('/dev/tty')) {
            try {
                $process->setTty(true);
            } catch (RuntimeException $e) {
                $this->output?->writeln('  <bg=yellow;fg=black> WARN </> '.$e->getMessage().PHP_EOL);
            }
        }

        $process->run(function ($type, $line) {
            $this->output?->write('    '.$line);
        });
    }

    /**
     * Install the given middleware names into the application.
     */
    protected function installMiddleware($names, $group = 'web', $modifier = 'append'): void
    {
        $bootstrapApp = file_get_contents($this->getInstallationPath('bootstrap/app.php'));

        collect(Arr::wrap($names))
            ->filter(fn ($name) => ! Str::contains($bootstrapApp, $name))
            ->whenNotEmpty(function ($names) use ($bootstrapApp, $group, $modifier) {
                $names = $names->map(fn ($name) => "$name")->implode(','.PHP_EOL.'            ');

                $bootstrapApp = str_replace(
                    '->withMiddleware(function (Middleware $middleware) {',
                    '->withMiddleware(function (Middleware $middleware) {'
                    .PHP_EOL."        \$middleware->$group($modifier: ["
                    .PHP_EOL."            $names,"
                    .PHP_EOL.'        ]);'
                    .PHP_EOL,
                    $bootstrapApp,
                );

                file_put_contents($this->getInstallationPath('bootstrap/app.php'), $bootstrapApp);
            });
    }

    /**
     * Create new instance of the installer.
     */
    public static function make(): static
    {
        return new static(base_path('ui.json'));
    }
}
