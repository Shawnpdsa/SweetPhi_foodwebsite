import React from 'react'
import { categories } from '../data/data'

const Category = () => {
    console.log(categories);
  return (
    <div className='max-w-[1640px] px-4 py-12 m-auto'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* categories */}
      <div className='grid s:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
        {categories.map((item,index)=>(
            <div className='bg-gray-100 rounded-lg flex justify-center items-center' key={index}>
              <h2 className='font-bold sm:text-xl'>{item.name}</h2>
              <img className='w-20' src={item.image} alt={item.name} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Category
