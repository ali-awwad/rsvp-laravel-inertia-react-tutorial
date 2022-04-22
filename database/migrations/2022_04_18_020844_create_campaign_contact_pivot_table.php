<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCampaignContactPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('campaign_contact', function (Blueprint $table) {
            $table->unsignedBigInteger('campaign_id')->index();
            $table->foreign('campaign_id')->references('id')->on('campaigns')->onDelete('cascade');
            $table->unsignedBigInteger('contact_id')->index();
            $table->foreign('contact_id')->references('id')->on('contacts')->onDelete('cascade');
            $table->primary(['campaign_id', 'contact_id']);
            $table->boolean('going')->default(false);
            $table->boolean('interested')->default(false);
            $table->boolean('not_going')->default(false);
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('campaign_contact');
    }
}
