"use client";

import React from "react";
import Navbar from "../components/Navbar";

import {
  orderBueno,
  orderHaribo,
  orderKitkat,
  orderMM,
  turnoffmotors,
  refill,
} from "./apires";

function page() {
  return (
    <>
      <Navbar />
      <div className="text-white w-full h-screen">
        <div className="p-10">
          <div className="text-4xl">Motor Control</div>
          <button
            onClick={orderKitkat}
            className="text-4xl border w-96 justify-center flex p-2 m-5 rounded-md  bg-teal-600"
          >
            Order Kitkat{" "}
          </button>
          <button
            onClick={orderBueno}
            className="text-4xl border w-96 justify-center flex p-2 m-5 rounded-md  bg-teal-600"
          >
            Order Bueno{" "}
          </button>
          <button
            onClick={orderHaribo}
            className="text-4xl border w-96 justify-center flex p-2 m-5 rounded-md  bg-teal-600"
          >
            Order Haribo{" "}
          </button>
          <button
            onClick={orderMM}
            className="text-4xl border w-96 justify-center flex p-2 m-5 rounded-md  bg-teal-600"
          >
            Order M&M{" "}
          </button>
          <div className="text-4xl">Admin Controls</div>
          <button
            onClick={refill}
            className="text-4xl border w-96 justify-center flex p-2 m-5 rounded-md  bg-red-500"
          >
            Refill{" "}
          </button>
          <button
            onClick={turnoffmotors}
            className="text-4xl border w-96 justify-center flex p-2 m-5 rounded-md  bg-red-500"
          >
            Turn off all motors{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default page;
