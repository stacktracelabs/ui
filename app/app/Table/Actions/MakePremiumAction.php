<?php


namespace App\Table\Actions;


use App\Models\Customer;
use Illuminate\Support\Facades\Auth;
use StackTrace\Ui\Selection;
use StackTrace\Ui\Table\Actions\Action;

class MakePremiumAction extends Action
{
    protected ?string $label = 'Move to Premium';
    protected ?string $title = 'Move to Premium';
    protected ?string $description = 'Are you sure you want to move selected customers to Premium plan?';
    protected ?string $confirmLabel = 'Move to Premium';
    protected ?string $cancelLabel = 'Keep as it is';

    public function __construct(
        protected string $class
    ) { }

    public function authorize(): bool
    {
        return Auth::check();
    }

    public function handle(Selection $selection): void
    {
        Customer::query()->whereIn('id', $selection->all())->eachById(function (Customer $customer) {
            $customer->update([
                'is_premium' => true,
            ]);
        });
    }
}
