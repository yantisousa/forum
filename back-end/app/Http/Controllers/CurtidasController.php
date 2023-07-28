<?php

namespace App\Http\Controllers;

use App\Models\Curtidas;
use App\Models\Posts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CurtidasController extends Controller
{
    public function store($id)
    {
        Curtidas::create([
            'user_id' => Auth::user()->id,
            'post_id' => $id,
        ]);

        $post = Posts::withCount('CurtidasRelacionamento')->with(['linguagemRelacionamento' => function ($query) {
            $query->first();
        }])->whereId($id)->get();

        return response()->json($post);
    }
    public function destroy($id)
    {
        $curtida = Curtidas::where('post_id', $id)->first();
        $curtida->delete();

        $post = Posts::withCount('CurtidasRelacionamento')->with(['linguagemRelacionamento' => function ($query) {
            $query->first();
        }])->whereId($id)->get();

        return response()->json($post);

    }
    
}
