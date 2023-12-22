import React from 'react'

const Project = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 gap-6 dark:text-gray-200 px-10 '>
      <h1 className='text-4xl font-bold'> Projects</h1>
      <p>Things I’ve built so far</p>
      <div className='flex  flex-col lg:flex-row px-10 gap-5  lg:gap-20'>

        <div  className='flex flex-col gap-4 bg-slate-200 dark:bg-gray-700 rounded-2xl shadow-2xl  lg:w-2/6'>
          <img className='rounded-t-2xl' src='./Images/project1.png' />
          <div className=' flex flex-wrap flex-col text-gray-900 dark:text-white px-3 py-3 gap-4 '>
            <h2 className=' font-bold'>Landing Page</h2>
            <p >This is a landing page  designed for a specific purpose, often linked from digital marketing campaigns. It focuses on converting visitors into leads or customers through compelling content and a clear call-to-action.</p>
            <p>Tech stack : HTML , CSS</p>
            <a className=' hover:underline' href="https://landing-page-beta-three.vercel.app/" target="_blank">Click Here</a>
          </div>
        </div>

        <div className='flex flex-col gap-4 bg-slate-200 dark:bg-gray-700 rounded-2xl shadow-2xl  lg:w-2/6'>
          <img className='rounded-t-2xl' src='./Images/project2.png' />
          <div className=' flex flex-col text-gray-900 dark:text-white px-3 py-3 gap-4'>
            <h2 className=' font-bold'>E-commerce Website</h2>
            <p>Online marketplace offering diverse products, seamless transactions, secure payments, and personalized shopping experiences for convenient and satisfying e-commerce interactions..</p>
            <p>Tech stack : HTML, CSS , JavaScript</p>
            <a className=' hover:underline' href="https://ecom-website-eight.vercel.app/" target="_blank">Click Here</a>
          </div>

        </div>

        <div className='flex flex-col gap-4 bg-slate-200 dark:bg-gray-700 rounded-2xl shadow-2xl lg:w-2/6'>
          <img className='rounded-t-2xl' src='./Images/project3.png' />
          <div className=' flex flex-col text-gray-900 dark:text-white px-3 py-3 gap-4'>
            <h2 className=' font-bold '>Project Tile goes here</h2>
            <p className=''>This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content</p>
            <p>Tech stack : HTML , JavaScript, SASS, React</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Project