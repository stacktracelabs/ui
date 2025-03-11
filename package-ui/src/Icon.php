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
     * Custom SVG content of the icon.
     */
    protected ?string $content = null;

    public function __construct(
        public readonly string $name,
        public readonly ?string $pack = null,
    ) { }

    /**
     * Retrieve the icon content.
     */
    public function getContent(): string
    {
        if ($this->content) {
            return $this->content;
        }

        return static::load($this->name, $this->pack ?: static::$defaultPack);
    }

    public function toView(): array
    {
        return [
            'src' => $this->getContent(),
        ];
    }

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

    /**
     * Create new Icon from SVG content.
     */
    public static function svg(string $content): static
    {
        $icon = new static("");
        $icon->content = $content;
        return $icon;
    }
}
