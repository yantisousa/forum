<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    protected $table;
    protected $fillable = ['user_id', 'linguagens_id', 'frameworks_id', 'assunto', 'descricao'];

    public function linguagemRelacionamento(){
        return $this->hasOne(Linguagens::class, 'id', 'linguagens_id');
    }

    public function CurtidasRelacionamento()
    {
        return $this->hasMany(Curtidas::class, 'post_id', 'id');
    }
}
