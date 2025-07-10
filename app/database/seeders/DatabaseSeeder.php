<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Peter Stovka',
            'email' => 'ps@stacktrace.sk',
        ]);

        User::factory(10)->create();

        Customer::factory(500)->create();
    }
}
