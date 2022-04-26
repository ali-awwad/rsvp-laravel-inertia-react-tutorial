<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Campaign extends Model
{
    use HasFactory;

    protected $casts = [
        'start_date'=>'datetime',
        'end_date'=>'datetime',
    ];

    public static function boot() {

	    parent::boot();

	    static::creating(function($item) {
	        $item->uuid = Str::uuid();
	    });

	}

    public function contacts()
    {
        return $this->belongsToMany(Contact::class)
            ->withPivot('going', 'not_going', 'interested', 'notes')
            ->withTimestamps();
    }
}
