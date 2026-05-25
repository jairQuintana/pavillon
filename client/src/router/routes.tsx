import { createBrowserRouter, Navigate } from 'react-router'
import AuthContext from '../context/AuthContext'
import AppLayout from '../layout/AppLayout'
import Login from '../pages/auth/Login'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/app" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/app',
    element: <AuthContext />,
    children: [
      {
        element: <AppLayout />,
      },
    ],
  },
])
