import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
const [toggle, setToggle] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left side of navbar */}
        <div className='flex items-center '>
        <div className='cursor-pointer' onClick={()=> setToggle(!toggle)}><AiOutlineMenu size={30}/></div>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl px-2 bg-black text-white sm:mx-4'>Sweet<span className='font-bold bg-[red] text-white font-mono '>Phi</span></h2>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] mx-4'>
            <p className='cursor-pointer bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='cursor-pointer p-2'>Pickup</p>
        </div>
        </div>
        {/* Seach input */}
        <div className='flex bg-gray-200 rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder='Seacrh foods' />
        </div>
        {/* cart button */}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill className="mr-2" size={20}  /> Cart

            </button>
        {/* mobile view */}
        {/* overlay of mobile view */}
        {toggle ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
         {/* Side drawer menu */}
      <div className={toggle ? 'fixed top-0 left-0 w-[260px] sm:w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-200%] w-[260px] sm:w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose onClick={()=> setToggle(!toggle)} size={30} className='absolute right-2 top-4 cursor-pointer'/>
        <h2 className='text-3xl  px-2 bg-black text-white w-3/5 sm:w-2/4 m-3'>Sweet<span className='font-bold bg-[red] text-white font-mono '>Phi</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex cursor-pointer'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex cursor-pointer'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex cursor-pointer'><FaWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex cursor-pointer'><MdHelp size={25} className='mr-4' /> Help</li>
                <li className='text-xl py-4 flex cursor-pointer'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                <li className='text-xl py-4 flex cursor-pointer'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                <li className='text-xl py-4 flex cursor-pointer'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
            </ul>
        </nav>
        </div>

    </div>
  )
  }
export default Navbar;