import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4 mt-4 bg-black'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimise your flow?</h1>
          <p>Sign up to your newsletter and stay connected</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter your email' />
            <button className='bg-green-500 text-black rounded-md font-medium w-[200px] hover:bg-white ml-4 py-3 px-6 my-6'>Notify Us</button>
          </div>
          <p>We care about the protection of your data. Read our <span className='text-green-400'>Privacy Policy.</span> </p>
        </div>

      </div>

    </div>
  )
}

export default NewsLetter