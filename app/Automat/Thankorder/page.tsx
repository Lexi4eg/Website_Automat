import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="text-white w-full h-screen text-9xl flex justify-center items-center">
        <div className="flex flex-col">
          <div className="flex justify-center">Thank you for your Order</div>
          <Link
            href={"/Automat"}
            className="flex justify-center w-screen text-3xl p-10"
          >
            Go back
          </Link>
        </div>
      </div>
    </>
  );
}

export default page;
