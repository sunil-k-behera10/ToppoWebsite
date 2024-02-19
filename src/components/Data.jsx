import React from 'react'
import laptop from '../images/laptop.jpg'

const Data = () => {
  return (
    <div className='w-full bg-white py-26 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4 cursor-pointer hover:transform hover:scale-105 duration-300' src={laptop} alt="" />
        <div className='flex flex-col justify-center bg-green-100 w-[673px] pl-6'>
          <p className='text-green-500 font-bold'>DATA ANALYTICS</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics</h1>
          <p className='w-[600px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque consequatur ex porro laborum mollitia ipsa quo iusto similique soluta obcaecati blanditiis omnis, error excepturi, debitis in dolore vel! Necessitatibus.
          </p>
          <button className='bg-black rounded-xl w-[200px] h-14  text-green-500 font-bold text-xl mt-5 hover:text-black hover:bg-green-500 mb-4'>Get Clicked</button>
        </div>
        
      </div>

    </div>
  )
}

export default Data