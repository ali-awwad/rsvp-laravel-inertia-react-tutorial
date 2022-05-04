<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create([
            'name'=>'Ali Awwad',
            'email'=>'ali@test.com',
        ]);
        \App\Models\Campaign::factory(100)->create();
        \App\Models\Contact::factory(100)->create();
    }
}
