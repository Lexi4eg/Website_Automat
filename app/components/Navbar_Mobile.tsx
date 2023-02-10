"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row items-center h-20 justify-between px-4 py-2 text-black border-b border-b-white text-xl bg-white">
      <div className="">
        <div>Gruppe Blau</div>
      </div>

      <div className="flex h-8 w-8 cursor-pointer">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </div>
      {isMenuOpen && (
        <div className="fixed top-20 left-0 bg-darkblue1 h-screen w-80  p-3 ">
          <div className="flex flex-col  justify-between  text-white  ">
            <Link href={"/Automat"}>
              <div className="px-2 p-1 my-4  mx-4">Automat</div>
            </Link>
            <Link href={"/Teams"}>
              <div className="px-2 p-1  my-4 mx-4">Teams</div>
            </Link>
            <Link href={"/Blog"}>
              <div className="px-2 p-1 my-4  ml-4">Blog</div>
            </Link>
            <div className="  ml-3 my-2  justify-center text-black flex h-full w-40 px-3 py-4 items-center border box-border border-black1 rounded-md bg-green1">
              Contact Us
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;