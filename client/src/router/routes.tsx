import { createBrowserRouter, Navigate } from 'react-router'
import { AuthProvider } from '../context/AuthContext'
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
    element: <AuthProvider />,
    children: [
      {
        element: <AppLayout />,
      },
    ],
  },
])
