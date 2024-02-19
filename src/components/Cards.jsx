import React from 'react'
import single from '../images/single.png'
import double from '../images/double.png'
import triple from '../images/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-green-300 hover:cursor-pointer'>
          <img src={single} alt=""  className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2  className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$124</p>
          <div className='text-center font-medium'>
            <p className='py-2 mx-8 mt-4'>500GB Storage</p>
            <p className='py-2 mx-8'>1 Granted User</p>
            <p className='py-2 mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-green-400 text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 hover:bg-black hover:text-green-400'>Start Trial</button>
        </div>

        <div className='w-full border shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 hover:bg-green-300 hover:cursor-pointer'>
          <img src={double} alt=""  className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2  className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$124</p>
          <div className='text-center font-medium'>
            <p className='py-2 mx-8 mt-4'>500GB Storage</p>
            <p className='py-2 mx-8'>1 Granted User</p>
            <p className='py-2 mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-green-400 text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 hover:bg-black hover:text-green-400'>Start Trial</button>
        </div>

        <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-green-300 hover:cursor-pointer'>
          <img src={triple} alt=""  className='w-20 mx-auto mt-[-3rem] bg-white'/>
          <h2  className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$124</p>
          <div className='text-center font-medium'>
            <p className='py-2 mx-8 mt-4'>500GB Storage</p>
            <p className='py-2 mx-8'>1 Granted User</p>
            <p className='py-2 mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-green-400 text-black w-[200px] rounded-md font-medium mx-auto my-6 px-6 py-3 hover:bg-black hover:text-green-400'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards