<?php


namespace StackTrace\Ui\Menu;


use Illuminate\Support\Arr;
use Illuminate\Support\Traits\Conditionable;
use StackTrace\Ui\Icon;
use StackTrace\Ui\Link;
use StackTrace\Ui\ViewModel;

class MenuItem extends ViewModel
{
    use Conditionable;

    /**
     * List of URL paths when the menu item is considered to be active.
     */
    protected array $activePaths = [];

    /**
     * List of routes when the menu item is considered to be active.
     *
     * @var array<string>
     */
    protected array $activeRoutes = [];

    public function __construct(
        protected string $title,
        protected ?Link  $action = null,
        protected ?Icon  $icon = null,
        protected ?string $badge = null
    ) { }

    /**
     * Set title on the menu item.
     */
    public function title(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Retrieve title of the item.
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * Set action on the menu item.
     */
    public function action(?Link $action): static
    {
        $this->action = $action;

        return $this;
    }

    /**
     * Retrieve action of the item.
     */
    public function getAction(): ?Link
    {
        return $this->action;
    }

    /**
     * Set icon on the menu item.
     */
    public function icon(?Icon $icon): static
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * Retrieve icon of the item.
     */
    public function getIcon(): ?Icon
    {
        return $this->icon;
    }

    /**
     * Set badge on the menu item.
     */
    public function badge(?string $badge): static
    {
        $this->badge = $badge;

        return $this;
    }

    /**
     * Retrieve badge of the item.
     */
    public function getBadge(): ?string
    {
        return $this->badge;
    }

    public function toView(): array
    {
        return [
            'title' => $this->title,
            'action' => $this->action ? [
                'type' => 'link',
                'link' => [
                    'url' => $this->action->url,
                    'external' => $this->action->isExternal,
                ],
            ] : null,
            'badge' => $this->badge,
            'activePaths' => $this->getActivePaths(),
            'activeRoutes' => $this->getActiveRoutes(),
            'icon' => $this->icon,
        ];
    }

    /**
     * Add paths when the menu item is considered to be active.
     */
    public function active(string|array|null $path = null, string|array|null $route = null): static
    {
        if ($path) {
            $this->activePaths = [...$this->activePaths, ...Arr::wrap($path)];
        }

        if ($route) {
            $this->activeRoutes = [...$this->activeRoutes, ...Arr::wrap($route)];
        }

        return $this;
    }

    /**
     * Retrieve list of active URL paths.
     */
    protected function getActivePaths(): array
    {
        $paths = $this->activePaths;

        if ($this->action instanceof Link) {
            if ($path = parse_url($this->action->url, PHP_URL_PATH)) {
                $paths[] = '/'.ltrim($path, '/');
            }
        }

        return $paths;
    }

    /**
     * Retrieve list of active URL routes.
     */
    public function getActiveRoutes(): array
    {
        return $this->activeRoutes;
    }

    /**
     * Create new instance of the menu item.
     */
    public static function make(string $title, ?Link  $action = null, ?Icon  $icon = null, ?string $badge = null): static
    {
        return new static($title, $action, $icon, $badge);
    }
}
