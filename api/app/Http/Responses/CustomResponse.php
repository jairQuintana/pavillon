<?php

namespace App\Http\Responses;

use Illuminate\Http\JsonResponse;

class CustomResponse
{
    public static function success(string $message, $data = null, int $status = 200): JsonResponse
    {

        return response()->json([
            'status' => $status,
            'message' => $message,
            'data' => $data,
        ], $status);
    }

    public static function error(string $error, int $status = 500): JsonResponse
    {

        return response()->json([
            'status' => $status,
            'message' => $error,
            'data' => null,
        ], $status);
    }
}
