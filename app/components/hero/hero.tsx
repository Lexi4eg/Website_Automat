import React from "react";
import Hero_left from "./Hero_left";
import Hero_right from "./Hero_right";

function Hero() {
  return (
    <div className="flex flex-row w-screen h-full p-3 ">
      <div className="w-1/2">
        <Hero_left />
      </div>
      <div className="w-1/2">
        <Hero_right />
      </div>
    </div>
  );
}

export default Hero;
