import { createContext, useState } from 'react'
import GlobalSpinner from '../components/spinners/GlobalSpinner'
import { useGetAuthentication } from '../lib/react-query/authQueries'
import { Navigate, Outlet } from 'react-router'
import type { AuthContextType } from '../types/auth'
import { getBrowserToken, setBrowserToken } from '../utils/browser'

const AuthContext = createContext<AuthContextType>({
  authToken: null,
  login: () => {},
  logout: () => {},
  user: null,
})

export const AuthProvider = () => {
  const [authToken, setAuthToken] = useState<string | null>(() => {
    const stored = getBrowserToken()
    return stored
  })
  const { data, isLoading } = useGetAuthentication(!!authToken)

  const login = (token: string) => {
    setBrowserToken(token)
    setAuthToken(token)
  }

  const logout = () => {
    setBrowserToken(null)
    setAuthToken(null)
  }

  if (!authToken) return <Navigate to="/login" />
  if (isLoading) return <GlobalSpinner />

  return (
    <AuthContext value={{ user: data?.user ?? null, authToken, login, logout }}>
      <Outlet />
    </AuthContext>
  )
}

export default AuthContext
