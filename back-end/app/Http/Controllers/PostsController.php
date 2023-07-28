<?php

namespace App\Http\Controllers;

use App\Models\Curtidas;
use App\Models\Posts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostsController extends Controller
{
    public function index ($id) 
    {
        $posts = Posts::with('linguagemRelacionamento')->where('linguagens_id', $id)->orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }

    public function store(Request $request)
    {
        Posts::create([
            'user_id' => Auth::user()->id,
            'linguagens_id' => $request->linguagens_id,
            'frameworks_id' => $request->frameworks_id, 
            'assunto' => $request->assunto,
            'descricao' => $request->descricao

            
        ]);
    }

    public function show ($id) 
    {
        $posts = Posts::with(['linguagemRelacionamento' => function($query){
            $query->first();
        }])->whereId($id)->orderBy('created_at', 'desc')->first();
        return response()->json($posts);
    }
    
   
    public function getAll()
    {
        $posts = Posts::with(['linguagemRelacionamento', 'CurtidasRelacionamento'])->withCount('CurtidasRelacionamento')->orderBy('created_at', 'desc')->get()->toArray();

        $posts = collect($posts)->sortByDesc('curtidas_relacionamento_count')->values()->all();
        $array = [];
        if(count($posts) >= 9)
        {
            for($i = 0; $i <= 9; $i++)
            {
                array_push($array,$posts[$i]);
            }
            return response()->json($array);

        }
    }

    public function filtroFramework($id)
    {
        $posts = Posts::with('linguagemRelacionamento')->where('frameworks_id', $id)->orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }

    public function curtidas($id)
    {
        $post = Posts::withCount('CurtidasRelacionamento')->with(['linguagemRelacionamento' => function ($query) {
            $query->first();
        }])->whereId($id)->get();

        return response()->json($post);
    }

    public function VerificarUsuarioCurtiu($id)
    {
        $curtida = Curtidas::where('user_id', Auth::user()->id)->where('post_id', $id)->get();
        if(count($curtida) > 0){
            return true;
        } else {
            return false;
        }
    }
}
