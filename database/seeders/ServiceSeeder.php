<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $services = [
            [
                "id" => Str::uuid(),
                "name" => "Ganti Oli",
                "description" => "Perawatan mesin cepat & efisien untuk performa maksimal kendaraan.",
                "estimated_duration" => 30,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => Str::uuid(),
                "name" => "Servis Rutin",
                "description" => "Pengecekan menyeluruh kendaraan Anda untuk keamanan berkendara.",
                "estimated_duration" => 60,
                "created_at" => now(),
                "updated_at" => now(),
            ],
            [
                "id" => Str::uuid(),
                "name" => "Perbaiki Berat",
                "description" => "Penanganan masalah teknis mendalam dan penggantian suku cadang utama.",
                "estimated_duration" => 1440,
                "created_at" => now(),
                "updated_at" => now(),
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
