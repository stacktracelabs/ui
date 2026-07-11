<?php

use App\Models\Customer;
use App\Table\Actions\MakePremiumAction;
use Illuminate\Foundation\Testing\LazilyRefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(LazilyRefreshDatabase::class);

test('the local workbench landing page is available', function () {
    $this->get(route('workbench.index'))
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Workbench/Index')
            ->where('workbench.enabled', true)
            ->has('workbench.navigation', 3)
            ->where('workbench.navigation.1.items.0.href', '/workbench/buttons'));
});

test('the button workbench exercises inertia requests through real controllers', function () {
    $this->get(route('workbench.buttons.index'))
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Workbench/Buttons')
            ->where('lastAction', null));

    $this->get(route('workbench.buttons.index', ['visit' => 'GET']))
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Workbench/Buttons')
            ->where('lastAction.method', 'GET'));

    $requests = [
        ['method' => 'post', 'route' => 'workbench.buttons.store', 'expected' => 'POST'],
        ['method' => 'put', 'route' => 'workbench.buttons.update', 'expected' => 'PUT'],
        ['method' => 'delete', 'route' => 'workbench.buttons.destroy', 'expected' => 'DELETE'],
    ];

    foreach ($requests as $request) {
        $this->{$request['method']}(route($request['route']))
            ->assertRedirect(route('workbench.buttons.index'));

        $this->get(route('workbench.buttons.index'))
            ->assertSuccessful()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Workbench/Buttons')
                ->where('lastAction.method', $request['expected']));
    }
});

test('the customer workbench pages serialize backend tables and resource actions', function () {
    $customer = Customer::factory()->create([
        'name' => 'Ada Lovelace',
        'is_premium' => false,
    ]);

    $this->get(route('workbench.customers.index'))
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Workbench/Customers/Index')
            ->has('customers.rows', 1));

    $this->get(route('workbench.customers.collection'))
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Workbench/Customers/Collection')
            ->has('customers.rows', 1));

    $this->get(route('workbench.customers.show', $customer))
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Workbench/Customers/Show')
            ->where('id', $customer->id)
            ->where('name', 'Ada Lovelace')
            ->has('actions.actions'));
});

test('customer details and plans can be updated without authentication', function () {
    $customers = Customer::factory()->count(2)->create(['is_premium' => false]);
    $customer = $customers->firstOrFail();

    $this->patch(route('workbench.customers.update', $customer), [
        'name' => 'Updated Customer',
    ])->assertRedirect();

    expect($customer->fresh()->name)->toBe('Updated Customer');

    $this->post(route('workbench.customers.update-plan'), [
        'customers' => $customers->modelKeys(),
        'is_premium' => true,
    ])->assertRedirect();

    expect(Customer::query()->where('is_premium', true)->count())->toBe(2);
});

test('executable table actions run through the local package endpoint', function () {
    $customer = Customer::factory()->create(['is_premium' => false]);
    $action = MakePremiumAction::make()->toView(null);

    $this->from(route('workbench.customers.index'))
        ->post(route('ui.data-table-action'), [
            'selection' => [$customer->id],
            'action' => $action['action'],
            'args' => $action['args'],
        ])
        ->assertRedirect(route('workbench.customers.index'));

    expect($customer->fresh()->is_premium)->toBeTrue();
});

test('the sidebar workbench serializes its backend navigation state', function () {
    $this->get(route('workbench.sidebar', ['action' => 'repository']))
        ->assertSuccessful()
        ->assertInertia(fn (Assert $page) => $page
            ->component('Workbench/Sidebar')
            ->where('action', 'Repository')
            ->has('menu', 2)
            ->has('breadcrumbs', 3)
            ->has('tabs', 3));
});

test('the local database seeder creates the workbench dataset', function () {
    $this->seed();

    expect(Customer::query()->count())->toBe(500);
});
