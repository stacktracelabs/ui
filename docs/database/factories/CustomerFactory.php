<?php

namespace Database\Factories;

use App\Enums\BusinessArea;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'company' => fake()->company(),
            'email' => fake()->unique()->safeEmail(),
            'is_premium' => fake()->boolean(),
            'business_area' => fake()->randomElement(BusinessArea::cases()),
            'employee_count' => fake()->numberBetween(1, 1000),
            'created_at' => fake()->dateTimeBetween('-20 years'),
        ];
    }
}
