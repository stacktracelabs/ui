<?php

namespace App\Table\Actions;

use App\Models\Customer;
use StackTrace\Ui\Selection;
use StackTrace\Ui\Table\Actions\Action;

class RefreshAction extends Action
{
    protected bool $inline = true;

    protected bool $confirmable = false;

    protected ?string $label = 'Sync';

    public function handle(Selection $selection): void
    {
        Customer::query()
            ->whereKey($selection->all())
            ->update(['updated_at' => now()]);
    }
}
