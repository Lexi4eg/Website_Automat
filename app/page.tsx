/* eslint-disable react/jsx-no-undef */
"use client";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";

import "./sass/main.scss";
import Loader from "./components/Loader";

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body")?.classList.add("loading")
      : document.querySelector("body")?.classList.remove("loading");
  }, [loading]);

  return (
    <div className="text-white">
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <>
          <Header />
          <Banner />
          {!loading && (
            <div className="transition-image final">
              <motion.img
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                src={`/images/image-2.jpg`}
                layoutId="main-image-1"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Page;
