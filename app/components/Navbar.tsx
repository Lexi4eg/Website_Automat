"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isMobile } from "react-device-detect";
import Navbar_Desktop from "./Navbar_Desktop";
import Head from "../head";
import Navbar_Mobile from "./Navbar_Mobile";

function MyComponent() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  return (
    <div>
      <Head />
      {isMobileDevice ? <Navbar_Mobile /> : <Navbar_Desktop />}
    </div>
  );
}

export default MyComponent;
