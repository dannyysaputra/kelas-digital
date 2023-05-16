<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PaymentLog extends Model
{
    use Uuids;

    protected $table = 'payment_logs';

    protected $fillable = [
        'status', 'payment_type', 'order_id', 'raw_response'
    ];

    protected $cast = [
        'created_at' => 'datetime:Y-m-d H:m:s',
        'updated_at' => 'datetime:Y-m-d H:m:s'
    ];
}
