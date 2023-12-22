import React from 'react'

const HeroSection = () => {
  return (
    
    <div className='flex flex-col lg:flex-row justify-between  px-10 mt-20 lg:gap-20'>
      <div className=' flex flex-col justify-center px-10 font-bold text-3xl lg:text-6xl lg:gap-6 tracking-normal'>
        <h1 className=' dark:text-gray-200'>Hi 👋, </h1>
        <h1 className=' dark:text-gray-200'>MY Name is</h1>
        <h1 className=' text-blue-800'> Varun Naik</h1>
        <h1 className=' dark:text-gray-200'>I build things for web</h1>
      </div>
      <img className=' mx-auto object-cover rounded-full h-60 w-40 mt-16 sm:h-56 sm:w-56 lg:h-72 lg:w-72 xl:h-96 xl:w-96  ' src="./Images/profile.jpg" alt="" />
    </div>
  )
}

export default HeroSection