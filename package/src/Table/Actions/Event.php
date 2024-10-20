<?php


namespace StackTrace\Ui\Table\Actions;


use Closure;
use StackTrace\Ui\Table\BaseAction;

class Event extends BaseAction
{
    public function __construct(
        string|Closure $label,
        protected string|Closure $event,
    )
    {
        parent::__construct($label);
    }

    public function getType(): string
    {
        return 'Event';
    }

    public function toView(mixed $resource): array
    {
        return [
            ...parent::toView($resource),
            'event' => $this->event instanceof Closure ? call_user_func($this->event) : $this->event,
        ];
    }
}
