<?php

return [
    'navigation' => [
        [
            'title' => 'General',
            'items' => [
                [
                    'title' => 'Workbench home',
                    'description' => 'Overview of the local backend component demos.',
                    'href' => '/workbench',
                ],
            ],
        ],
        [
            'title' => 'Components',
            'items' => [
                [
                    'title' => 'Buttons',
                    'description' => 'Buttons, Inertia links, request states, and HTTP methods.',
                    'href' => '/workbench/buttons',
                ],
                [
                    'title' => 'Sidebar navigation',
                    'description' => 'Menus, breadcrumbs, tabs, icons, badges, and nested links.',
                    'href' => '/workbench/sidebar',
                ],
            ],
        ],
        [
            'title' => 'Data',
            'items' => [
                [
                    'title' => 'Customer table',
                    'description' => 'Query-backed pagination, filters, sorting, and actions.',
                    'href' => '/workbench/customers',
                ],
                [
                    'title' => 'Collection table',
                    'description' => 'The same table protocol backed by an in-memory collection.',
                    'href' => '/workbench/customers/collection',
                ],
            ],
        ],
    ],
];
