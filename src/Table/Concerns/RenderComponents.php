<?php


namespace StackTrace\Ui\Table\Concerns;


use Illuminate\Support\Str;

trait RenderComponents
{
    protected function resolveComponentName(string $component): string
    {
        return Str::of($component)
            ->replace('/', '')
            ->replace(':', '')
            ->value();
    }

    protected function resolveComponentProps(array $props): array|object
    {
        if (empty($props)) {
            return (object) $props;
        }

        return $props;
    }
}
