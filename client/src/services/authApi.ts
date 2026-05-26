import type { AuthResponse, LoginCredentials } from '../types/auth'
import { axiosInstance } from '../lib/axios/axios'

export const getMe = async (): Promise<AuthResponse> => {
  const { data } = await axiosInstance.get('/api/auth/me')
  return data.data
}

export const loginService = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const { data } = await axiosInstance.post('/api/auth/login', credentials)
  return data.data
}
