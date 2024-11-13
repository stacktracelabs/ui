<?php


namespace StackTrace\Ui\Table\Actions;


use Illuminate\Support\Facades\Crypt;
use StackTrace\Ui\Table\BaseAction;

abstract class Action extends BaseAction
{
    /**
     * The title of the action.
     */
    protected ?string $title = null;

    /**
     * The description of the action.
     */
    protected ?string $description = null;

    /**
     * Flag whether action is destructive.
     */
    protected bool $destructive = false;

    /**
     * Label of the "Cancel" button.
     */
    protected ?string $cancelLabel = null;

    /**
     * Label of the "Confirm" button.
     */
    protected ?string $confirmLabel = null;

    /**
     * Flag whether action needs to be confirmed.
     */
    protected bool $confirmable = true;

    /**
     * The params of the action.
     */
    protected array $arguments = [];

    /**
     * Retrieve type of the action.
     */
    protected function getType(): string
    {
        return 'Executable';
    }

    /**
     * Retrieve title of the action.
     */
    protected function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * Retrieve description of the action.
     */
    protected function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * Determine whether action is destructive.
     */
    protected function isDestructive(): bool
    {
        return $this->destructive;
    }

    /**
     * Retrieve label for "Cancel" button.
     */
    protected function getCancelLabel(): string
    {
        return $this->cancelLabel ?: __('Cancel');
    }

    /**
     * Retrieve label for "Confirm" button.
     */
    protected function getConfirmLabel(): string
    {
        return $this->confirmLabel ?: __('Confirm');
    }

    public function toView(mixed $resource): array
    {
        return [
            ...parent::toView($resource),
            'title' => $this->getTitle(),
            'description' => $this->getDescription(),
            'cancelLabel' => $this->getCancelLabel(),
            'confirmLabel' => $this->getConfirmLabel(),
            'action' => get_called_class(),
            'isDestructive' => $this->isDestructive(),
            'confirmable' => $this->confirmable,
            'args' => Crypt::encrypt($this->arguments),
        ];
    }

    public static function make(): static
    {
        $arguments = func_get_args();

        $action = new static(...$arguments);

        $action->arguments = $arguments;

        return $action;
    }
}
