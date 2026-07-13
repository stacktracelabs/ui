<?php

use Inertia\Testing\AssertableInertia as Assert;

test('the landing page is available', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Home')
            ->has('documentation.navigation', 6));
});

test('every documentation page in the navigation manifest resolves', function () {
    $pages = collect(config('documentation.navigation'))->flatMap(
        fn (array $section): array => $section['items'],
    );

    foreach ($pages as $page) {
        $this->get($page['href'])
            ->assertOk()
            ->assertInertia(fn (Assert $response) => $response->component($page['component']));
    }
});

test('unknown documentation pages return not found', function () {
    $this->get('/docs/fundamentals/not-a-guide')->assertNotFound();
    $this->get('/docs/components/not-a-component')->assertNotFound();
    $this->get('/docs/composables/not-a-composable')->assertNotFound();
    $this->get('/docs/utilities/not-a-utility')->assertNotFound();
    $this->get('/docs/types/not-a-type')->assertNotFound();
});
