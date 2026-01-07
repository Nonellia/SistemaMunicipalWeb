<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('public_documents', function (Blueprint $table) {
            $table->id();

            $table->string('title');
            $table->string('type')->nullable(); // PDF, ZIP, etc.
            $table->string('file_path');

            $table->string('size')->nullable(); // Ej: 2.4 MB
            $table->integer('year')->nullable();

            $table->boolean('is_visible')->default(true);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('public_documents');
    }
};
