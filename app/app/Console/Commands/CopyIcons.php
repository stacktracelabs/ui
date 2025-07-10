<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Process;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;

class CopyIcons extends Command
{
    protected $signature = 'copy-icons {source} {destination}';

    protected $description = 'Copy icons to given destination.';

    public function handle()
    {
        $path = $this->argument('source');

        if (! File::exists($path)) {
            $this->error("The [$path] does not exist.");
            return 1;
        }

        $destination = base_path("package-ui/src/Icons/{$this->argument('destination')}");

        File::ensureDirectoryExists($destination);;

        $svgo = base_path("node_modules/.bin/svgo");
        $svgoConfig = base_path('svgo.config.mjs');

        collect(Finder::create()->files()->name("*.svg")->in($path))->each(function (SplFileInfo $file) use ($destination, $svgo, $svgoConfig) {
            $dist = "{$destination}/".$file->getFilename();

            if (File::exists($dist)) {
                File::delete($dist);
            }

            Process::command("node {$svgo} {$file->getPathname()} -o {$dist} --config {$svgoConfig}")->run()->throw();
        });

        return 0;
    }
}
