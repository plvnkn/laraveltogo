<?php

use App\Http\Controllers\Core\I18nController;
use App\Http\Controllers\Core\IndexController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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
Auth::routes(['register' => false]);
Route::put('lang', [I18nController::class, '__invoke'])->name('core.lang');
Route::fallback(IndexController::class);