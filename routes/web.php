<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/reservation', [ReservationController::class, 'reservationDashboard'])->name('reservation');
    Route::get('/dashboard/reservation/edit/{id}', [ReservationController::class, 'reservationEdit'])->name('reservation.edit');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/booking', [BookingController::class, 'index'])->name('booking.index');
Route::post('/booking', [BookingController::class, 'storeBook'])->name('booking.store');

Route::get('/check-reservation', [HomeController::class, 'checkReserve']);
Route::get('/contact', [HomeController::class, 'contact']);

Route::put('/reservation/{id}/status', [ReservationController::class, 'updateStatus'])->name('reservation.updateStatus');

require __DIR__ . '/auth.php';
