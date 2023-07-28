<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Framework extends Model
{
    use HasFactory;
    protected $table;
    protected $fillable = ['linguagens_id', 'nome', 'ativo'];
}
