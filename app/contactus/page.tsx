import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Contactme from "./contactme";

function page() {
  return (
    <>
      <div className="flex flex-row bg-bg_gray2">
        <div className="flex justify-center w-1/3 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <Image
            className="rounded-lg"
            src={"/Car.png"}
            width={800}
            height={800}
            alt={""}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="bg-bg_gray2">
            <Navbar></Navbar>
          </div>
          <Contactme />
        </div>
      </div>
    </>
  );
}

export default page;