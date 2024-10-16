<?php


namespace StackTrace\Ui\Table;


use Illuminate\Database\Eloquent\Builder;
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
     * Register new filter.
     */
    public function widget(FilterWidget $filter): static
    {
        $this->widgets[] = $filter;

        return $this;
    }

    /**
     * Apply this filter on the source.
     */
    public function apply(mixed $source): mixed
    {
        foreach ($this->widgets as $widget) {
            $source = $widget->filter($source);
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
            'widgets' => collect($this->widgets)->map(function (FilterWidget $widget) {
                return [
                    'component' => $this->resolveComponentName($widget->component()),
                    'props' => $this->resolveComponentProps($widget->toView()),
                ];
            }),
        ];
    }
}
