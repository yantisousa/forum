<?php

namespace App\Http\Controllers;

use App\Models\Linguagens;
use Illuminate\Http\Request;

class LinguagensController extends Controller
{
    public function index()
    {
        $linguagens = Linguagens::orderBy('nome', 'asc')->get();
        return response()->json($linguagens);
    }
    public function show($id)
    {
        $linguagem = Linguagens::with('frameworkRelacionamento')->whereId($id)->first();
        return response()->json($linguagem);
    }
}
