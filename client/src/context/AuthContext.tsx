import GlobalSpinner from '../components/spinners/GlobalSpinner'
import { useGetAuth } from '../lib/react-query/authQueries'
import { Outlet } from 'react-router'

const AuthContext = () => {
  const { isLoading } = useGetAuth()
  return isLoading ? <GlobalSpinner /> : <Outlet />
}

export default AuthContext
