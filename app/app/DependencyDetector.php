<?php


namespace App;


use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;

class DependencyDetector
{
    /**
     * Retrieve list of available components.
     */
    protected function getAvailableComponents(): Collection
    {
        return collect(Finder::create()->in(resource_path('js/Components'))->directories()->depth(0))
            ->sortBy(fn (SplFileInfo $file) => $file->getFilename())
            ->map(fn (SplFileInfo $file) => $file->getFilename())
            ->values();
    }

    /**
     * Search for used Vue components in SFC.
     */
    protected function findUsedComponents(array $sfcFiles): array
    {
        $components = [];

        foreach ($sfcFiles as $filePath) {
            $template = file_get_contents($filePath);

            $matches = [];

            preg_match_all('/<([A-Z][a-zA-Z0-9]*|[a-z][a-z0-9\-]*)(?=\s|>)/', $template, $matches);

            $components = array_merge($components, $matches[1]);
        }

        return collect($components)->unique()->filter(function (string $component) {
            $first = Str::substr($component, 0, 1);

            return $first === Str::upper($first);
        })->values()->all();
    }

    /**
     * Retrieve all SFC component names used/provided by given UI component.
     */
    protected function getProvidedComponentSFCNames(string $name): Collection
    {
        return collect(Finder::create()->files()->depth(0)->in(resource_path("js/Components/{$name}"))->name(["*.vue"]))
            ->map(fn (SplFileInfo $file) => $file->getFilenameWithoutExtension())
            ->values();
    }

    /**
     * Search for component dependencies for given SFC files.
     */
    public function getDependencies(array $sfcFiles): array
    {
        $usedComponents = $this->findUsedComponents($sfcFiles);

        if (empty($usedComponents)) {
            return [];
        }

        $available = $this->getAvailableComponents()->all();

        $used = [];

        foreach ($available as $availableComponentName) {
            $providedComponents = $this->getProvidedComponentSFCNames($availableComponentName)->all();

            if (! empty(array_intersect($usedComponents, $providedComponents))) {
                $used[] = $availableComponentName;
            }
        }

        return $used;
    }
}
