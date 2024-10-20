<?php


namespace App\Features;


class Auth extends Feature
{
    public function files(): array
    {
        return [
            'app/Http/Controllers/Auth',
            'app/Http/Controllers/ProfileController.php',
            'app/Http/Requests/Auth',
            'app/Http/Requests/ProfileUpdateRequest.php',

            'resources/js/Components/ApplicationLogo.vue',
            'resources/js/Layouts/GuestLayout.vue',
            'resources/js/Pages/Auth',
            'resources/js/Pages/Profile',
            'resources/js/Pages/Dashboard.vue',
        ];
    }

    public function templates(): array
    {
        return [
            'routes/auth.php' => <<<'PHP'
<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});

PHP
            ,
            'routes/web.php' => <<<'PHP'
<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

PHP
            ,
            'resources/js/Layouts/AuthenticatedLayout' => <<<'VUE'
<template>
  <div class="min-h-screen flex flex-col bg-stone-50 dark:bg-background">
    <div class="border-b bg-background">
      <!-- Primary Navigation Menu -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo -->
            <div class="shrink-0 flex items-center">
              <Link :href="route('dashboard')" class="inline-flex flex-row gap-4 items-center font-medium">
                <ApplicationLogo
                  class="block h-8 w-auto text-foreground"
                />
              </Link>
            </div>

            <!-- Navigation Links -->
            <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      :href="route('dashboard')"
                      :class="navigationMenuTriggerStyle()"
                      :active="route().current('dashboard')"
                    >Dashboard</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div class="hidden sm:flex sm:items-center sm:ms-6">
            <!-- Settings Dropdown -->
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" class="inline-flex flex-row items-center gap-2">
                  {{ $page.props.auth.user.name }}
                  <ChevronDownIcon class="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" class="w-48">
                <DropdownMenuLink :href="route('profile.edit')">
                  Profile
                </DropdownMenuLink>
                <DropdownMenuSeparator />
                <DropdownMenuLink :href="route('logout')" method="post" as="button">
                  Log Out
                </DropdownMenuLink>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <!-- Hamburger -->
          <div class="-me-2 flex items-center sm:hidden">
            <Button variant="ghost" class="px-3" @click="showingNavigationDropdown = !showingNavigationDropdown">
              <XIcon v-if="showingNavigationDropdown" class="w-5 h-5" />
              <MenuIcon v-else class="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <!-- Responsive Navigation Menu -->
      <div
        :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }"
        class="sm:hidden"
      >
        <div class="pt-2 pb-3 flex flex-col gap-1 px-2">
          <Link :href="route('dashboard')" :class="cn(navigationMenuTriggerStyle(), 'w-full justify-start px-2')" :data-active="route().current('dashboard') || undefined">
            Dashboard
          </Link>
        </div>

        <!-- Responsive Settings Options -->
        <div class="pt-4 pb-1 border-t">
          <div class="px-4">
            <div class="font-medium text-base text-foreground">
              {{ $page.props.auth.user.name }}
            </div>
            <div class="font-medium text-sm text-muted-foreground">{{ $page.props.auth.user.email }}</div>
          </div>

          <div class="mt-3 flex flex-col gap-1 px-2">
            <Link :href="route('profile.edit')" :class="cn(navigationMenuTriggerStyle(), 'w-full justify-start px-2')" :data-active="route().current('profile.edit') || undefined">
              Profile
            </Link>

            <Link :href="route('logout')" :class="cn(navigationMenuTriggerStyle(), 'w-full justify-start px-2')" method="post" as="button">
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </div>

    <!-- Page Heading -->
    <header class="border-b bg-background" v-if="$slots.header">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <slot name="header" />
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigationMenuTriggerStyle } from '@/Components/NavigationMenu'
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-vue-next'
import { cn } from '@/Utils'

const showingNavigationDropdown = ref(false)
</script>
VUE

        ];
    }
}
