<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $workbenchEnabled = app()->environment(['local', 'testing']);

        return [
            ...parent::share($request),
            'appName' => config('app.name'),
            'documentation' => [
                'githubUrl' => config('documentation.github_url'),
                'registryUrl' => config('documentation.registry_url'),
                'navigation' => config('documentation.navigation'),
            ],
            'workbench' => [
                'enabled' => $workbenchEnabled,
                'navigation' => $workbenchEnabled ? config('workbench.navigation') : [],
            ],
            'ziggy' => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
