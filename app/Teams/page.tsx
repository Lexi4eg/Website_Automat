"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Grid from "./Grid";

import { Roboto } from "@next/font/google";
import Introduction from "./Introduction";
import { motion } from "framer-motion";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function page() {
  return (
    <>
      <div className="flex flex-row bg-bg_gray">
        <motion.div
          className="hidden sm:flex"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          }}
        >
          <Image
            src={"/About-massive-agency-700x1049.jpg"}
            alt={""}
            width={1000}
            height={1000}
            objectFit="cover"
          ></Image>
        </motion.div>
        <motion.div
          className="w-full h-fit  bg-bg_gray2"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.5,
          }}
        >
          <Navbar></Navbar>

          <h1 className="text-white px-6 sm:px-20 p-10 mt-10 text-4xl lg:text-6xl sm:text-2xl md:text-5xl p-4 ">
            <div className={roboto.className}>
              Meet our team of creators, designers, and world-class problem
              solvers
            </div>
          </h1>
          <p className="text-white  px-6 sm:px-20 text-lg mt-3 p-4 mb-10">
            To be the Team our Teachers want us to be, it takes an eclectic
            group of passionate operators. Get ot know the people leading the
            way at Team Blau
          </p>
          <div className="text-white h-fit p-4 bg-bg_gray">
            <Introduction />
          </div>
        </motion.div>
      </div>

      <div className="w-full bg-bg_gray">
        <Grid />
      </div>
    </>
  );
}

export default page;
