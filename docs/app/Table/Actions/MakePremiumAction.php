<?php

namespace App\Table\Actions;

use App\Models\Customer;
use StackTrace\Ui\Selection;
use StackTrace\Ui\Table\Actions\Action;

class MakePremiumAction extends Action
{
    protected ?string $label = 'Move to Premium';

    protected ?string $title = 'Move to Premium';

    protected ?string $description = 'Are you sure you want to move selected customers to the Premium plan?';

    protected ?string $confirmLabel = 'Move to Premium';

    protected ?string $cancelLabel = 'Keep as it is';

    public function handle(Selection $selection): void
    {
        Customer::query()
            ->whereKey($selection->all())
            ->update(['is_premium' => true]);
    }
}
