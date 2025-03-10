<?php


namespace StackTrace\Ui\Table;


use Closure;
use StackTrace\Ui\Table\Concerns\RenderComponents;

class Filter
{
    use RenderComponents;

    /**
     * List of registered filter widgets.
     *
     * @var array<\StackTrace\Ui\Table\FilterWidget>
     */
    protected array $widgets = [];

    /**
     * List of filters which are applied.
     *
     * @var array<\StackTrace\Ui\Table\FilterWidget>
     */
    protected array $applied = [];

    /**
     * Register new filter.
     */
    public function widget(FilterWidget $filter): static
    {
        $this->widgets[] = $filter;

        return $this;
    }

    /**
     * Check whether given filter is applied.
     */
    public function isApplied(string $name): bool
    {
        return collect($this->applied)->first(fn (FilterWidget $widget) => $widget->getName() == $name) != null;
    }

    /**
     * Apply this filter on the source.
     */
    public function apply(mixed $source): mixed
    {
        $this->applied = [];

        foreach ($this->widgets as $widget) {
            if ($widget->shouldDisplay($this)) {
                [$source, $applied] = $widget->filter($source);

                if ($applied) {
                    $this->applied[] = $widget;
                }
            }
        }

        return $source;
    }

    /**
     * The default value of the filter.
     */
    protected function getDefaultValue(): array
    {
        $value = [];

        foreach ($this->widgets as $widget) {
            $value = array_merge($value, $widget->defaultValue());
        }

        if (empty($value)) {
            return (object) [];
        }

        return $value;
    }

    public function toView(): array
    {
        return [
            'defaultValue' => $this->getDefaultValue(),
            'widgets' => collect($this->widgets)
                ->filter(fn (FilterWidget $widget) => $widget->shouldDisplay($this))
                ->values()
                ->map(fn (FilterWidget $widget) => [
                    'component' => $this->resolveComponentName($widget->component()),
                    'props' => $this->resolveComponentProps($widget->toView()),
                ]),
        ];
    }
}
