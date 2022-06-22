<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class Colombia extends Seeder
{
    /**
     * Run the database seeds.
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
