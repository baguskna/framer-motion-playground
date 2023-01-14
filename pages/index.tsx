import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import type { NextPage } from "next";
import { useRef, useState } from "react";

import styles from "../styles/Home.module.css";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Home: NextPage = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  console.log(y);

  return (
    <>
      <div className={styles.container}>
        <h1>Bagus</h1>
      </div>
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.block}
          onClick={() => setIsActive(!isActive)}
          animate={{
            transformPerspective: 1200,
            scale: 1,
            rotateX: isActive ? 40 : 0,
            rotateY: isActive ? 4 : 0,
          }}
          // style={{ y }}
        >
          DIV
        </motion.div>
      </div>
    </>
  );
};

export default Home;
