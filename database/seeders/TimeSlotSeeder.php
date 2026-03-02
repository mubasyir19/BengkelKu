<?php

namespace Database\Seeders;

use App\Models\TimeSlot;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class TimeSlotSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $timeSlots = [
            // Pagi (08:00 - 12:00)
            [
                'id' => Str::uuid(),
                'start_time' => '08:00:00',
                'end_time' => '09:00:00',
                'capacity' => 3,
                'is_active' => true,
            ],
            [
                'id' => Str::uuid(),
                'start_time' => '09:00:00',
                'end_time' => '10:00:00',
                'capacity' => 3,
                'is_active' => true,
            ],
            [
                'id' => Str::uuid(),
                'start_time' => '10:00:00',
                'end_time' => '11:00:00',
                'capacity' => 3,
                'is_active' => true,
            ],
            [
                'id' => Str::uuid(),
                'start_time' => '11:00:00',
                'end_time' => '12:00:00',
                'capacity' => 3,
                'is_active' => true,
            ],
            // Siang (13:00 - 17:00)
            [
                'id' => Str::uuid(),
                'start_time' => '13:00:00',
                'end_time' => '14:00:00',
                'capacity' => 3,
                'is_active' => true,
            ],
            [
                'id' => Str::uuid(),
                'start_time' => '14:00:00',
                'end_time' => '15:00:00',
                'capacity' => 3,
                'is_active' => true,
            ],
            [
                'id' => Str::uuid(),
                'start_time' => '15:00:00',
                'end_time' => '16:00:00',
                'capacity' => 3,
                'is_active' => true,
            ],
            [
                'id' => Str::uuid(),
                'start_time' => '16:00:00',
                'end_time' => '17:00:00',
                'capacity' => 2,
                'is_active' => true,
            ],
        ];

        foreach ($timeSlots as $slot) {
            TimeSlot::create($slot);
        }
    }
}
