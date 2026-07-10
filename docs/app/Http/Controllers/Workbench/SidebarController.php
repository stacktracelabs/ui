<?php

namespace App\Http\Controllers\Workbench;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use StackTrace\Ui\Breadcrumbs\BreadcrumbItem;
use StackTrace\Ui\Breadcrumbs\BreadcrumbList;
use StackTrace\Ui\Icon;
use StackTrace\Ui\Link;
use StackTrace\Ui\Menu\Menu;
use StackTrace\Ui\Menu\MenuItem;

final class SidebarController
{
    public function __invoke(Request $request): Response
    {
        $action = $this->selectedAction($request);

        return Inertia::render('Workbench/Sidebar', [
            'menu' => $this->menu(),
            'breadcrumbs' => $this->breadcrumbs($action),
            'action' => $action === null ? null : Str::headline($action),
            'tabs' => $this->tabs(),
        ]);
    }

    private function selectedAction(Request $request): ?string
    {
        $action = $request->route('action');

        return is_string($action) && $action !== '' ? $action : null;
    }

    private function breadcrumbs(?string $action): BreadcrumbList
    {
        $breadcrumbs = BreadcrumbList::make()->append(
            BreadcrumbItem::make('Workbench', Link::to(route('workbench.index'))),
            BreadcrumbItem::make(
                'Sidebar',
                $action === null ? null : Link::to(route('workbench.sidebar')),
            ),
        );

        if ($action !== null) {
            $breadcrumbs->append(BreadcrumbItem::make(Str::headline($action)));
        }

        return $breadcrumbs;
    }

    private function menu(): Menu
    {
        return Menu::make()
            ->add(
                MenuItem::make(
                    id: 'home',
                    title: 'Home',
                    action: Link::to(route('workbench.sidebar')),
                    icon: $this->icon('home'),
                ),
            )
            ->add(
                MenuItem::make(id: 'projects', title: 'Projects')
                    ->addChild($this->actionItem('Design & Engineering', 'palette')->badge('10'))
                    ->addChild($this->actionItem('Sales & Marketing', 'chart'))
                    ->addChild($this->actionItem('Travel', 'compass'))
                    ->addChild($this->actionItem('Support', 'support')->badge('4'))
                    ->addChild($this->actionItem('Feedback', 'message'))
                    ->addChild(
                        MenuItem::make(
                            id: 'application',
                            title: 'Application',
                            icon: $this->icon('server'),
                        )
                            ->addChild($this->actionItem('Deployments', 'rocket')->badge('20'))
                            ->addChild($this->actionItem('Repository', 'branch'))
                            ->addChild($this->actionItem('Actions', 'play'))
                            ->addChild($this->actionItem('Tickets', 'ticket')->badge('6')),
                    ),
            );
    }

    private function tabs(): Menu
    {
        return Menu::make()
            ->add($this->actionItem('Repository', preserveScroll: true))
            ->add($this->actionItem('Actions', preserveScroll: true))
            ->add($this->actionItem('Tickets', preserveScroll: true));
    }

    private function actionItem(
        string $title,
        ?string $icon = null,
        bool $preserveScroll = false,
    ): MenuItem {
        $action = Str::slug($title);

        return MenuItem::make(
            id: $action,
            title: $title,
            action: Link::to(
                route('workbench.sidebar', ['action' => $action]),
                preserveScroll: $preserveScroll,
            ),
            icon: $icon === null ? null : $this->icon($icon),
        );
    }

    private function icon(string $name): Icon
    {
        $path = match ($name) {
            'home' => 'M3 10.75 12 3l9 7.75M5.5 9.5V21h13V9.5M9 21v-7h6v7',
            'palette' => 'M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h4.5A4.5 4.5 0 0 0 21 8.5C21 5.46 16.97 3 12 3ZM7.5 10h.01M9 6.5h.01M14 6h.01M17.5 9h.01',
            'chart' => 'M4 20V10M10 20V4M16 20v-7M22 20H2',
            'compass' => 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm3.5-13.5-2 5-5 2 2-5 5-2Z',
            'support' => 'M4.9 4.9a10 10 0 0 0 0 14.2M4.9 19.1a10 10 0 0 0 14.2 0M19.1 4.9a10 10 0 0 0-14.2 0M19.1 19.1a10 10 0 0 0 0-14.2M8.5 8.5l-3.6-3.6M15.5 8.5l3.6-3.6M8.5 15.5l-3.6 3.6M15.5 15.5l3.6 3.6',
            'message' => 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8ZM8 9h8M8 13h5',
            'server' => 'M4 4h16v6H4V4Zm0 10h16v6H4v-6ZM8 7h.01M8 17h.01M12 7h5M12 17h5',
            'rocket' => 'M14 4c3-2 6-2 6-2s0 3-2 6l-5 5-4-4 5-5ZM9 9l-4 1-3 3 6 1M13 13l1 6 3-3 1-4M7 17c-1 0-3 1-3 3 2 0 3-2 3-3Z',
            'branch' => 'M6 3v12a4 4 0 0 0 4 4h5M6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm11 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0-12a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 9h5a4 4 0 0 0 4-4',
            'play' => 'M8 5v14l11-7L8 5Z',
            'ticket' => 'M3 8a2 2 0 0 0 0 4v5h18v-5a2 2 0 0 0 0-4V5H3v3Zm10-3v12',
        };

        return Icon::svg(sprintf(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="%s" /></svg>',
            $path,
        ));
    }
}
