import React from 'react'

const Tech = () => {
  return (
    <div className='flex justify-center flex-col h-96 items-center  dark:text-gray-200 gap-6 	' >
        <h1 className='text-4xl font-bold'>My Tech Stack</h1>
        <p> Technologies Ive been working with recently.</p>
        <div class="flex mt-10 gap-2 lg:gap-36 ">
          <img src="./Images/image1.png " alt="Image 1" className='w-16 h-16 object-cover rounded-full' />
          <img src="./Images/image2.png" alt="Image 2" class="w-16 h-16 object-cover rounded-full" />
          <img src="./Images/image3.png " alt="Image 3" class="w-16 h-16 object-cover rounded-full" />
          <img src="./Images/image4.png " alt="Image 4" class="w-16 h-16 object-cover rounded-full" />
          <img src="./Images/image5.png " alt="Image 5" class="w-16 h-16 object-cover rounded-full" />
        </div>
      </div>
  )
}

export default Tech