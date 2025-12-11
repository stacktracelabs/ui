<?php


namespace StackTrace\Ui\Table;


use Illuminate\Support\Collection;
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
     * Remove the filter widgets.
     */
    public function clearWidgets(): static
    {
        $this->widgets = [];

        return $this;
    }

    /**
     * Ensure, that tableId is set for widgets.
     */
    private function ensureTableIdIsSet(?string $tableId): void
    {
        if ($tableId) {
            foreach ($this->widgets as $widget) {
                $widget->setTableId($tableId);
            }
        }
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
    public function apply(mixed $source, ?string $tableId = null): mixed
    {
        $this->applied = [];

        $this->ensureTableIdIsSet($tableId);

        foreach ($this->widgets as $widget) {
            if ($widget->shouldDisplay($this)) {
                if ($source instanceof Collection) {
                    $source = $source->values();
                }

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
            $value = array_merge($value, $widget->getDefaultValueWithPrefix());
        }
        if (empty($value)) {
            return (object) [];
        }
        return $value;
    }

    public function toView(?string $tableId = null): array
    {
        $this->ensureTableIdIsSet($tableId);

        return [
            'defaultValue' => $this->getDefaultValue(),
            'widgets' => collect($this->widgets)
                ->filter(fn (FilterWidget $widget) => $widget->shouldDisplay($this))
                ->values()
                ->map(fn (FilterWidget $widget) => [
                    'component' => $this->resolveComponentName($widget->component()),
                    'props' => $this->resolveComponentProps($widget->getViewWithPrefix()),
                ]),
        ];
    }
}
