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

        return Command::SUCCESS;
    }

    protected function copyDirectory(string $path, array $except = []): void
    {
        $stub = base_path("package/stubs/{$path}");

        // if (File::exists($stub)) {
        //     File::deleteDirectory($stub);
        // }
        //
        // File::makeDirectory($stub);

        $base = base_path($path);

        collect(Finder::create()->in($base)->files())->keys()->each(function (string $file) use ($stub, $base) {
            $fileDestination = Str::replaceFirst($base, '', $file);

            dd($fileDestination);

            // $fileDestination = $to.Str::replaceFirst($source, '', $file);
            //
            // $dir = File::dirname($fileDestination);
            //
            // File::ensureDirectoryExists($this->getInstallationPath($dir));
            //
            // $fileName = File::basename($file);
            //
            // $destinationFilePath = $this->getInstallationPath("{$dir}/{$fileName}");
            //
            // if (file_exists($destinationFilePath) && !$force) {
            //     throw new RuntimeException("The file [$destinationFilePath] already exist.");
            // }
            //
            // copy($file, $destinationFilePath);
        });
    }

    protected function copyFile(string $path): void
    {

    }
}
