<?php


namespace StackTrace\Ui\Setup;


use Closure;
use Illuminate\Console\OutputStyle;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use InvalidArgumentException;
use RuntimeException;
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
    public function install(array $features = []): void
    {
        if (! $this->requireComposerPackages([
            "inertiajs/inertia-laravel:^1.0",
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

        // Copy Setup stubs
        Utils::copyDirectory(
            src: $this->resolveStubPath("setup"),
            dest: $this->getInstallationPath()
        );

        $this->installMiddleware([
            '\App\Http\Middleware\HandleInertiaRequests::class',
            '\Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class',
        ]);

        $this->updatePackages(fn(array $packages) => [
            "@inertiajs/vue3" => "^1.0.0",
            "@internationalized/date" => "^3.5.6",
            "@radix-icons/vue" => "^1.0.0",
            "@types/lodash" => "^4.17.10",
            "@stacktrace/ui" => "^0.0.4",
            "@vitejs/plugin-vue" => "^5.0.0",
            "@vueuse/core" => "^10.11.0",
            "class-variance-authority" => "^0.7.0",
            "clsx" => "^2.1.1",
            "date-fns" => "^4.1.0",
            "lodash" => "^4.17.21",
            "lucide-vue-next" => "^0.453.0",
            "radix-vue" => "^1.9.0",
            "tailwind-merge" => "^2.4.0",
            "tailwindcss-animate" => "^1.0.7",
            "typescript" => "^5.5.3",
            "v-calendar" => "^3.1.2",
            "vue" => "^3.4.0",
            "vue-tsc" => "^2.0.24",
        ] + $packages);

        $this->putFile($this->getInstallationPath('ui.json'), json_encode((object) [
            //
        ], JSON_PRETTY_PRINT));

        foreach ($features as $feature) {
            $this->installFeature($feature);
        }

        $this->runCommands(['npm install', 'npm run build']);
    }

    /**
     * Install UI feature.
     */
    public function installFeature(string $feature): void
    {
        $src = realpath(__DIR__."/../../stubs/features/{$feature}");

        if (! $src) {
            throw new InvalidArgumentException("Feature {$feature} does not exist.");
        }

        // Copy files
        Utils::copyDirectory(
            src: $src,
            dest: $this->getInstallationPath(),
            except: ['manifest.json'],
        );

        $manifestFile = $src.'/manifest.json';
        if (File::exists($manifestFile)) {
            $manifest = File::json($manifestFile);

            $dependencies = Arr::get($manifest, 'dependencies', []);
            if (! empty($dependencies)) {
                ComponentLibrary::make()
                    ->withOutput($this->output)
                    ->add($dependencies);
            }
        }
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
        return realpath(__DIR__."/../../stubs/{$name}");
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
