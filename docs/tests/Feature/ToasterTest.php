<?php

use Illuminate\Support\Str;
use StackTrace\Ui\Toaster;

test('backend toasts include unique identifiers', function () {
    $this->startSession();

    $toaster = app(Toaster::class);

    $toaster->default('Project saved', 'The project is ready.');
    $firstToast = session()->get('inertia.flash_data.toast');

    expect($firstToast)
        ->toMatchArray([
            'title' => 'Project saved',
            'content' => 'The project is ready.',
            'variant' => 'default',
        ])
        ->and($firstToast['id'])->toBeString()
        ->and(Str::isUuid($firstToast['id']))->toBeTrue();

    $toaster->destructive('Project failed');
    $secondToast = session()->get('inertia.flash_data.toast');

    expect($secondToast['id'])->not->toBe($firstToast['id'])
        ->and($secondToast['variant'])->toBe('destructive');
});
