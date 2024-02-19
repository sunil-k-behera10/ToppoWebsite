import React from 'react'
import { ReactTyped } from "react-typed";

const Body = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mx-auto w-full h-screen mt-[-96px] flex flex-col text-center justify-center'>
          <p className=' text-green-500 font-bold p-2 text-2xl '>GROWING WITH DATA ANALYTICS</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
          <div className='flex justify-center items-center'>
            <p className='pt-3 md:text-4xl sm:text-3xl text-xl font-bold '>Fast, flexible financing for</p>


            <ReactTyped className='text-4xl text-green-400 pl-2 pt-2 italic'
                  strings={[
                    " products",
                    " categories",
                    " analytics",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                >
                
            </ReactTyped>
           
          </div>
          <p className='md:text-2xl text-xl font-bold italic text-gray-400 pt-6'>Monitor your data to increase products.</p>
          <button className='bg-green-400 rounded-xl w-[200px] h-14 mx-auto text-black font-bold text-xl mt-5 hover:bg-white'>Get Clicked</button>

        </div>
    </div>
  )
}

export default Body