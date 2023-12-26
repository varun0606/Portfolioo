import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <div className=' flex flex-col min-h-screen bg-white dark:bg-slate-900'>
    
      <Header />
      <Outlet />
      <Footer />
   
  </div>
  )
}

export default Layout
