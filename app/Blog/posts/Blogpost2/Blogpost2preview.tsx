import React from "react";
import Image from "next/image";

function Blogpost1preview() {
  return (
    <div className=" rounded-lg w-full">
      <div className="flex justify-center  w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          className="rounded-lg"
          src={"/Display_Blog_1.jpg"}
          width={500}
          height={500}
          alt={""}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-row py-5 text-xl">Felix Prattes</div>
      <div className="text-white text-4xl">Display Testing</div>
      <div className="flex flex-row">
        Why testing is so important when working with an arduino display and the
        troubles we encountered{" "}
      </div>
    </div>
  );
}

export default Blogpost1preview;
