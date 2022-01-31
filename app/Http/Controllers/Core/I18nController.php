<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class I18nController extends Controller
{
    public function __invoke(Request $request)
    {
        $locale = $request->input('lang', 'de');
        session(['locale' => $locale]);
        app()->setLocale($locale);
    }
}
