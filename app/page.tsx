import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-bg_blue overflow-hidden h-screen">
        <div className="">
          <Navbar />
        </div>
        <div className="w-screen text-white ">
          <div className="">
            <Hero />
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
