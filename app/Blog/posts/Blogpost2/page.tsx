"use client";
import Navbar from "@/app/components/Navbar";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface Props {
  text: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Text({ text }: Props) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {text}
      </motion.div>
    </motion.div>
  );
}

function Blogpost2() {
  return (
    <>
      <div className="bg-bg_gray3  text-white w-full h-full">
        <div>
          <Navbar></Navbar>
        </div>
        <Link href={"/Blog/"}>
          <div className="flex flex-row text-2xl p-5 items-center">
            <BiArrowBack />
            <div className="pl-2">Back</div>
          </div>
        </Link>
        <div className="flex  flex-col mt-64 items-center justify-center text-center text-white ">
          <div className="w-2/3 text-9xl ">
            <Text text="Display Testing what to look for when you are trying it yourself"></Text>
          </div>
          <div className="mt-60 w-1/3 text-center text-3xl">
            <Text text=" Welcome to the exciting world of Arduino displays! These versatile devices can be used to create all sorts of interactive projects, from simple temperature sensors to complex smart home systems. But with so many different types of displays available on the market, it  can be challenging to know which one to choose and which library to use to program it."></Text>
          </div>

          <div className="mt-5 w">
            <Text text="Graz, Austria • APRIL 5, 2023"></Text>
          </div>

          <div className="mt-40 w-1/3 text-xl">
            <Text
              text=" Welcome to the exciting world of Arduino displays! These versatile
            devices can be used to create all sorts of interactive projects,
            from simple temperature sensors to complex smart home systems. But
            with so many different types of displays available on the market, it
            can be challenging to know which one to choose and which library to
            use to program it. At HTL Graz, we recently held a testing day
            dedicated to Arduino displays. Our goal was to gain practical
            experience in using and troubleshooting different types of displays
            with various libraries. In this blog post, we will share our
            process, challenges, and findings."
            ></Text>
          </div>
          <div className="flex mt-40 w-1/3 justify-start ">
            <h1 className="text-3xl ">
              <Text text="Getting Started with Arduino Displays"></Text>
            </h1>
          </div>
          <div className="mt-5 w-1/3 text-xl  ">
            <Text
              text="
            Before we started testing the displays, we had to learn how to wire
            them with an Arduino. We used a 16x2 LCD display and followed online
            tutorials to connect it to the Arduino Uno board. The wiring was
            relatively straightforward, but we had to be careful with the
            orientation of the pins and the potentiometer for adjusting the
            contrast. Once we had the display wired up, we uploaded a simple
            code to test it out. The code displayed a welcome message and
            allowed us to change the contrast with the potentiometer. It was
            satisfying to see the characters light up on the screen and know
            that we had successfully connected the display to the Arduino."
            ></Text>
          </div>

          <div className="flex mt-40 w-1/3 justify-start ">
            <h1 className="text-3xl ">
              <Text text="Testing Different Libraries for Displays"></Text>
            </h1>
          </div>
          <div className="mt-4 w-1/3 text-xl ">
            <Text
              text="
            After we had gained some confidence with the basic display, we moved
            on to testing different libraries to see how they could enhance the
            functionality of the display. We tested four different libraries:
            LiquidCrystal, Adafruit_LiquidCrystal, LCDMenuLib, and U8g2. The
            LiquidCrystal library is the default library that comes with the
            Arduino IDE, and it provides basic functions for controlling
            character-based displays. Adafruit_LiquidCrystal is a modified
            version of LiquidCrystal that adds some extra features, such as
            printing graphics and custom characters. LCDMenuLib is a more
            advanced library that allows you to create menu structures with
            different levels and submenus. U8g2 is a graphics library that
            supports various display types, including OLED and LCD. We tested
            each library by uploading example codes and observing the results on
            the display. We compared the ease of use, flexibility, and speed of
            each library. We found that LiquidCrystal and Adafruit_LiquidCrystal
            were straightforward to use but limited in their capabilities.
            LCDMenuLib was more complex but allowed us to create more
            sophisticated menus. U8g2 was the most versatile library, but it
            required more memory and processing power."
            ></Text>
          </div>

          <div className="flex mt-40 w-1/3 justify-start ">
            <h1 className="text-3xl ">
              <Text text="Dealing with a Broken Pixel Row"></Text>
            </h1>
          </div>
          <div className="w-1/3  text-xl ">
            <Text
              text="
                        As we were testing the displays, we encountered an unexpected
            problem with one of the LCD screens. One of the rows of pixels was
            completely broken, which meant that we could not display certain
            characters or symbols properly. We tried adjusting the contrast and
            the connections, but the problem persisted. After consulting with
            our instructor, we decided to purchase a new display to continue our
            testing. We learned that LCD displays are relatively fragile and can
            break easily if mishandled or exposed to extreme temperatures or
            humidity. It was a valuable lesson in troubleshooting and
            problem-solving, and we were grateful for the opportunity to learn
            from our mistakes."
            ></Text>
          </div>

          <div className="flex mt-40 w-1/3 justify-start ">
            <h1 className="text-3xl ">
              <Text text="Conclusion"></Text>
            </h1>
          </div>
          <div className=" mt-4 w-1/3 text-xl ">
            <Text
              text="
            Our testing day at HTL Graz gave us valuable hands-on experience in
            working with Arduino displays and testing different libraries. We
            learned how to wire the displays, upload codes, and troubleshoot
            common problems. We also discovered the strengths and limitations of
            different libraries and how they can enhance the functionality of
            displays. Overall, we had a fun and productive day of testing and
            troubleshooting, and we hope to apply our newfound knowledge and
            skills in future Arduino projects. We encourage anyone interested in
            working with Arduino displays to experiment with different libraries
            and to be prepared for unexpected challenges along the way."
            ></Text>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogpost2;
