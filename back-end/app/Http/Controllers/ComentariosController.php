<?php

namespace App\Http\Controllers;

use App\Models\Comentarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ComentariosController extends Controller
{
    public function index($id)
    {
        $comentarios = Comentarios::withCount('respostasComentariosRelacionamento')
        ->orderBy('created_at', 'desc')
        ->where('post_id', $id
        )->get();
        
        return response()->json($comentarios);
    }
    public function store(Request $request, $id)
    {
        $comentario = Comentarios::create([
            'post_id' => $id,
            'user_id' => Auth::user()->id,
            'descricao' => $request->descricao
        ]);
        $comentarios = Comentarios::with('userRelacionamento')->withCount('respostasComentariosRelacionamento')->orderBy('created_at', 'desc')->where('post_id', $id)->get();

        return response()->json($comentarios);
    }

    public function destroy(Comentarios $comentario, $id)
    {
        $comentario->delete();
        $comentarios = Comentarios::with('userRelacionamento')
        ->withCount('respostasComentariosRelacionamento')
        ->orderBy('created_at', 'desc')
        ->where('post_id', $id
        )->get();

        return response()->json($comentarios);
    }
}
