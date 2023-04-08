import React from "react";
import Image from "next/image";
import "./styles.scss";
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
    rotate: -10,
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
      <div className="splash" />
      <motion.div className="card" variants={cardVariants}>
        {text}
      </motion.div>
    </motion.div>
  );
}

function Blogpost1preview() {
  return (
    <div className=" rounded-lg w-full">
      <div className="flex justify-center  w-full aspect-w-1 aspect-h-1  overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          className="rounded-lg"
          src={"/Display_Blog_1.jpg"}
          width={500}
          height={500}
          alt={""}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-row py-5 text-xl">Felix Prattes</div>
      <div className="text-white text-4xl">Display Testing</div>
      <div className="flex flex-row">
        <Text
          text={
            "Why testing is so important when working with an arduino display and the troubles we encountered"
          }
        ></Text>
      </div>
    </div>
  );
}

export default Blogpost1preview;
