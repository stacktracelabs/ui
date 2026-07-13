<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <script>
            (() => {
                const preference = localStorage.getItem('stacktrace-ui-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const resolvedPreference = preference === 'light' || preference === 'dark' ? preference : 'system';
                const isDark = resolvedPreference === 'dark' || (resolvedPreference === 'system' && prefersDark);

                document.documentElement.classList.toggle('dark', isDark);
                document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                document.documentElement.dataset.theme = resolvedPreference;
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
