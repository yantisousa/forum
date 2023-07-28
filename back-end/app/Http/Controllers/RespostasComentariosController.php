<?php

namespace App\Http\Controllers;

use App\Models\RespostasComentarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RespostasComentariosController extends Controller
{
    public function store(Request $request, $id)
    {
        RespostasComentarios::create([
            'user_id' => Auth::user()->id,
            'comentario_id' => $id,
            'descricao' => $request->descricao
        ]);
        $comentarios = RespostasComentarios::with(['userRelacionamento', 'comentarioRelacionamento' => function($query){
            $query->withCount('respostasComentariosRelacionamento');
        }])->where('comentario_id', $id)->orderBy('created_at', 'desc')->get();
        return response()->json($comentarios);
    }
    public function index($id)
    {
        $comentarios = RespostasComentarios::with('userRelacionamento')->where('comentario_id', $id)->orderBy('created_at', 'desc')->get();
        return response()->json($comentarios);
    }
}
