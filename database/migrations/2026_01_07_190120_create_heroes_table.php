<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('heroes', function (Blueprint $table) {
            $table->id();

            $table->string('badge')->nullable();
            $table->string('title');
            $table->text('subtitle')->nullable();

            $table->string('background_image')->nullable();

            $table->string('primary_button_text')->nullable();
            $table->string('primary_button_url')->nullable();

            $table->string('secondary_button_text')->nullable();
            $table->string('secondary_button_url')->nullable();

            $table->boolean('is_active')->default(false);

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('heroes');
    }
};
