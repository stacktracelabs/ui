<?php


namespace StackTrace\Ui;


use Illuminate\Support\Arr;

class Icon extends ViewModel
{
    /**
     * The default icon pack.
     */
    protected static string $defaultPack = "Lucide";

    /**
     * List of loaded icons.
     */
    protected static array $icons = [];

    /**
     * Load icon from file.
     */
    protected static function load(string $name, string $pack): string
    {
        $iconName = "{$pack}:{$name}";

        if (Arr::has(static::$icons, $iconName)) {
            return static::$icons[$iconName];
        }

        return static::$icons[$iconName] = file_get_contents(__DIR__."/Icons/{$pack}/{$name}.svg");
    }

    public function __construct(
        public readonly string $name
    ) { }

    public function toView(): array
    {
        return [
            'src' => static::load($this->name, static::$defaultPack),
        ];
    }
}
