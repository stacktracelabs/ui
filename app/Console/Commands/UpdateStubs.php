<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Symfony\Component\Finder\Finder;

class UpdateStubs extends Command
{
    protected $signature = 'ui:update';

    protected $description = 'Update stub files in the package from this skeleton.';

    public function handle(): int
    {
        $this->copyDirectory('app', [
            'Console',
            'Http/Controllers/Controller.php',
            'Models',
            'Providers',
        ]);
        $this->copyDirectory('resources', [
            'js/Components',
        ]);
        $this->copyDirectory('routes', [
            'console.php',
        ]);

        $this->copyFiles([
            'postcss.config.js',
            'tailwind.config.js',
            'tsconfig.json',
            'vite.config.ts',
            'resources/js/Components/ApplicationLogo.vue',
        ]);

        return Command::SUCCESS;
    }

    protected function copyDirectory(string $path, array $except = []): void
    {
        $stub = base_path("package/stubs/{$path}");

        if (File::exists($stub)) {
            File::deleteDirectory($stub);
        }

        File::makeDirectory($stub);

        $base = base_path($path);

        collect(Finder::create()->in($base)->files())->keys()->each(function (string $file) use ($stub, $base, $except) {
            $relativeName = Str::of($file)->replaceFirst($base, '')->ltrim('/')->value();

            foreach ($except as $exclude) {
                if (File::extension($exclude)) {
                    if ($relativeName == $exclude) {
                        return;
                    }
                } else {
                    if (Str::startsWith($relativeName, "{$exclude}/")) {
                        return;
                    }
                }
            }

            $fileDestination = $stub.Str::replaceFirst($base, '', $file);

            $dir = File::dirname($fileDestination);
            File::ensureDirectoryExists($dir);

            copy($file, $fileDestination);
        });
    }

    protected function copyFiles(string|array $path): void
    {
        foreach (Arr::wrap($path) as $file) {
            $out = base_path("package/stubs/{$file}");

            if (file_exists($out)) {
                unlink($out);
            }

            copy(base_path($file), $out);
        }
    }
}
