<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class GovernmentSection extends Model
{
    use HasFactory;

    protected $table = 'government_sections';

    protected $fillable = [
        'type',
        'title',
        'subtitle',
        'description',
        'image',
        'link',
        'order',
        'is_active'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'order' => 'integer',
    ];
}
