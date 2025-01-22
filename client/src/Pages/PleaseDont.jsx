import React, { useState } from "react";
import Loading from "./Loading";
import ParticleButton from "./ParticleButton";

function PleaseDont() {
  const [click, setClick] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  const handleClick = () => {
    setAnimationTriggered(true); // Trigger the animation
    setTimeout(() => {
      setClick(true); // Transition to the Loading component after animation
    }, 2000); // Adjust delay based on animation duration
  };

  return (
    <>
      {click ? (
        <Loading />
      ) : (
        <div
          className="bg-contain bg-center bg-repeat-y w-screen h-screen bg-black bg-[url('/please-dont-mobile.svg')] lg:bg-[url('/please-dont.svg')] lg:bg-no-repeat"
        >
          <div className="flex flex-row justify-center items-center h-screen w-screen "  >
            {/* Add onClick directly to ParticleButton to handle animation */}
            <ParticleButton
             onClick={handleClick}
             className={`${animationTriggered ? 'animate-glowing' : ''}`}/>
          </div>
        </div>
      )}
    </>
  );
}

export default PleaseDont;
