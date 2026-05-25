import { Outlet } from 'react-router'
import Header from '../components/app/Header'

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
