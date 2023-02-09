import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row items-center h-20 justify-between px-4 py-2 text-black  border-b border-b-white text-xl bg-white">
      <div className=" text-blue-600">
        <div>Gruppe Blau</div>
      </div>
      <div className="flex flex-row">
        <div className="px-2 p-1 mx-4">Automat</div>
        <div className="px-2 p-1 mx-4">Teams</div>
        <div className="px-2 p-1 ml-4">Blog</div>
      </div>
      <div className="flex h-full px-3  items-center border box-border border-black1 rounded-md bg-green1 ">
        <div className=""> Contact Us</div>
      </div>
    </div>
  );
}

export default Navbar;
