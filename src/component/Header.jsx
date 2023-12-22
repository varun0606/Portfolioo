import React from 'react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [theme, setTheme] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='flex items-center justify-between top-2 px-  lg:px-10 py-4'>
      <div>
        <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
      </div>
      {/* <div
        className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 list-none gap-10 '>
        <li>
          <NavLink
            to="/" >
            Home
          </NavLink>
        </li>
        <li>About</li>
        <li>Tech Stack</li>
        <li>Project</li>
        <li>
          <NavLink to="/about" >
            Contact
          </NavLink>
        </li>
      </div> */}
      <div className="block sm:hidden">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'
          } sm:flex sm:flex-wrap sm:mt-6 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 list-none gap-10`}
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