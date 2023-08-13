import React,{useState} from 'react'
import {data} from "../data/data.js"
const Food = () => {
    const[food,setFood]=useState(data)

    // Filter type burger/pizza/etc

    const filterType=(category)=>{
        setFood(
            data.filter((item)=>{
                return item.category === category;
            }
            )
        )
    }
    // Filter by price
    const filterPrice=(price)=>{
        setFood(
            data.filter((item)=>{
                return item.price === price;
            }
            )
        )
    }
         return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items </h1>

      {/* filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* filter type */}
        <div >
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>{setFood(data)}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>All</button>
                <button onClick={()=>{filterType('burger')}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>Burgers</button>
                <button onClick={()=>{filterType('pizza')}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>Pizza</button>
                <button onClick={()=>{filterType('salad')}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>Salads</button>
                <button onClick={()=>{filterType('chicken')}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>chicken</button>
            </div>
        </div>
        {/* filter price */}
        <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full flex-wrap'>
            <button onClick={()=>{filterPrice('99')}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>99/-</button>
            <button onClick={()=>{filterPrice('199')}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>199/-</button>
            <button onClick={()=>{filterPrice('299')}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>299/-</button>
            <button onClick={()=>{filterPrice('499')}} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  '>499/-</button>
            </div>
        </div>
      </div>

      {/* Display foods */}
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
            {food.map((items,index)=>(
                <div className='border shadow-lg rounded-lg hover:scale-105 duration-300' key={index}>
                    <img className='w-full h-[200px] object-cover rounded-t-lg' src={items.image} alt="" />
                    <div className='flex flex-col s:flex-row justify-between px-2 py-4'>
                        <p className='font-bold'>{items.name}</p>
                        <p><span className='bg-orange-500 text-white p-1 rounded-full'>{items.price}</span></p>
                    </div>
                </div>
            )

            )}
    </div>
    </div>
  )
}

export default Food
