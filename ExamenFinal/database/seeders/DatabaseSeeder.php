<?php

namespace Database\Seeders;

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
        DB::table('paises')->instert([
            'nombre' => 'Colombia',
            'capital' => 'Bogotá',
            'idioma' => 'español',
            'poblacion' => 50000000,
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
