<?php

namespace App\Http\Controllers\Core;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function __construct()
    {
        //$this->middleware('auth:sanctum');
    }

    public function __invoke()
    {
        return view('spa');
    }

}
