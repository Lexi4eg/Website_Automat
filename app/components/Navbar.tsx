"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import Navbar_Desktop from "./Navbar_Desktop";
import Head from "../head";
import Header from "../components/Header";
import Navbar_Mobile from "./Navbar_Mobile";
import { motion } from "framer-motion";

function Navbar() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
    >
      <Head />
      {isMobileDevice ? <Navbar_Mobile /> : <Header />}
    </motion.div>
  );
}

export default Navbar;
