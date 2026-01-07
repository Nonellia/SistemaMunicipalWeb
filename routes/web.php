<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

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

Route::get('/', function () {
    return Inertia::render('public/Home');
});

Route::get('/gobierno', function () {
    return Inertia::render('public/Gobierno');
});

Route::get('/tramites', function () {
    return Inertia::render('public/Tramites');
});

require __DIR__.'/settings.php';
