<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        User::create($request->all());
    }
    public function login(Request $request)
    {
            if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
                $user = Auth::user();
                $token = $user->createToken($user->name);
                return response()->json($token->plainTextToken);
            } else {
                throw new Exception();
            }

       
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        return response()->json(Auth::user());
    }
    public function logout()
    {
        $user = Auth::user();
        $user->tokens()->delete();
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function upload(Request $request)
    {
       if($request->hasFile('image'))
       {
            $path = $request->file('image')->store('perfil_usuarios', 'public');
            $user = User::find(Auth::user()->id);
            $user->update(['image' => 'https://conexaodev.portfolioyansousa.com/back-end/public/storage' . $path]);
            return response()->json($user);
       } else 
       {
           return 0;
       }
    }

    public function update(Request $request)
    {
        $user = User::find(Auth::user()->id);
        $user->update($request->all());

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
