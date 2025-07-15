<?php


namespace StackTrace\Ui\Commands;


use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;

class FixImportCommand extends Command
{
    protected $signature = 'ui:fix-import {folder}';

    protected $description = 'Replace import path from shadcn-vue to stacktrace/ui';

    public function handle(): int
    {
        collect(Finder::create()->in($this->argument('folder'))->files())->each(function (SplFileInfo $file) {
            $originalContent = $file->getContents();
            $contents = $originalContent;

            $matches = Str::matchAll("/['\"]@\/components\/ui\/([^'\"]+)['\"]/", $contents);

            $contents = Str::replace('@/lib/utils', '@/Utils', $contents);

            if ($matches->isNotEmpty()) {
                foreach ($matches as $match) {
                    $component = Str::studly($match);

                    $contents = Str::replace("@/components/ui/{$match}", "@/Components/$component", $contents);
                }
            }

            if ($contents != $originalContent) {
                $path = $file->getPathname();
                unlink($path);
                file_put_contents($path, $contents);
            }
        });

        return self::SUCCESS;
    }
}
