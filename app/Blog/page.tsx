import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Blogpost1preview from "./posts/Blogpost1/Blogpost1preview";

function Blog() {
  return (
    <>
      <div className="px-20 bg-zinc-900	h-screen	">
        <div>
          <Navbar />
        </div>
        <div className=" text-white text-6xl pt-10">The Progress we made</div>
        <div className="grid text-white grid-cols-4  gap-10 grid-flow-row-dense py-10">
          <div>
            <Link href={"/Blog/posts/Blogpost1"}>
              <Blogpost1preview />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
