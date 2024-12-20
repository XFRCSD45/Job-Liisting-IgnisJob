import React from 'react'

const Header = () => {
  return (
    <div className='bg-white'>
    <div   className='w-5/6 mx-auto'> 
       <header className=" ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl "><span className='font-extrabold'>remote</span>.com/jobs</h1>
         
          <div>
            <span className='font-semibold text-sm px-3'>For job seekers</span>
            <span className='font-semibold text-sm px-3'>For employers</span>
            <span className='font-semibold text-sm px-3'> Pricing</span>
            <button className="text-blue-600 font-medium px-4 py-2"> + Post a Job</button>
            <button className="text-blue-600 font-medium px-4 py-2">Sign up</button>
            <button className="text-white bg-blue-600 px-4 py-2 rounded-md">
              Log in
            </button>
          </div>
        </div>
      </header>
    </div>
    </div>
  )
}

export default Header
