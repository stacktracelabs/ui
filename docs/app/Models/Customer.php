<?php

namespace App\Models;

use App\Enums\BusinessArea;
use Database\Factories\CustomerFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $company
 * @property bool $is_premium
 * @property int $employee_count
 * @property BusinessArea|null $business_area
 */
#[Fillable([
    'name',
    'company',
    'email',
    'is_premium',
    'business_area',
    'employee_count',
])]
class Customer extends Model
{
    /** @use HasFactory<CustomerFactory> */
    use HasFactory;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'is_premium' => 'boolean',
            'business_area' => BusinessArea::class,
            'employee_count' => 'integer',
        ];
    }

    public function getAvatarUrl(): string
    {
        return 'https://ui-avatars.com/api/?name='.urlencode($this->name);
    }
}
