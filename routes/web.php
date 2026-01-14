<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\GovernmentSectionController;

/*Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');*/

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/gobierno', [GovernmentSectionController::class, 'index'])->name('public.Gobierno');

Route::get('/', function () {
    return Inertia::render('public/Home');
});



Route::get('/tramites', function () {
    return Inertia::render('public/Tramites');
});

require __DIR__.'/settings.php';
