<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ReservationController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('CheckReservation');
    }

    public function checkQueue() {}
}
