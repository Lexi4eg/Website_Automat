import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <div>
          <h1 className=" bg-slate-700 text-center"> HI</h1>
        </div>
      </div>
    </>
  );
}
