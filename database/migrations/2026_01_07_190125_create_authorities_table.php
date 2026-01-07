<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('authorities', function (Blueprint $table) {
            $table->id();

            $table->string('position');
            $table->string('name');
            $table->string('area')->nullable();
            $table->string('email')->nullable();

            $table->string('period')->nullable(); // Ej: 2023–2027

            $table->integer('order')->default(0);
            $table->boolean('is_visible')->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('authorities');
    }
};
