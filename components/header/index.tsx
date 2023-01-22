import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Header = () => {
  const y = useMotionValue(0);
  const [isSticky, setIsSticky] = useState(true);
  const threshold = useTransform(y, [-50, 0], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 50 && isSticky) {
        setIsSticky(false);
      } else if (currentScroll <= 50 && !isSticky) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <header>
      <div className="logo">
        <svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </svg>
      </div>
      <div className="title">
        <h1>Pizza Joint</h1>
      </div>
    </header>
    // <motion.div style={{ y: isSticky ? y : threshold }}>
    //   <header>
    //     <h1>Sticky Header</h1>
    //   </header>
    // </motion.div>
  );
};

export default Header;
