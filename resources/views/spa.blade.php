<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="session" content="{{ !empty(\Illuminate\Support\Facades\Cookie::get(config('session.cookie'))) }}">

        <title>{{ config('app.name') }}</title>

        <link rel="stylesheet" type="text/css" href="{{ mix('css/app.css') }}" rel="stylesheet">
        <style>
            .loader {
                position: absolute;
                top: 50%;
                left: 50%;
            }
        </style>
    </head>
    <body class="antialiased">
        <div id="app">
            <div class="loader">
                <h1>Loading...</h1>
            </div>
        </div>
        <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
    </body>
</html>
