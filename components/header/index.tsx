import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const StickyHeader = () => {
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
    <motion.div
      style={{ y: isSticky ? y : threshold }}
    >
      <header>
        <h1>Sticky Header</h1>
      </header>
    </motion.div>
  );
}

export default StickyHeader;
