import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-black overflow-hidden">
        <div className=" ">
          <Navbar />
        </div>
        <div className="grid grid-cols-6 grid-rows-6 w-screen h-screen">
          <div className="col-span-2 row-span-2 items-center">
            <div className="text-white text-4xl w-60 ">
              Productive Free and easy new
            </div>
          </div>
          <div className="col-span-4 row-span-5 bg-white"></div>
          <div className="col-span-2 row-span-3 bg-slate-100"></div>
        </div>
      </div>
    </>
  );
}
