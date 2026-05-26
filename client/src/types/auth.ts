import type { User } from './user'

export interface AuthContextType {
  authToken: string | null
  user: User | null
  login: (token: string) => void
  logout: () => void
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    email: string
    name: string
    avatar_url: string
    created_at: string
    role: 'member' | 'admin'
    stripe_customer_id: string | null
  }
}
