<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paises;

class PaisesController extends Controller
{/*
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
       $paises = Paises::all();
       return $paises;

   }
}
