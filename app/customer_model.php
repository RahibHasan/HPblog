<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class customer_model extends Model
{
    protected $primaryKey='customer_id';
    protected $table='customer';
    protected $fillable=[
    	'customer_id',
    	'customer_name',
    	'customer_email',
    	'customer_password',
    	'customer_address',
    	'customer_city',
    	'customer_zip_code',
    	'customer_phone_no',
    	'customer_contact_person',
    	'customer_person_phone',
    ];

}
