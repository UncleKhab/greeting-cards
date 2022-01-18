import React, { useState } from "react";
import styles from "./EditorCard.module.css";
import { motion, useCycle } from "framer-motion";

const scaleVariants = {
  front: { x: 0 },
  open: { x: "35%", scale: 0.7 },
  back: { x: "100%" },
};
const Page = ({ setCounter }) => {
  const [flipAngle, cycleFlipAngle] = useCycle("0", "-180deg");
  const onTap = () => {
    cycleFlipAngle();
    console.log(flipAngle);
    switch (flipAngle) {
      case "0":
        setCounter((prevCount) => (prevCount += 1));
        break;
      default:
        setCounter((prevCount) => (prevCount -= 1));
        break;
    }
  };
  return (
    <motion.div
      className={styles.page}
      transition={{
        delay: 0.5,
        x: { type: "spring", stiffness: 75 },
        default: { duration: 0.3 },
      }}
      onTap={onTap}
      initial={{ rotateY: 0, zIndex: 0 }}
      animate={{
        rotateY: flipAngle,
      }}
    >
      <div className={styles.face}></div>
      <div className={`${styles.face} ${styles.backface}`}></div>
    </motion.div>
  );
};
const EditorCard = () => {
  const [counter, setCounter] = useState(0);
  return (
    <motion.div
      className={`${styles.card}`}
      variants={scaleVariants}
      animate={counter === 0 ? "front" : counter === 1 ? "open" : "back"}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Page setCounter={setCounter}></Page>
      <Page setCounter={setCounter}></Page>
    </motion.div>
  );
};

export default EditorCard;