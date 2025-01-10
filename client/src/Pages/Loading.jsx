import React, { useEffect, useState } from 'react'
import Home from './Home';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Loading() {
  const [count,setCount] = useState(0);
  const [display,setDisplay] = useState(false);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount((prevCount)=>{
        if(prevCount < 100){
          return prevCount + 1;
        }else{
          clearInterval(interval); 
          setDisplay(true);
          return prevCount;
        }
      })
    },30);
    return ()=> clearInterval(interval)
  },[]);
  useGSAP(()=>{
    gsap.from('.green',{
      x: "-100vw",
      duration: 3,

    })
  })
  useGSAP(() => {
    const spans = document.querySelectorAll('.wave-text span');
    
    gsap.to(spans, {
      y: "6vh",
      yoyo: true,
      ease: 'slow(0.7,0.7,false)',
      stagger: 0.1,
      duration: 2.5,
    });
  }, []);
  return (
    <>
    {
      display? 
      <Home /> :

      <div className={`absolute z-0 h-screen w-screen bg-black ${display? 'none' : 'visible'}`}>
        <div className='absolute z-0 h-screen w-screen bg-custom_green green'></div>
        <div className=' relative z-10 flex flex-row justify-center items-center text-white h-[85vh] w-screen'>
          {/* <span>Now you're officically</span>
          <img src="./permissionless_logo_brown.svg" alt="permissionless" /> */}
          
          <div className="wave-text flex relative items-center my-[50vh]">
            <span className='inline-block pl-1'>Congratulations, </span>
            <span className='inline-block pl-1'>now</span>
            <span className='inline-block pl-1'>you're</span>
            <span className='inline-block pl-1'>officially</span>
            <span className='inline-block pl-1'>
              <img src="./permissionless_logo_brown.svg" alt="permissionless" />
            </span>
          </div>
        
        </div>
        
        <div className='relative z-10 h-[15vh] w-screen text-blue-600 flex flex-row justify-end text-[10vh]'>{count}%</div>

      </div>
    }
    
    </>
  )
}

export default Loading