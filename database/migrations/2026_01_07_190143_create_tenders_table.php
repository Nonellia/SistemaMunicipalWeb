<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tenders', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('expediente')->nullable();
            $table->text('description')->nullable();

            $table->date('closing_date')->nullable();
            $table->enum('status', ['activo', 'urgente', 'cerrado'])->default('activo');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tenders');
    }
};
