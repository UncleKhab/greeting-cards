import { motion } from "framer-motion";
import styles from "./EditorCardPages.module.css";
import { useState } from "react";

const animations = {
  firstOpen: {},
  closed: { rotateY: "0" },
  open: { rotateY: "-180deg" },
};
const EditorCardBackPage = ({ page }) => {
  const [newClass, setNewClass] = useState(false);
  if (page >= 1) {
    setTimeout(() => {
      setNewClass((prevState) => !prevState);
    }, 600);
  }

  return (
    <motion.div
      variants={animations}
      animate={page >= 2 ? "open" : "closed"}
      className={`${styles.page} ${newClass ? styles.over : ""}`}
      transition={{ type: "spring", stiffness: 100, duration: 1 }}
    >
      <div className={styles.frontFace}>SECOND PAGE</div>
      <div className={styles.backFace}>BACK COVER</div>
    </motion.div>
  );
};

export default EditorCardBackPage;
