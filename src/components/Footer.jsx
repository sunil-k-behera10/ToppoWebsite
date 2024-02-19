import React from 'react'
import { FaFacebook , FaInstagram, FaTwitter, FaLinkedin,FaGithub  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400'>
      <div>
      <h1 className='w-full text-3xl font-bold text-green-500 max-w-[1240px] mx-auto  '>TOPPO</h1>
      <p className='text-justify pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident repellendus cum modi tempora tenetur, nulla voluptates, expedita quis, quo velit officia. Dolores blanditiis deleniti magnam, veritatis ullam quod maiores dicta.
      </p>
      <div className='flex items-center gap-4 py-4'>
          <FaFacebook size={25} className='hover:text-green-400 hover:cursor-pointer'/>
          <FaInstagram size={25} className='hover:text-green-400 hover:cursor-pointer'/>
          <FaTwitter size={25} className='hover:text-green-400 hover:cursor-pointer'/>
          <FaLinkedin size={25} className='hover:text-green-400 hover:cursor-pointer'/>
          <FaGithub size={25} className='hover:text-green-400 hover:cursor-pointer'/>
       </div>
      </div>

      <div className='lg:col-span-2 flex justify-between mt-6 pl-2'>
        <div>
          <h6 className='font-medium text-gray-300 hover:text-green-300 hover:cursor-pointer'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Analytics</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Contact</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Performance</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Reviews</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-300 hover:text-green-300 hover:cursor-pointer'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Analytics</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Contact</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Performance</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Reviews</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-300 hover:text-green-300 hover:cursor-pointer'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Analytics</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Contact</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Performance</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Reviews</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-300 hover:text-green-300 hover:cursor-pointer'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Analytics</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Contact</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Performance</li>
              <li className='py-2 text-sm hover:text-gray-200 hover:cursor-pointer'>Reviews</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer