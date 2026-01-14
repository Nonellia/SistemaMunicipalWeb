<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Authority extends Model
{
    use HasFactory;

    /**
     * La tabla asociada al modelo.
     */
    protected $table = 'authorities';

    /**
     * Campos asignables masivamente.
     */
    protected $fillable = [
        'position',   // Cargo (ej: Intendente, Secretario)
        'name',       // Nombre completo
        'area',       // Secretaría o Dirección
        'email',      // Correo oficial
        'period',     // Período de gestión (ej: 2023-2027)
        'order',      // Prioridad de aparición en la tabla
        'is_visible'  // Estado de publicación
    ];

    /**
     * Conversión de tipos automática.
     */
    protected $casts = [
        'is_visible' => 'boolean',
        'order' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope para obtener solo las autoridades que deben mostrarse en el frontend.
     * Se ordena por el campo 'order' de forma ascendente.
     */
    public function scopeActive($query)
    {
        return $query->where('is_visible', true)
                     ->orderBy('order', 'asc');
    }
}