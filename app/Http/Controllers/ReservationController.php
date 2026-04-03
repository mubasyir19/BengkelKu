<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Inertia\Inertia;

class ReservationController extends Controller
{
    // menampilkan halaman pencarian reservasi publik
    public function index()
    {
        return Inertia::render('CheckReservation');
    }

    public function reservationDashboard()
    {
        $listReservation = Reservation::orderBy('reservation_date', 'desc')->paginate(10)->withQueryString();
        return Inertia::render('Dashboard/Reservation', [
            'data' => $listReservation,
        ]);
    }

    public function checkQueue() {}
}
