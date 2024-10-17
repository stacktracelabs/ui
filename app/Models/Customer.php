<?php

namespace App\Models;

use App\Enums\BusinessArea;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $name
 * @property string $email
 * @property string $company
 * @property boolean $is_premium
 * @property BusinessArea|null $business_area
 */
class Customer extends Model
{
    use HasFactory;

    protected $guarded = false;

    protected $casts = [
        'is_premium' => 'boolean',
        'business_area' => BusinessArea::class,
    ];
}
