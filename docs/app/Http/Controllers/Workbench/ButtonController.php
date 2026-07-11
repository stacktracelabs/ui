<?php

namespace App\Http\Controllers\Workbench;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

final class ButtonController
{
    public function __invoke(Request $request): Response
    {
        $this->simulateLatency($request);

        $visit = $request->string('visit')->toString();

        return Inertia::render('Workbench/Buttons', [
            'lastAction' => $visit === ''
                ? $request->session()->get('workbench.buttons.last_action')
                : [
                    'method' => 'GET',
                    'message' => 'The GET visit completed through ButtonLink.',
                    'completedAt' => now()->format('H:i:s'),
                ],
        ]);
    }

    private function simulateLatency(Request $request): void
    {
        if (! app()->environment('local')) {
            return;
        }

        $milliseconds = min(max($request->integer('delay'), 0), 2000);

        if ($milliseconds > 0) {
            usleep($milliseconds * 1000);
        }
    }
}
