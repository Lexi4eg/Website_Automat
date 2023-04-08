import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "../sass/main.scss";

const Header = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.5,
      }}
      className="header"
    >
      <div className="header-inner text-white">
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Link href="/">Gruppe Blau</Link>
        </motion.div>
        <nav className="nav">
          <li>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/Automat">Automat</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/Teams">Teams</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link href="/Blog">Blog</Link>
            </motion.div>
          </li>
        </nav>
        <div className="contact">
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link href="/contactus">Let s work together</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
