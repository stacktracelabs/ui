<?php

namespace StackTrace\Ui;

/**
 * @deprecated Implement \Inertia\ProvidesInertiaProperty directly and return
 *             the keys exactly as they should be sent to the frontend.
 */
final class UnformattedViewModelData
{
    public function __construct(
        public readonly array $data
    ) {}
}
