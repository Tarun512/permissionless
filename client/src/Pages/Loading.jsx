import React from 'react'

function Loading() {
  return (
    <>
    
    <div className='flex flex-col justify-center items-center hover:bg-custom_green bg-black h-[80vh] w-screen text-white'>
        <div className='flex flex-row justify-center items-center'>
            <span>Now you're officially</span>
            <span className='text-amber-800'>
                <img src="/permissionless_logo.svg" alt="logo" />
            </span>
        </div>
    </div>
    <div className='flex flex-row h-[20vh] w-full px-10 justify-end text-blue-600 text-[6rem]'>
        <span className='h-full '>100%</span>
    </div>
    </>
  )
}

export default Loading