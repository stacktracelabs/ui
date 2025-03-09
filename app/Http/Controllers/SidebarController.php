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
        // TODO: Can callback, či sa ma zobraziť

        $createItem = fn (string $title, ?string $icon = null) => MenuItem::make(
            title: $title,
            action: Link::to(route('sidebar', Str::slug($title))),
            icon: $icon ? new Icon($icon) : null,
        );

        $menu = Menu::make()
            ->add(MenuGroup::make()->add(MenuItem::make(
                title: 'Home',
                action: Link::to(route('sidebar')),
                icon: new Icon('House'),
            )))
            ->add(
                MenuGroup::make(title: 'Projects')
                    ->add($createItem('Design & Engineering', 'lamp')->badge('10'))
                    ->add($createItem('Sales & Marketing', 'router'))
                    ->add($createItem('Travel', 'sofa'))
                    ->add($createItem('Support', 'school'))
                    ->add($createItem('Feedback', 'book-check'))
                    ->add(
                        MenuGroup::make(title: 'Application', icon: new Icon('washing-machine'))
                            ->add($createItem('Deployments')->badge('20'))
                            ->add($createItem('Repository'))
                            ->add($createItem('Actions'))
                            ->add($createItem('Tickets'))
                    )
            )
        ;

        return Inertia::render('SidebarPage', [
            'menu' => $menu,
            'action' => $request->route('action'),
        ]);
    }
}
