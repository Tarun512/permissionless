import React from 'react'
import { useState } from 'react';
function PleaseDont() {
const[hover,setHover] = useState(false);
    return (
      <>
      <div
        className="bg-cover bg-center bg-repeat-y w-screen bg-black bg-[url('/please-dont-mobile.svg')]
        sm:bg-repeat-y sm:w-screen
        md:h-screen md:w-screen
        xl:h-screen xl:w-[80vw]

        "
              
      >
        {/* <div className="flex flex-col justify-center items-center h-screen">
          <button className="bg-gradient-to-r from-lime-600 to-lime-400 px-10 py-2 rounded" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
            <span className={hover ? "line-through" : "font-semibold"}>Don't </span>
            <span> Click me </span>
          </button>
        </div> */}
        
      </div>
        
      </>
    )
}

export default PleaseDont