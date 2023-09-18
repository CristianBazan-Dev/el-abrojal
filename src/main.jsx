import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/mainPages/Home/Home'
import Product from './components/utils/product-section/Product'

const router = createBrowserRouter([
  {
    path: "/el-abrojal/",
    element: <App /> ,
    children: [
      {
        path: "/el-abrojal/",
        element: <Home/>
      },
      {
        path: "/el-abrojal/products",
        element: <Product/>
      },
      {
        path: "/el-abrojal/about",
        element: <About/>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
