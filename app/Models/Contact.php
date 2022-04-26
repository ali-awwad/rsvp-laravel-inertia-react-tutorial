<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = ['email'];

    public static function boot() {

	    parent::boot();

	    static::creating(function($item) {
	        $item->uuid = Str::uuid();
	    });

	}

    public function getFullnameAttribute()
    {
        return $this->first_name . ' '. $this->last_name;
    }

    public function campaigns()
    {
        return $this->belongsToMany(Campaign::class)
        ->withPivot('going','not_going','interested','notes')
        ->withTimestamps();
    }
}
