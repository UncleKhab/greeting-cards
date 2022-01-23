import React, { useState } from "react";
import styles from "./EditorCard.module.css";
import { motion, useCycle } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../../store/editorSlice/editorSlice";

const scaleVariants = {
  front: { x: 0 },
  open: { x: "35%", scale: 0.7 },
  back: { x: "100%" },
};
const Page = ({ setCounter }) => {
  const dispatch = useDispatch();
  const [flipAngle, cycleFlipAngle] = useCycle("0", "-180deg");
  const onTap = () => {
    cycleFlipAngle();
    switch (flipAngle) {
      case "0":
        dispatch(nextPage());
        break;
      default:
        dispatch(prevPage());
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
  const { page } = useSelector((state) => state.editor);
  console.log(page);

  return (
    <motion.div
      className={`${styles.card}`}
      variants={scaleVariants}
      animate={page === 0 ? "front" : page === 1 ? "open" : "back"}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Page></Page>
      <Page></Page>
    </motion.div>
  );
};

export default EditorCard;
