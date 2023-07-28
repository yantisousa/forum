<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comentarios extends Model
{
    use HasFactory;
    protected $table;
    protected $fillable = ['post_id', 'user_id', 'descricao'];
    public function userRelacionamento()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function respostasComentariosRelacionamento()
    {
        return $this->hasMany(RespostasComentarios::class, 'comentario_id', 'id');
    }
}
