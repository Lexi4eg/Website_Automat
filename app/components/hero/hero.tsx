import React from "react";
import Hero_left from "./her-left";
import Hero_right from "./hero-right";

function Hero() {
  return (
    <div className="w-screen flex flex-row justify-between p-3 pr-6">
      <Hero_left />
      <Hero_right />
    </div>
  );
}

export default Hero;
