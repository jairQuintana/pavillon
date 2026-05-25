import GlobalSpinner from '../components/spinners/GlobalSpinner'
import { useGetAuthentication } from '../lib/react-query/authQueries'
import { Outlet } from 'react-router'

const AuthContext = () => {
  const { isLoading } = useGetAuthentication()
  return isLoading ? <GlobalSpinner /> : <Outlet />
}

export default AuthContext
