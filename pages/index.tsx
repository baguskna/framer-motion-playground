import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useMotionValue,
} from "framer-motion";
import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const y = useMotionValue(0);
  const [isSticky, setIsSticky] = useState(true);
  const threshold = useTransform(y, [-50, 0], [0, 20]);

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
    <>
      <motion.div style={{ y: isSticky ? y : threshold }}>
        <h1>Section 1</h1>
      </motion.div>
      <div className={styles.container}></div>
      <div className={styles.container}>
        <motion.div
          className={styles.block}
          ref={ref}
          style={{
            rotate: rotation,
          }}
        >
          Div
        </motion.div>
      </div>
    </>
  );
};

export default Home;
