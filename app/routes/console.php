<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('rename-components', function () {
    $source = resource_path('js/components/ui');

    mkdir(resource_path('js/Components2'));

    collect(
        \Symfony\Component\Finder\Finder::create()
            ->directories()
            ->in($source)
            ->depth(0)
    )->each(function (\Symfony\Component\Finder\SplFileInfo $dir) {
        $name = $dir->getBasename();

        $componentName = \Illuminate\Support\Str::studly($name);

        $destination = resource_path("js/Components2/$componentName");

        \Illuminate\Support\Facades\File::copyDirectory(
            $dir->getPathname(),
            $destination,
        );
    });

    \Illuminate\Support\Facades\File::deleteDirectory($source);
});

Artisan::command('fix-import {folder}', function () {
    $folder = $this->argument('folder');

    collect(
        \Symfony\Component\Finder\Finder::create()
            ->in($folder)
            ->files()
    )->each(function (\Symfony\Component\Finder\SplFileInfo $file) {
        $contents = $file->getContents();

        $matches = \Illuminate\Support\Str::matchAll("/['\"]@\/components\/ui\/([^'\"]+)['\"]/", $contents);

        $contents = \Illuminate\Support\Str::replace('@/lib/utils', '@/Utils', $contents);

        if ($matches->isNotEmpty()) {
            foreach ($matches as $match) {
                $component = \Illuminate\Support\Str::studly($match);

                $contents = \Illuminate\Support\Str::replace("@/components/ui/{$match}", "@/Components/$component", $contents);
            }
        }
    });
});
