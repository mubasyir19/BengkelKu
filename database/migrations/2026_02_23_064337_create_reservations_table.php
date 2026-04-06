<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reservations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('customer_name');
            $table->string('customer_email');
            $table->string('customer_phoneNumber');
            $table->string('code');
            $table->string('vehicle_model');
            $table->enum('vehicle_type', [
                'motor',         // Sepeda motor
                'mobil',         // Mobil pribadi
                'suv',           // Sport Utility Vehicle
                'mpv',           // Multi-Purpose Vehicle
                'pickup',        // Pick up
                'truk',          // Truk
                'bus',           // Bus
                'mobil_listrik', // Mobil listrik
                'motor_listrik', // Motor listrik
                'sepeda'         // Sepeda
            ]);
            $table->string('vehicle_plate');
            $table->foreignUuid('service_id')->constrained('services')->cascadeOnDelete();
            $table->date('reservation_date');
            $table->foreignUuid('time_slot_id')->constrained('time_slots')->cascadeOnDelete();
            $table->enum('status', ['pending', 'confirmed', 'processing', 'completed', 'cancelled'])->default('pending');
            $table->text('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
