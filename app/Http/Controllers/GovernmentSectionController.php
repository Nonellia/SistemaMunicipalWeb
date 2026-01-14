<?php

namespace App\Http\Controllers;

use App\Models\GovernmentSection; // <--- ESTA LÍNEA ES OBLIGATORIA
use App\Models\Authority;         // Asegúrate de importar también Autoridades
use Illuminate\Http\Request;
use Inertia\Inertia;

class GovernmentSectionController extends Controller
{
    /**
     * Muestra el listado en el Panel Admin.
     */
    public function index()
    {
        // Línea 18: Aquí es donde fallaba porque no encontraba la clase
        $sections = GovernmentSection::where('is_active', true)
            ->orderBy('order', 'asc')
            ->get();
            
        $authorities = Authority::where('is_visible', true)
            ->orderBy('order', 'asc')
            ->get();

        return Inertia::render('public/Gobierno', [
            'sections' => $sections,
            'authorities' => $authorities
        ]);
    }

    /**
     * Procesa el guardado de una nueva card.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'type'        => 'required|in:intendente,concejo,secretaria',
            'title'       => 'required|string|max:255',
            'subtitle'    => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'link'        => 'nullable|url',
            'order'       => 'required|integer',
            'image'       => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            // Almacena en storage/app/public/gobierno
            $path = $request->file('image')->store('gobierno', 'public');
            $validated['image'] = $path;
        }

        GovernmentSection::create($validated);

        return redirect()->back()->with('success', 'Sección creada correctamente.');
    }

    /**
     * Actualiza una card y gestiona el reemplazo de la imagen.
     */
    public function update(Request $request, GovernmentSection $governmentSection)
    {
        $validated = $request->validate([
            'type'        => 'required|in:intendente,concejo,secretaria',
            'title'       => 'required|string|max:255',
            'subtitle'    => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'link'        => 'nullable|url',
            'order'       => 'required|integer',
            'is_active'   => 'boolean',
            'image'       => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            // Borramos la imagen vieja si existe para no dejar basura en el disco
            if ($governmentSection->image) {
                Storage::disk('public')->delete($governmentSection->image);
            }
            $validated['image'] = $request->file('image')->store('gobierno', 'public');
        }

        $governmentSection->update($validated);

        return redirect()->back()->with('success', 'Sección actualizada.');
    }
}