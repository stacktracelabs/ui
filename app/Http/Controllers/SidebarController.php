<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use StackTrace\Ui\Breadcrumbs\BreadcrumbItem;
use StackTrace\Ui\Breadcrumbs\BreadcrumbList;
use StackTrace\Ui\Icon;
use StackTrace\Ui\Link;
use StackTrace\Ui\Menu\Menu;
use StackTrace\Ui\Menu\MenuItem;

class SidebarController
{
    public function __invoke(Request $request)
    {
        // TODO: Can callback, či sa ma zobraziť

        $breadcrumbs = BreadcrumbList::make();
        $breadcrumbs->append(BreadcrumbItem::make('Sidebar', Link::to(route('sidebar'))));

        $createItem = fn (string $title, ?string $icon = null) => MenuItem::make(
            title: $title,
            action: Link::to(route('sidebar', Str::slug($title))),
            icon: $icon ? new Icon($icon) : null,
        );

        $menu = Menu::make()
            ->add(
                MenuItem::make(
                    title: 'Home',
                    action: Link::to(route('sidebar')),
                    icon: new Icon('House'),
                )
            )
            ->add(
                MenuItem::make(title: 'Projects')
                    ->addChild($createItem('Design & Engineering', 'lamp')->badge('10'))
                    ->addChild($createItem('Sales & Marketing', 'router'))
                    ->addChild($createItem('Travel', 'sofa'))
                    ->addChild($createItem('Support', 'school'))
                    ->addChild($createItem('Feedback', 'book-check'))
                    ->addChild(
                        MenuItem::make(title: 'Application', icon: new Icon('washing-machine'))
                            ->addChild($createItem('Deployments')->badge('20'))
                            ->addChild($createItem('Repository'))
                            ->addChild($createItem('Actions'))
                            ->addChild($createItem('Tickets'))
                            ->addChild(
                                MenuItem::make(title: 'Test', action: Link::to(route('sidebar', 'Test')))
                                    ->addChild($createItem('Tickets'))
                            )
                    )
            )
        ;

        $action = $request->route('action');

        if ($action) {
            $breadcrumbs->append(BreadcrumbItem::make(Str::title($action)));
        }

        return Inertia::render('SidebarPage', [
            'menu' => $menu,
            'breadcrumbs' => $breadcrumbs,
            'action' => $action ? Str::headline($action) : null,
        ]);
    }
}
