"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Contactme from "./contactme";
import { motion } from "framer-motion";

function page() {
  return (
    <>
      <div className="flex flex-row h-full bg-bg_gray2">
        <motion.div
          className="sm:flex hidden justify-center w-1/3 aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          }}
        >
          <Image
            className="pl-0 ml-0"
            src={"/Car.png"}
            width={800}
            height={800}
            alt={""}
            layout="cover"
            objectFit="cover"
          />
        </motion.div>

        <div className="sm:w-2/3 w-full h-full flex flex-col">
          <div className="bg-bg_gray2">
            <Navbar></Navbar>
          </div>
          <Contactme />
        </div>
      </div>
    </>
  );
}

export default page;
