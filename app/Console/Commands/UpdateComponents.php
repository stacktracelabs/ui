<?php

namespace App\Console\Commands;

use App\DependencyDetector;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;

class UpdateComponents extends Command
{
    protected $signature = 'components:update {--filter=*}';

    protected $description = 'Update component files in package.';

    protected DependencyDetector $dependencyDetector;

    public function handle(DependencyDetector $dependencyDetector): int
    {
        $this->dependencyDetector = $dependencyDetector;

        $filter = collect($this->option('filter'))->filter()->unique()->values()->all();

        $components = collect(Finder::create()->name($filter)->depth(0)->in(resource_path('js/Components'))->directories())
            ->sortBy(fn (SplFileInfo $file) => $file->getFilename());

        $availableComponents = $components->map(fn (SplFileInfo $file) => $file->getFilename())->values()->all();

        $dest = base_path('package/stubs/components');

        if (File::exists($dest)) {
            File::deleteDirectory($dest);
        }

        File::makeDirectory($dest, recursive: true);

        $components->each(function (SplFileInfo $file) use ($availableComponents, $dest) {
                $name = $file->getFilename();

                $this->updateComponent($file->getPath(), $dest, $name, $availableComponents);

                $this->info("✔ {$name}");
            });

        $this->info("Updated total {$components->count()} components.");

        return Command::SUCCESS;
    }

    /**
     * Update given component source files.
     */
    public function updateComponent(string $src, string $dest, string $name, array $components): void
    {
        $componentSrcDir = $src.'/'.$name;

        // Component Files
        $files = collect(Finder::create()->files()->in($componentSrcDir)->name(["*.vue", "*.ts"]))
            ->map(fn (SplFileInfo $file) => Str::of($file->getRealPath())->replaceFirst($componentSrcDir.'/', "")->value())
            ->values();

        $componentDestDir = $dest.'/'.$name;

        // Create destination directory
        File::ensureDirectoryExists($componentDestDir);

        // Copy component files
        $files->each(function (string $filePath) use ($componentSrcDir, $componentDestDir) {
            $src = $componentSrcDir.'/'.$filePath;
            $dest = $componentDestDir.'/'.$filePath;

            // Create directory for file
            File::ensureDirectoryExists(Str::of($dest)->replaceLast("/".File::basename($dest), "")->value());

            // Copy file
            File::copy($src, $dest);
        });

        // Search for copied Vue SFC files
        $sfcFiles = collect(Finder::create()->files()->in($componentDestDir)->name(["*.vue"]))->keys()->all();

        // Search for dependencies
        $dependencies = array_values(array_diff($this->dependencyDetector->getDependencies($sfcFiles), [$name]));

        // Write manifest if there are some dependencies.
        if (! empty($dependencies)) {
            $manifest = [
                'dependencies' => $dependencies,
            ];


            file_put_contents($componentDestDir.'/manifest.json', json_encode($manifest, JSON_PRETTY_PRINT));
        }
    }
}
