import { Navigate, Outlet } from 'react-router'
import { getBrowserToken } from '../utils/browser'

const GuestGuard = () => {
  const token = getBrowserToken()

  if (token) return <Navigate to="/app" replace />

  return <Outlet />
}

export default GuestGuard
