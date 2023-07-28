<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Linguagens extends Model
{
    use HasFactory;
    
    protected $table;
    protected $fillable = ['area_id', 'nome', 'ativo'];
    
    public function frameworkRelacionamento ()
    {
        return $this->hasMany(Framework::class, 'linguagens_id', 'id');
    }
}
