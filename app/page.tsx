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
            <div className=" flex items-center h-full w-full justify-center ">
              <div className="text-white justify-items-center">
                <div className="text-5xl">Productive</div>
                <div className="text-5xl">Free and easy</div>
                <div className="text-5xl">New.</div>
              </div>
            </div>
          </div>
          <div className="col-span-4 row-span-5 bg-white"></div>
          <div className="col-span-2 row-span-3 bg-slate-100">
            <div className="flex flex-col items-center">
              <Image src={"/1.png"} width={450} height={800} alt={""} />
              <div className="text-7xl text-center">Productive</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
