<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

Route::get('/', fn (): Response => Inertia::render('Home'))->name('home');

$renderDocumentationPage = static function (string $href): Response {
    $page = collect(config('documentation.navigation'))
        ->flatMap(fn (array $section): array => $section['items'])
        ->firstWhere('href', $href);

    abort_unless($page, 404);

    return Inertia::render($page['component']);
};

Route::get('/docs', fn (): Response => $renderDocumentationPage('/docs'))->name('docs');
Route::get('/docs/installation', fn (): Response => $renderDocumentationPage('/docs/installation'))->name('docs.installation');
Route::get('/docs/components/{component}', fn (string $component): Response => $renderDocumentationPage("/docs/components/{$component}"))
    ->where('component', '[a-z0-9-]+')
    ->name('docs.components.show');
Route::get('/docs/composables/{composable}', fn (string $composable): Response => $renderDocumentationPage("/docs/composables/{$composable}"))
    ->where('composable', '[a-z0-9-]+')
    ->name('docs.composables.show');
