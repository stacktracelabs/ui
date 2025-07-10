<?php


namespace StackTrace\Ui\Menu;


use Closure;
use Illuminate\Support\Collection;
use Illuminate\Support\Traits\Conditionable;
use StackTrace\Ui\Icon;
use StackTrace\Ui\Link;
use StackTrace\Ui\ViewModel;

class MenuItem extends ViewModel
{
    use Conditionable;

    /**
     * List of paths and routes when the menu item is considered active.
     *
     * @var array<\StackTrace\Ui\Menu\ActivePath|\StackTrace\Ui\Menu\ActiveRoute>
     */
    protected array $activeDestinations = [];

    /**
     * @param string|null $id
     * @param string|null $title
     * @param \StackTrace\Ui\Link|null $action
     * @param \StackTrace\Ui\Icon|null $icon
     * @param string|null $badge
     * @param array<\StackTrace\Ui\Menu\MenuItem> $children
     */
    public function __construct(
        protected ?string $id = null,
        protected ?string $title = null,
        protected ?Link  $action = null,
        protected ?Icon  $icon = null,
        protected ?string $badge = null,
        protected array $children = [],
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

    /**
     * Add child item to the menu item.
     */
    public function addChild(MenuItem $item): static
    {
        $this->children[] = $item;

        return $this;
    }

    /**
     * Add child item to the end of child list.
     */
    public function appendChild(MenuItem $item): static
    {
        return $this->add($item);
    }

    /**
     * Append child after another child with given id. When child with given id
     * does not exist, the item will be appended to the end of the list.
     */
    public function appendChildAfter(string $id, MenuItem $item): static
    {
        $final = [];
        $appended = false;

        foreach ($this->children as $child) {
            if ($child->id === $id) {
                $final[] = $child;
                $final[] = $item;
                $appended = true;
            } else {
                $final[] = $child;
            }
        }

        if (!$appended) {
            $final[] = $item;
        }

        $this->children = $final;

        return $this;
    }

    /**
     * Append child before another child with given id. When child with given id
     * does not exist, the item will be added to the beginning of the list.
     */
    public function prependChildBefore(string $id, MenuItem $item): static
    {
        $final = [];
        $appended = false;

        foreach ($this->children as $child) {
            if ($child->id === $id) {
                $final[] = $item;
                $final[] = $child;
                $appended = true;
            } else {
                $final[] = $child;
            }
        }

        if (!$appended) {
            $final = [$item, ...$final];
        }

        $this->children = $final;

        return $this;
    }

    /**
     * Add child item to the beginning of the child list.
     */
    public function prependChild(MenuItem $item): static
    {
        $this->children = [$item, ...$this->children];

        return $this;
    }

    /**
     * Retrieve all children of the item.
     *
     * @return \Illuminate\Support\Collection<int, \StackTrace\Ui\Menu\MenuItem>
     */
    public function getChildren(): Collection
    {
        return collect($this->children);
    }

    /**
     * Retrieve childern by its id or custom callback.
     */
    public function findChild(string|Closure $id): ?MenuItem
    {
        if ($id instanceof Closure) {
            return $this->getChildren()->first($id);
        }

        return $this->getChildren()->firstWhere('id', $id);
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
            'active' => $this->getActiveDestinations()
                ->map(function (ActiveRoute|ActivePath $active) {
                    if ($active instanceof ActiveRoute) {
                        return [
                            'type' => 'route',
                            'route' => [
                                'name' => $active->name,
                                'params' => $active->params,
                            ]
                        ];
                    } else {
                        return [
                            'type' => 'path',
                            'path' => $active->path,
                        ];
                    }
                }),
            'icon' => $this->icon,
            'children' => $this->getChildren(),
        ];
    }

    /**
     * Add paths when the menu item is considered to be active.
     */
    public function active(
        string|ActivePath|null  $path = null,
        array|null              $paths = null,
        string|ActiveRoute|null $route = null,
        array|null              $routes = null,
    ): static
    {
        if ($path) {
            $this->activeDestinations[] = $path instanceof ActivePath
                ? $path
                : new ActivePath($path);
        }

        if ($route) {
            $this->activeDestinations[] = $route instanceof ActiveRoute
                ? $route
                : new ActiveRoute($route);
        }

        if ($paths) {
            foreach ($paths as $item) {
                $this->active(path: $item);
            }
        }

        if ($routes) {
            foreach ($routes as $item) {
                $this->active(route: $item);
            }
        }

        return $this;
    }

    /**
     * Retrieve list of active paths or routes when the menu item is considered active.
     *
     * @return Collection<int, \StackTrace\Ui\Menu\ActivePath|\StackTrace\Ui\Menu\ActiveRoute>
     */
    public function getActiveDestinations(): Collection
    {
        $paths = collect($this->activeDestinations);

        if ($this->action instanceof Link) {
            if ($path = parse_url($this->action->url, PHP_URL_PATH)) {
                $paths->push(new ActivePath('/'.ltrim($path, '/')));
            }
        }

        return $paths;
    }

    /**
     * Create new instance of the item.
     */
    public static function make(
        ?string $id = null,
        ?string $title = null,
        ?Link  $action = null,
        ?Icon  $icon = null,
        ?string $badge = null,
        array $children = [],
    ): static
    {
        return new static($id, $title, $action, $icon, $badge, $children);
    }
}
