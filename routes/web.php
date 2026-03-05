<?php

use App\Http\Controllers\BookingController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/booking', [BookingController::class, 'index'])->name('booking.index');
Route::post('/booking', [BookingController::class, 'storeBook'])->name('booking.store');

Route::get('/check-reservation', [HomeController::class, 'checkReserve']);
Route::get('/contact', [HomeController::class, 'contact']);
