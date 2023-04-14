import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full bg-white shadow-xl z-[999]">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
