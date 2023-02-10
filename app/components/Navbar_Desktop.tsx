import Link from "next/link";
import React from "react";

function Navbar_Desktop() {
  return (
    <div className="flex flex-row items-center h-20 justify-between px-4 py-2 text-black  border-b border-b-white text-xl bg-white">
      <div className=" text-blue-600">
        <Link href={"/"}>
          <div className="bg-blue-400 p-2 rounded-md text-white ">
            Gruppe Blau
          </div>
        </Link>
      </div>
      <div className="flex flex-row">
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
      <div className="flex h-full px-3  items-center border box-border border-black1 rounded-md bg-green1 ">
        <div className=""> Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar_Desktop;
