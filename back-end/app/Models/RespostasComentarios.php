<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RespostasComentarios extends Model
{
    use HasFactory;
    protected $table;
    protected $fillable = ['user_id', 'comentario_id', 'descricao'];

    public function userRelacionamento()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
    public function comentarioRelacionamento()
    {
        return $this->hasOne(Comentarios::class, 'id', 'comentario_id');
    }
}
