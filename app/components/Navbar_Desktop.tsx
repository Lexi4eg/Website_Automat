import Link from "next/link";
import React from "react";

function Navbar_Desktop() {
  return (
    <div className="flex flex-row items-center h-20 sm:justify-between justify-center px-4 py-2 text-white   text-xl ">
      <div className=" text-blue-600 rounded-md items-center  hidden sm:flex h-full ">
        <Link href={"/"}>
          <div className=" px-2 text-white ">Gruppe Blau</div>
        </Link>
      </div>
      <div className="flex  flex-row">
        <Link href={"/Automat"}>
          <div className="px-2 p-1 mx-4">Automat</div>
        </Link>
        <Link href={"/Teams"}>
          <div className="px-2 p-1 mx-4">Teams</div>
        </Link>
        <Link href={"/Blog"}>
          <div className="px-2 p-1 ml-4">Blog</div>
        </Link>
      </div>
      <Link href={"/contactus"}>
        <div className="hidden sm:flex h-full px-3 text-black   items-center  rounded-md  ">
          <div className="text-white"> Contact Us</div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar_Desktop;
