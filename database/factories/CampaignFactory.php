<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Campaign>
 */
class CampaignFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'uuid' => $this->faker->uuid,
            'title' => $this->faker->sentence,
            'location' => $this->faker->address,
            'description' => $this->faker->text,
            'start_date' => Carbon::tomorrow()->addHours(12),
            'end_date' => Carbon::tomorrow()->addHours(14),
            'parking' => $this->faker->sentence,
            'parking_link' => $this->faker->url,
        ];
    }
}
