import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import type { NextPage } from "next";
import { useRef, useState } from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <>
      <div className={styles.container}>
        <h1>Section 1</h1>
      </div>
      <div className={styles.container}>
        <motion.div
          className={styles.block}
          ref={ref}
          style={{
            rotate: rotation,
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default Home;
