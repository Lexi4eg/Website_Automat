"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar_Mobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-row items-center h-20 justify-between px-4 py-2 z-50 text-white border-b border-b-white text-xl bg-bg_gray2">
      <div className="">
        <Link href={"/"}>Gruppe Blau</Link>
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
        <div className="fixed top-20 left-0 bg-bg_gray2 h-screen w-80  p-3 ">
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
            <Link href={"/contactus"}>
              <div className="px-2 p-1 my-4  ml-4">Contac us</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar_Mobile;
