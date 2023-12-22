import React from 'react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [theme, setTheme] = useState(null)
  
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'Light' : 'dark')
  }

  

  return (
       <div className='  flex items-center justify-between top-2   lg:px-10 py-2 px-3'>
      <div>
        <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
      </div>
     
      <div className='flex flex-col lg:flex-row lg:gap-14 list-none text-gray-500 dark:text-gray-400'
      >
        <li><NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/Tech">Tech Stack</NavLink></li>
        <li> <NavLink to="/Project">Project</NavLink></li>
        <li><NavLink to="/about">Contact</NavLink></li>
      </div>
      <div>
        <button
          type='button'
          onClick={handleThemeSwitch}
          className='fixed z-10 right-2 top-0  text-lg p-1 rounded-md' >
          {theme === 'dark' ? '🌙' : '🔆'}
        </button>
      </div>
    </div>
  )
}

export default Header



// bg-white dark:bg-slate-900
