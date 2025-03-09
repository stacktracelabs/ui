<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use StackTrace\Ui\Icon;
use StackTrace\Ui\Link;
use StackTrace\Ui\Menu\Menu;
use StackTrace\Ui\Menu\MenuGroup;
use StackTrace\Ui\Menu\MenuItem;

class SidebarController
{
    public function __invoke(Request $request)
    {
        // TODO: Iknonky
        // TODO: Can callback, či sa ma zobraziť

        $createItem = fn (string $title, ?string $icon = null) => new MenuItem(
            title: $title,
            action: Link::to(route('sidebar', Str::slug($title))),
            icon: $icon ? new Icon($icon) : null,
        );

        $menu = (new Menu)
            ->add(new MenuGroup(items: [new MenuItem(
                title: 'Home',
                action: Link::to(route('sidebar')),
                icon: new Icon('House'),
            )]))
            ->add(
                new MenuGroup(
                    title: 'Projects',
                    items: [
                        $createItem('Design & Engineering', 'lamp'),
                        $createItem('Sales & Marketing', 'router'),
                        $createItem('Travel', 'sofa'),
                        $createItem('Support', 'school'),
                        $createItem('Feedback', 'book-check'),

                        new MenuGroup(
                            title: 'Application',
                            icon: new Icon('washing-machine'),
                            items: [
                                $createItem('Deployments'),
                                $createItem('Repository'),
                                $createItem('Actions'),
                                $createItem('Tickets'),
                            ],
                        )
                    ]
                )
            )
        ;

        return Inertia::render('SidebarPage', [
            'menu' => $menu,
            'action' => $request->route('action'),
        ]);
    }
}
