<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script>
            (() => {
                const preference = localStorage.getItem('stacktrace-ui-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                document.documentElement.classList.toggle('dark', preference === 'dark' || (! preference && prefersDark));
            })();
        </script>

        <title inertia>{{ config('app.name', 'StackTrace UI') }}</title>

        @routes
        @vite('resources/js/app.ts')
        @inertiaHead
    </head>
    <body class="min-h-screen bg-background font-sans text-foreground antialiased">
        @inertia
    </body>
</html>
