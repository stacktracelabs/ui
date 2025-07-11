<?php


namespace App\Table\Actions;


use StackTrace\Ui\Table\Actions\Action;

class RefreshAction extends Action
{
    protected bool $inline = true;
    protected ?string $icon = "refresh-cw";
    protected bool $confirmable = false;
    protected ?string $label = "Sync";

    public function handle(): void
    {
        //
    }
}
