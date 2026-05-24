import { createBrowserRouter, Navigate } from 'react-router'
import AuthContext from '../context/AuthContext'
import AppLayout from '../layout/AppLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/app" />,
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
