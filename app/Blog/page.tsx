import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
import Blogpost1preview from "./posts/Blogpost1/Blogpost1preview";

function Blog() {
  return (
    <>
      <div className="px-20">
        <div>
          <Navbar />
        </div>
        <div className="text-white text-6xl pt-10">The Progress we made</div>
        <div className="grid text-white grid-cols-4 grid-flow-row-dense">
          <div>
            <Link href={"/"}>
              <Blogpost1preview />
            </Link>
          </div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
          <div>hi</div>
        </div>
      </div>
    </>
  );
}

export default Blog;
