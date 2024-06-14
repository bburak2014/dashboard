import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {store} from './store'
 import NotFound from './pages/error/NotFound.tsx'
import LoginPage from './pages/auth/LoginPage.tsx'
import RegisterPage from './pages/auth/RegisterPage.tsx'
import DashboardPage from './pages/DashboardPage.tsx'
import DeptsPage from './pages/DeptsPage.tsx'
import ProtectedRoute from './utils/ProtectedRoute.tsx'
import 'animate.css';

const router = createBrowserRouter([
 
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <NotFound />
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <NotFound />
  },
  {
    path: '/',
    element:  <ProtectedRoute ><DashboardPage /></ProtectedRoute>,
    errorElement: <NotFound />
  },
  {
    path: '/dashboard',
    element:  <ProtectedRoute ><DashboardPage /></ProtectedRoute>,
    errorElement: <NotFound />
  },
  {
    path: '/depts',
    element:  <ProtectedRoute ><DeptsPage /></ProtectedRoute>,
    errorElement: <NotFound />
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
