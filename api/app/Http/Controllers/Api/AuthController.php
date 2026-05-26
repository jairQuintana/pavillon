<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Responses\CustomResponse;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegisterRequest $request): JsonResponse
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'role' => $request->role ?? 'member',
        ]);

        $token = $user->createToken('auth')->plainTextToken;

        return CustomResponse::success('successfuly registered', ['user' => $user,
            'token' => $token, ]);
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $user = User::where('email', $request->email)->first();

        if (! $user || ! password_verify($request->password, $user->password)) {
            return CustomResponse::error('incorrect credentials', 401);
        }

        $token = $user->createToken('auth')->plainTextToken;

        return CustomResponse::success('successfuly login', [
            'user' => $user,
            'token' => $token,
        ]);

    }

    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();

        return CustomResponse::success('successfuly logout');

    }

    public function me(Request $request): JsonResponse
    {
        return CustomResponse::success('successfuly logout', $request->user());

    }
}
