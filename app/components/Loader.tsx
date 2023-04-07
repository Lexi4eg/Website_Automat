import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

// Import images

const Loader = ({ setLoading }: { setLoading: (value: boolean) => void }) => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const itemMain = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img layoutId="main-image-1" src={`/images/image-2.jpg`} />
        </motion.div>
        <ImageBlock variants={item} id="image-3" posX={80} posY={60} />
        <ImageBlock variants={item} id="image-4" posX={80} posY={0} />
        <ImageBlock variants={item} id="image-5" posX={0} posY={60} />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({
  posX,
  posY,
  variants,
  id,
}: {
  posX?: number;
  posY?: number;
  variants?: any;
  id?: string;
}) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY ?? 0}vh`,
        left: `${posX ?? 0}vw `,
      }}
    >
      <Image src={`/images/${id}.jpg`} alt={""} width={100} height={100} />
    </motion.div>
  );
};
export default Loader;
