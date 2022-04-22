<?php

use App\Http\Controllers\CampaignController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    abort(403);
});

Route::get('/campaigns/{campaign:uuid}',[CampaignController::class,'show'])->name('campaigns.show');
Route::post('/campaigns/{campaign:uuid}',[CampaignController::class,'store'])->name('campaigns.store');
