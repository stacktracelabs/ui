<?php

namespace Database\Factories;

use App\Enums\BusinessArea;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'company' => fake()->company(),
            'email' => fake()->unique()->safeEmail(),
            'is_premium' => fake()->boolean(),
            'business_area' => collect(BusinessArea::cases())->random(),
            'employee_count' => fake()->numberBetween(1, 1000),
            'created_at' => Carbon::parse(fake()->dateTime()),
        ];
    }
}
