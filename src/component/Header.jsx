import React from 'react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [theme, setTheme] = useState(null)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='flex items-center justify-between top-2 lg:px-10 py-2 px-3'>
      <div>
        <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-full w-full bg-white dark:bg-slate-800 dark:text-white overflow-y-auto z-50">
          <div className="flex items-center justify-between p-4">
          <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-black font-bold text-1xl hover:text-gray-700 focus:outline-none"
            >
              ✕
            </button>
          </div>
          <div className='flex flex-col list-none text-gray-900  items-center gap-11 font-bold text-3xl mt-5 '>
            <li className=''><NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink></li>
            <li><NavLink to="/Tech" onClick={toggleMobileMenu}>Tech Stack</NavLink></li>
            <li><NavLink to="/Project" onClick={toggleMobileMenu}>Project</NavLink></li>
            <li><NavLink to="/about" onClick={toggleMobileMenu}>Contact</NavLink></li>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className='hidden lg:flex lg:flex-row lg:gap-14 list-none text-gray-500 dark:text-gray-400'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Tech">Tech Stack</NavLink></li>
        <li><NavLink to="/Project">Project</NavLink></li>
        <li><NavLink to="/about">Contact</NavLink></li>
      </div>

      <div>
        <button
          type='button'
          onClick={handleThemeSwitch}
          className='fixed z-10 right-2 top-2  text-lg p-1 rounded-md'
        >
          {theme === 'dark' ? '🌙' : '🔆'}
        </button>
      </div>
    </div>
  );
};
export default Header




