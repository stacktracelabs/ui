<?php

namespace App\Http\Controllers\Workbench;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

final class ButtonRequestController
{
    public function store(Request $request): RedirectResponse
    {
        return $this->complete($request, 'POST');
    }

    public function update(Request $request): RedirectResponse
    {
        return $this->complete($request, 'PUT');
    }

    public function destroy(Request $request): RedirectResponse
    {
        return $this->complete($request, 'DELETE');
    }

    private function complete(Request $request, string $method): RedirectResponse
    {
        $this->simulateLatency($request);

        return to_route('workbench.buttons.index')->with('workbench.buttons.last_action', [
            'method' => $method,
            'message' => "The {$method} request completed through a real Laravel controller.",
            'completedAt' => now()->format('H:i:s'),
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
