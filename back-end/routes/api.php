<?php

use App\Http\Controllers\ComentariosController;
use App\Http\Controllers\CurtidasController;
use App\Http\Controllers\FrameworkController;
use App\Http\Controllers\LinguagensController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\RespostasComentariosController;
use App\Http\Controllers\UserController;
use App\Models\Curtidas;
use App\Models\Posts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->group(function(){
    Route::post('/posts/store', [PostsController::class, 'store']);

    
    Route::post('/comentarios/store/{id}', [ComentariosController::class, 'store']);
    Route::post('/resposta/comentarios/store/{id}', [RespostasComentariosController::class, 'store']);
    Route::delete('/comentario/destroy/{comentario}/{id}', [ComentariosController::class, 'destroy']);
    
    
    Route::get('/usuario/show', [UserController::class, 'show']);
    Route::get('/usuario/logout', [UserController::class, 'logout']);
    Route::post('/usuario/upload', [UserController::class, 'upload']);
    Route::put('/usuario/update', [UserController::class, 'update']);
    Route::post('/curtidas/{id}', [CurtidasController::class, 'store']);
    Route::delete('/curtidas/destroy/{id}', [CurtidasController::class, 'destroy']);
    Route::get('/curtidas/verificar/{id}', [PostsController::class, 'VerificarUsuarioCurtiu']);

    
    
    
});
Route::get('/curtidas/post/{id}', [PostsController::class, 'curtidas']);
Route::prefix('/usuario')->controller(UserController::class)->group(function (){
    Route::post('/store', [UserController::class, 'store']);
    Route::post('/login', [UserController::class, 'login']);
});
Route::prefix('/linguagem')->controller(LinguagensController::class)->group(function(){
    Route::get('/index', 'index');
    Route::get('/show/{linguagem}', 'show');
});
Route::prefix('/posts')->controller(PostsController::class)->group(function(){
    Route::get('/index/{id}', 'index');
    Route::get('/show/{id}', 'show');
    Route::get('/getAll', 'getAll');
    Route::get('/framework/{id}', 'filtroFramework');
});
Route::prefix('/comentarios')->controller(ComentariosController::class)->group(function(){
    Route::get('/index/{id}', 'index');
    Route::get('/show/{id}', 'show');
});
Route::prefix('/resposta/comentarios')->controller(RespostasComentariosController::class)->group(function(){
    Route::get('/index/{id}', 'index');
});
