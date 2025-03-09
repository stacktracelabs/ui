<?php


namespace StackTrace\Ui\Menu;


use GuzzleHttp\Psr7\Uri;
use StackTrace\Ui\Icon;
use StackTrace\Ui\Link;
use StackTrace\Ui\ViewModel;

class MenuItem extends ViewModel
{
    public function __construct(
        protected string $title,
        protected ?Link  $action = null,
        protected ?Icon  $icon = null,
        protected ?string $badge = null
    ) { }

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

    protected function getActivePaths(): array
    {
        $paths = [];

        if ($this->action instanceof Link) {
            if ($path = parse_url($this->action->url, PHP_URL_PATH)) {
                $paths[] = '/'.ltrim($path, '/');
            }
        }

        return $paths;
    }

    public function getActiveRoutes(): array
    {
        return [];
    }
}
