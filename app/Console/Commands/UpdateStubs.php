<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Symfony\Component\Finder\Finder;

class UpdateStubs extends Command
{
    protected $signature = 'ui:update';

    protected $description = 'Update stub files in the package from this skeleton.';

    public function handle(): int
    {
        $this->copyDirectory('resources');
        $this->copyDirectory('routes', [
            'console.php',
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

            if (in_array($relativeName, $except)) {
                return;
            }

            $fileDestination = $stub.Str::replaceFirst($base, '', $file);

            $dir = File::dirname($fileDestination);
            File::ensureDirectoryExists($dir);

            copy($file, $fileDestination);
        });
    }

    protected function copyFile(string $path): void
    {

    }
}
