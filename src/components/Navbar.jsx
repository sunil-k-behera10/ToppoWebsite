import React, { useState } from 'react'
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav,setNav] = useState(true)

  const clickNav = ()=>{
    setNav(!nav)
  }
  return (
    <div className='text-white flex justify-between items-center h-24'>
      <h1 className='w-full text-3xl font-bold text-green-500 max-w-[1240px] mx-auto px-4 ml-3'>TOPPO</h1>
      <ul className='hidden md:flex items-center justify-center '>
        <li className='p-2 w-[100px] bg-black text-center rounded-lg hover:cursor-pointer hover:text-black hover:bg-green-500'>Home</li>
        <li className='p-2 w-[100px] bg-black text-center rounded-lg hover:cursor-pointer hover:text-black hover:bg-green-500'>Company</li>
        <li className='p-2 w-[100px] bg-black text-center rounded-lg hover:cursor-pointer hover:text-black hover:bg-green-500'>Resources</li>
        <li className='p-2 w-[100px] bg-black text-center rounded-lg hover:cursor-pointer hover:text-black hover:bg-green-500'>About</li>
        <li className='p-2 w-[100px] bg-black text-center rounded-lg hover:cursor-pointer hover:text-black hover:bg-green-500 mr-4'>Contact</li>
      </ul>
      <div onClick={clickNav} className='block md:hidden'>
        {!nav ? < IoCloseOutline className='text-3xl cursor-pointer '/>: <IoMenuOutline className='text-3xl cursor-pointer '/>}
       
      </div>
      <div  className={!nav? 'fixed top-5 left-0 w-[30%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-300' : "fixed left-[-100%]"}>
      <h1 className='w-full text-3xl font-bold text-green-500 max-w-[1240px] mx-auto px-4 m-2'>TOPPO</h1>
        <ul className='uppercase p-2'>
          <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>Home</li>
          <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>Company</li>
          <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>Resources</li>
          <li className='p-4 border-b border-gray-600 hover:text-green-500 cursor-pointer'>About</li>
          <li className='p-4 hover:text-green-500 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar