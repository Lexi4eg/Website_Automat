import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className="header"
    >
      <div className="header-inner text-white">
        <div className="logo">Gruppe Blau</div>
        <nav className="nav">
          <li>
            <Link href="/design">Automat</Link>
          </li>
          <li>
            <Link href="/Teams">Teams</Link>
          </li>
          <li>
            <Link href="/cases">Blog</Link>
          </li>
        </nav>
        <div className="contact">
          <Link href="/contactus">Let s work together</Link>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
