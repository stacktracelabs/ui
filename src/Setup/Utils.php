<?php


namespace StackTrace\Ui\Setup;


use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use InvalidArgumentException;
use Symfony\Component\Finder\Finder;

class Utils
{
    /**
     * Copy given source directory to given destination.
     */
    public static function copyDirectory(string $src, string $dest, bool $force = true, array $except = []): void
    {
        collect(Finder::create()->files()->notName($except)->in($src))->keys()->each(function (string $file) use ($src, $dest, $force) {
            $relativePath = Str::replaceFirst($src.'/', "", $file);

            $destPath = $dest.'/'.$relativePath;

            if (File::exists($destPath)) {
                if ($force) {
                    File::delete($destPath);
                } else {
                    throw new InvalidArgumentException("File [$destPath] already exist.");
                }
            }

            File::ensureDirectoryExists(File::dirname($destPath));

            File::copy($file, $destPath);
        });
    }
}
