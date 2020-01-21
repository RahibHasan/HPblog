<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
class profile extends Controller
{
    public function get_logged_user_data()
    {
    	return Auth::user();
    }
}
