import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

function page() {
  return (
    <div className="w-screen h-full">
      <Navbar></Navbar>
      <h1 className="text-white text-7xl p-4">
        Meet our team of creators, designers, and world-class problem solvers
      </h1>
      <p className="text-white text-2xl mt-3">
        To be the Team our Teachers want us to be, it takes an eclectic group of
        passionate operators. Get ot know the people leading the way at Team
        Blau
      </p>

      <div className="m-4 grid grid-cols-3  text-white  gap-4 ">
        <div className="flex flex-col shadow-md p-1 ">
          <Image
            src="/Prattes_Felix.jpg"
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div className="text-2xl">Felix Prattes</div>
          <div>CTO</div>
        </div>
        <div className=" shadow-md p-1 w-100 h-100">
          <div className="h-auto w-auto">
            <Image
              src="/Lukic_Martina.jpg"
              alt="My image"
              height={200}
              width={200}
            />
          </div>
          <div className="text-2xl">Martina Lukic</div>
          <div>Konstruktion</div>
        </div>
        <div className=" shadow-md p-1">
          <Image
            src="/Haag_Julia.jpg"
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
          />
          <div className="text-2xl">Haag Julia</div>
          <div>Konstruktion</div>
        </div>
        <div className=" shadow-md p-1">
          <Image
            src="/Hochleitner_Max.jpg"
            alt=""
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="text-2xl">Hochleitner Max</div>
          <div>Konstruktion</div>
        </div>
        <div className=" shadow-md p-1">
          <Image
            src="/Sadikovic_Sanel.jpg"
            alt=""
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="text-2xl">Sanel Sadikovic</div>
          <div>Konstruktion</div>
        </div>
        <div className=" shadow-md p-1">
          <Image
            src="/Kaiser_Silvio.jpg"
            alt=""
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="text-2xl">Silvio Kaiser</div>
          <div>Konstruktion</div>
        </div>
        <div className=" shadow-md p-1">
          <Image
            src="/Aichhorn_Viktor.jpg"
            alt=""
            width={200}
            height={200}
            className="rounded-lg"
          />
          <div className="text-2xl">Viktor Aichhorn</div>
          <div>Konstruktion</div>
        </div>
      </div>
    </div>
  );
}

export default page;
