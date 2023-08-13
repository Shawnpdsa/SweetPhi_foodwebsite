import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
      {/* overlay for image */}
      <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'>
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4'>The <span className='text-orange-600'> Best</span></h1>
        <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4'><span className='text-orange-600'>Foods </span> Delievered</h1>
      </div>
      <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food image" />
    </div>
    </div>
  )
}

export default Hero
