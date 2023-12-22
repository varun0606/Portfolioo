import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/tailwind.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Project from './component/Project.jsx'
import Tech from './component/Tech.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element: <Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'project',
        element: <Project/>
      },
      {
        path:'tech',
        element: <Tech/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
