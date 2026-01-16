<?php


namespace StackTrace\Ui\Table;


use Illuminate\Support\Arr;
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
     * List of filter widgets which should be ignored.
     *
     * @var array<string>
     */
    protected array $excludedWidgets = [];

    /**
     * List of filters widgets which only should be allowed.
     *
     * @var array<string>
     */
    protected array $allowedWidgets = [];

    /**
     * Set a prefix for query params used by the widgets.
     */
    protected ?string $queryPrefix = null;

    /**
     * Exclude given set of widgets from the filter.
     */
    public function exceptWidgets(string|array $name): static
    {
        $this->excludedWidgets = array_merge($this->excludedWidgets, Arr::wrap($name));

        return $this;
    }

    /**
     * Allow only given set of widgets.
     */
    public function onlyWidgets(string|array $name): static
    {
        $this->allowedWidgets = array_merge($this->allowedWidgets, Arr::wrap($name));

        return $this;
    }

    /**
     * Set a query param field prefix for widgets.
     */
    public function withQueryPrefix(?string $prefix): static
    {
        $this->queryPrefix = $prefix;

        return $this;
    }

    /**
     * Register new filter widget.
     */
    public function addWidget(FilterWidget $filter): static
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
     * Check whether given filter is applied.
     */
    public function isApplied(string $name): bool
    {
        return collect($this->applied)->first(fn (FilterWidget $widget) => $widget->getName() == $name) != null;
    }

    /**
     * Resolve widgets to use.
     */
    protected function resolveWidgets(): array
    {
        return collect($this->widgets)
            ->filter(function (FilterWidget $widget) {
                $name = $widget->getName();

                if (in_array($name, $this->excludedWidgets)) {
                    return false;
                }

                if (!empty($this->allowedWidgets) && !in_array($name, $this->allowedWidgets)) {
                    return false;
                }

                return true;
            })
            ->map(fn (FilterWidget $widget) => $widget->withPrefix($this->queryPrefix))
            ->values()
            ->all();
    }

    /**
     * Apply this filter on the source.
     */
    public function apply(mixed $source): mixed
    {
        $this->applied = [];

        foreach ($this->resolveWidgets() as $widget) {
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

        foreach ($this->resolveWidgets() as $widget) {
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
            'widgets' => collect($this->resolveWidgets())
                ->filter(fn (FilterWidget $widget) => $widget->shouldDisplay($this))
                ->values()
                ->map(fn (FilterWidget $widget) => [
                    'component' => $this->resolveComponentName($widget->component()),
                    'props' => $this->resolveComponentProps($widget->toView()),
                ]),
        ];
    }
}
