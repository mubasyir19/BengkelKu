<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
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

    public function reservationEdit(string $id)
    {
        $dataReservation = Reservation::with(['service', 'timeSlot'])->find($id);
        return Inertia::render('Dashboard/Reservation/Edit', [
            'data' => $dataReservation,
        ]);
    }

    public function updateStatus(string $id, Request $request)
    {
        $reservation = Reservation::findOrFail($id);

        $validated = $request->validate([
            'status' => ['required', 'string', 'in:pending,confirmed,processing,completed,cancelled']
        ]);

        $reservation->update([
            'status' => $validated['status']
        ]);

        return redirect()->back()->with('message', 'Status reservasi berhasil diperbarui!');
    }

    public function delete(string $id, Request $request) {}

    public function cancelReservation(string $id, Request $request) {}

    public function checkQueue() {}
}
