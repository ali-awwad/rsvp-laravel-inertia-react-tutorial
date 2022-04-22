<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class Campaign extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            // 'id'=>$this->id,
            'uuid'=>$this->uuid,
            'title'=>$this->title,
            'description'=>$this->description,
            'location'=>$this->location,
            'parking'=>$this->parking,
            'parking_link'=>$this->parking_link,
            'start_date'=>Carbon::parse($this->start_date)->translatedFormat('l - F j - Y'),
            'start_time'=>Carbon::parse($this->start_date)->translatedFormat('g:i A'),
        ];
    }
}
