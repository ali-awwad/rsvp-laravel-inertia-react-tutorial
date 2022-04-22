<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = ['email'];

    public function campaigns()
    {
        return $this->belongsToMany(Campaign::class)->withPivot('going','not_going','ineretest','notes')->withTimestamps();
    }
}
