<?php

namespace App\Console\Commands;

use App\DependencyDetector;
use App\Features\Feature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use StackTrace\Ui\Setup\Utils;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;

class UpdateFeatures extends Command
{
    protected $signature = 'features:update';

    protected $description = 'Update feature files in components.';

    protected DependencyDetector $dependencyDetector;

    public function handle(DependencyDetector $dependencyDetector): int
    {
        $this->dependencyDetector = $dependencyDetector;

        $features = collect(Finder::create()->in(app_path('Features'))->notName('Feature.php')->depth(0)->name('*.php'))
            ->map(fn (SplFileInfo $file) => $file->getFilenameWithoutExtension())
            ->values()
            ->each(function (string $name) {
                $this->updateFeature(app("App\\Features\\{$name}"), $name);

                $this->info("✔ {$name}");
            });

        $this->info("Updated total {$features->count()} features.");

        return Command::SUCCESS;
    }

    /**
     * Update feature files.
     */
    public function updateFeature(Feature $feature, string $name): void
    {
        $name = Str::kebab($name);

        $featureDir = base_path("package/stubs/features/$name");

        if (File::exists($featureDir)) {
            File::deleteDirectory($featureDir);
        }

        // Copy Files
        collect($feature->files())->each(function (string $file) use ($featureDir) {
            $src = base_path($file);
            $dest = $featureDir.'/'.$file;

            if (File::isDirectory($src)) {
                Utils::copyDirectory($src, $dest);
            } else {
                File::ensureDirectoryExists(File::dirname($dest));
                File::copy($src, $dest);
            }
        });

        // Create file templates
        collect($feature->templates())->each(function (string $content, string $name) use ($featureDir) {
            $dest = $featureDir."/{$name}";

            File::ensureDirectoryExists(File::dirname($dest));

            File::put($dest, $content);
        });

        // Search for component dependencies
        $dependencies = $this->dependencyDetector->getDependencies(collect(Finder::create()->in($featureDir)->name('*.vue')->files())->keys()->all());

        if (! empty($dependencies)) {
            $manifest = [
                'dependencies' => $dependencies,
            ];


            file_put_contents($featureDir.'/manifest.json', json_encode($manifest, JSON_PRETTY_PRINT));
        }
    }
}
