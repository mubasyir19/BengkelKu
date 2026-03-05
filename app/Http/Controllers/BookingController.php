<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use App\Models\Service;
use App\Models\TimeSlot;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BookingController extends Controller
{
    //
    public function index()
    {
        $services = Service::all();
        $time_slots = TimeSlot::all();

        return Inertia::render('Booking', [
            'services' => $services,
            'timeSlots' => $time_slots,
        ]);
    }

    private function generateReservationCode(): string
    {
        $attempts = 0;
        $maxAttempts = 10; // Limit attempts to avoid infinite loop

        do {
            if ($attempts >= $maxAttempts) {
                // Fallback: use timestamp + random
                return 'RSV-' . now()->format('YmdHis') . '-' . strtoupper(Str::random(4));
            }
            // Format: RSV-20260302-AB12
            $code = 'RSV-' . now()->format('Ymd') . '-' . strtoupper(Str::random(4));
            $attempts++;
        } while (Reservation::where('code', $code)->exists());

        return $code;
    }

    public function storeBook(Request $request)
    {

        $validated = $request->validate([
            'customer_name' => ['required', 'string', 'max:255'],
            'customer_email' => ['required', 'email', 'max:255'],
            'customer_phoneNumber' => ['required', 'string', 'max:20'],
            'vehicle_model' => ['required', 'string', 'max:255'],
            'vehicle_type' => [
                'required',
                'in:motor,mobil,suv,mpv,pickup,truk,bus,mobil_listrik,motor_listrik,sepeda'
            ],
            'vehicle_plate' => ['required', 'string', 'max:20'],
            'service_id' => ['required', 'uuid', 'exists:services,id'],
            'reservation_date' => ['required', 'date', 'after_or_equal:today'],
            'time_slot_id' => ['required', 'uuid', 'exists:time_slots,id'],
        ]);

        $reservationDate = Carbon::parse($validated['reservation_date'])->format('Y-m-d');

        $reservation = Reservation::create([
            'customer_name'       => $validated['customer_name'],
            'customer_email'      => $validated['customer_email'],
            'customer_phoneNumber' => $validated['customer_phoneNumber'],
            'code'                => $this->generateReservationCode(),
            'vehicle_model'       => $validated['vehicle_model'],
            'vehicle_type'        => $validated['vehicle_type'],
            'vehicle_plate'       => strtoupper($validated['vehicle_plate']),
            'service_id'          => $validated['service_id'],
            'reservation_date'    => $reservationDate,
            'time_slot_id'        => $validated['time_slot_id'],
            'status'              => 'pending',
        ]);

        return redirect()->route('booking.index')->with([
            'success' => true,
            'reservation_code' => $reservation->code,
        ]);
    }
}
