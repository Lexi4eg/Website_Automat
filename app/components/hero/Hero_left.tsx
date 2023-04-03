import Link from "next/link";
import React from "react";
import Image from "next/image";

function Hero_first() {
  return (
    <>
      <div className="px-20">
        <div className=" ">
          <div className="mt-40  rounded-sm pl-2 mt-10 mb-5">Automat</div>

          <h1 className="text-8xl  ">The Future of Automat is Here</h1>
          <div className="p-4 ml-6 pt-20 text-xl  block">
            Digital transactions do not have to be include risk, cost, and
            complexity. With Automat, you can easily buy you sweets on the fly
            with minumum cost and maximum reliability.
          </div>
        </div>

        <div className="flex flex-row  pl-2 p-4 mt-4  ">
          <div className="p-4 ml-6 rounded-md bg-green1 border px-8 py-3 mr-8 border-black  text-black ">
            <Link href="/">Start here</Link>
          </div>
          <div className="flex  justify-center items-center ml-20 border p-2 rounded-md px-4">
            Dokumentation
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero_first;
