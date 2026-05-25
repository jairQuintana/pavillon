import axios from 'axios'
import type { AuthResponse, LoginCredentials } from '../types/auth'
import type { ApiResponse } from '../types/api'

export const getMe = async () => {
  try {
    const { data } = await axios.get('/api/auth/me')
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const login = async (credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> => {
  try {
    const { data } = await axios.post('/api/auth/login', credentials)

    console.log('Login response:', data)
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
