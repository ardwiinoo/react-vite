import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login'
import RegisterPage from './Pages/register'
import ErrorPage from './Pages/404'
import ProductPage from './Pages/product'
import ProfilePage from './Pages/profile'
import DetailProductPage from './Pages/detailProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello Bang</h1>,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/products',
    element: <ProductPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  // dynamic routing
  {
    path: '/products/:id',
    element: <DetailProductPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
) 
 