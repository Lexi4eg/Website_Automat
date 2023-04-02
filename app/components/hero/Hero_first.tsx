import Link from "next/link";
import React from "react";
import Image from "next/image";

//write a button class

function Hero_first() {
  return (
    <>
      <div className="">
        <div className="w-screen ">
          <div className=" lg:pl-50 border-l-4 rounded-sm border-blue-500 pl-2 mt-10 mb-5">
            Automat
          </div>

          <h1 className="text-7xl  ">Building the next big thing</h1>
          <div className="p-4 pl-2 pt-9 text-xl w-60 block">
            The new and revolutionizet Methode of getting you sweets fast and
            reliable with cutting edge technologies and low cost.
          </div>
        </div>

        

        <div className="flex flex-row  pl-2 p-4 mt-4  ">
          <div className="p-4  rounded-md bg-green1 border px-8 py-3 mr-8 border-black  text-black ">
            <Link href="/">Start here</Link>
          </div>
          <div className="flex  justify-center items-center ml-5 border p-2 rounded-md px-4">
            Dokumentation
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_first;
