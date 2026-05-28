import { createBrowserRouter, Navigate } from 'react-router'
import { AuthProvider } from '../context/AuthContext'
import AppLayout from '../layout/AppLayout'
import Login from '../pages/auth/Login'
import GuestGuard from '../context/GuestGuard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/app" />,
  },
  {
    element: <GuestGuard />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/request-access',
        element: 'holaaa',
      },
    ],
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
