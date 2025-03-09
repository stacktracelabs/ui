<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use StackTrace\Ui\Link;
use StackTrace\Ui\Menu\Menu;
use StackTrace\Ui\Menu\MenuGroup;
use StackTrace\Ui\Menu\MenuItem;

class SidebarController
{
    public function __invoke(Request $request)
    {
        // TODO: Iknonky
        // TODO: Active state
        // TODO: Can callback, či sa ma zobraziť

        $createItem = fn (string $title) => new MenuItem(
            title: $title,
            action: Link::to(route('sidebar', Str::slug($title)))
        );

        $menu = (new Menu)
            ->add(new MenuGroup(items: [new MenuItem(
                title: 'Home',
                action: Link::to(route('sidebar')),
            )]))
            ->add(
                new MenuGroup(
                    title: 'Projects',
                    items: [
                        $createItem('Design & Engineering'),
                        $createItem('Sales & Marketing'),
                        $createItem('Travel'),
                        $createItem('Support'),
                        $createItem('Feedback'),

                        new MenuGroup(
                            title: 'Application',
                            items: [
                                $createItem('Deployments'),
                                $createItem('Repository'),
                                $createItem('Actions'),
                                $createItem('Tickets'),
                            ]
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
