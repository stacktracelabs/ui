<?php


namespace App\Http\Controllers;


use Inertia\Inertia;

class FormController
{
    public function __invoke()
    {
        return Inertia::render('FormComponents', [

        ]);
    }
}
