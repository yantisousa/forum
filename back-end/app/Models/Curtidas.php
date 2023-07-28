<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Curtidas extends Model
{
    use HasFactory;
    protected $table;
    protected $fillable = ['user_id', 'post_id'];
}
