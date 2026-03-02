<?php

namespace App\Http\Controllers;

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

    public function checkReserve()
    {
        return Inertia::render('CheckReservation');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}
