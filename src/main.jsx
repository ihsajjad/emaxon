import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/order/Orders';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import cartProductsLoader from './components/loader/cartProductsLoader';
import Checkout from './components/checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './providers/AuthProviders';
import PrivetRoute from './routes/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: () => cartProductsLoader()
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/checkout",
        element: <PrivetRoute><Checkout></Checkout></PrivetRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/sign-up',
        element: <SignUp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
