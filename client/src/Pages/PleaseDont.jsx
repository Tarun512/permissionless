import React, { useState } from "react";
import Loading from "./Loading";
import ParticleButton from "./ParticleButton";

function PleaseDont() {
  const [click, setClick] = useState(false);

  return (
    <>
      {click ? (
        <Loading />
      ) : (
        <div
          className="bg-contain bg-center bg-repeat-y w-screen h-screen bg-black bg-[url('/please-dont-mobile.svg')] lg:bg-[url('/please-dont.svg')] lg:bg-no-repeat"
        >
          <div className="flex flex-row justify-center items-center h-screen">
            {/* Add onClick directly to ParticleButton to handle animation */}
            <ParticleButton onClick={() => setClick(true)} />
          </div>
        </div>
      )}
    </>
  );
}

export default PleaseDont;
