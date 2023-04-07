"use client";
import { motion } from "framer-motion";
import React from "react";
import Navbar from "../components/Navbar";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin-ext", "latin"],
  variable: "--poppins-font",
  weight: "500",
});

function Home() {
  return (
    <>
      <div className="text-white text-10xl bg-home_gray h-screen">
        <Navbar />
        <div className={roboto.className}>
          <div className="flex flex-row w-screen items-center h-72">
            <div className="w-2/3 text-center h-72">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                brand
              </motion.h1>
            </div>
            <div className="text-3xl w-96 text-center">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="row-col"
              >
                <span className="row-message">
                  We are specialised in setting up the foundation of your brand
                  and setting you up for success.
                </span>
              </motion.div>
            </div>
          </div>
          <div className="flex flex-row h-72 ">
            <motion.div
              animate={{
                x: ["-145%", "145%"], // Animate from 0% to 100% of the parent container's width
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity, // Repeat the animation indefinitely
                repeatType: "loop", // Loop back to the beginning of the animation
              }}
              className="mx-60"
            >
              <motion.h1
                initial={{ y: "50%", opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.2,
                }}
              >
                experience
              </motion.h1>
            </motion.div>
          </div>
          <div className="text-center h-72">
            {" "}
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 0.2,
              }}
            >
              studio
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
