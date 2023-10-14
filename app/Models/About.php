<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;

    // Fillable
    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'image',
        'image_alt',
        'experience',
        'projects',
    ];

    protected $table = 'about';

    // Imagem attacher
    public function getImageAttribute($value)
    {
        return asset('storage/' . $value);
    }
}
