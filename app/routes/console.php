<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('rename-components', function () {
    $source = resource_path('js/components/ui');

    collect(
        \Symfony\Component\Finder\Finder::create()
            ->directories()
            ->in($source)
            ->depth(0)
    )->each(function (\Symfony\Component\Finder\SplFileInfo $dir) {
        $name = $dir->getBasename();

        $componentName = \Illuminate\Support\Str::studly($name);

        $destination = resource_path("js/components/$componentName");

        \Illuminate\Support\Facades\File::copyDirectory(
            $dir->getPathname(),
            $destination,
        );
    });
});
