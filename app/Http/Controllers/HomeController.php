<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Home');
    }

    public function booking()
    {
        return Inertia::render('Booking');
    }

    public function checkReserve(Request $request)
    {
        $reservation = null;

        // Hanya lakukan pencarian jika kedua input tersedia
        if ($request->filled(['phoneNumber', 'vehicle_plate'])) {
            $reservation = Reservation::where('customer_phoneNumber', $request->phoneNumber)
                ->where('vehicle_plate', strtoupper($request->vehicle_plate)) // Auto uppercase untuk plat
                ->with('service') // Load relasi service untuk mendapatkan nama servis
                ->first();
        }

        return Inertia::render('CheckReservation', [
            'reservation' => $reservation,
            // Mengirim balik input agar form tidak ter-reset setelah klik cari
            'filters' => $request->only(['phoneNumber', 'vehicle_plate']),
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}
