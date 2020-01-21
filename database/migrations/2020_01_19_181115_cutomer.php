<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Cutomer extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer',function(Blueprint $table){
            $table->bigIncrements('customer_id');
            $table->string('customer_name',100);
            $table->string('customer_email',100)->nullable();
            $table->string('customer_password',500);
            $table->text('customer_address');
            $table->text('customer_city');
            $table->integer('customer_zip_code');
            $table->integer('customer_phone_no');
            $table->string('customer_contact_person');
            $table->integer('customer_person_phone');
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
        Schema::drop('customer');
    }
}
