import React from "react";
import Image from "next/image";

function Hero_right() {
  return (
    <div className="text-white flex justify-end rounded-latin-lg pt-20">
      <Image
        className="rounded-l-2xl border border-black"
        src={"/automat.jpeg"}
        alt={""}
        width={800}
        height={800}
        objectFit="cover"
      />
    </div>
  );
}

export default Hero_right;
