import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "../sass/main.scss";

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
        <div className="logo">
          <Link href={""}>Gruppe Blau</Link>
        </div>
        <nav className="nav">
          <li>
            <Link href="/design">Automat</Link>
          </li>
          <li>
            <Link href="/Teams">Teams</Link>
          </li>
          <li>
            <Link href="/Blog">Blog</Link>
          </li>
        </nav>
        <div className="contact">
          <Link href="/contactus">Let s work together</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
