<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Reservation extends Model
{
    //
    use HasFactory, HasUuids;

    protected $fillable = [
        'customer_name',
        'customer_email',
        'customer_phoneNumber',
        'code',
        'vehicle_model',
        'vehicle_type',
        'vehicle_plate',
        'service_id',
        'reservation_date',
        'time_slot_id',
        'note',
        'status',
    ];

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }

    public function timeSlot(): BelongsTo
    {
        return $this->belongsTo(TimeSlot::class);
    }
}
