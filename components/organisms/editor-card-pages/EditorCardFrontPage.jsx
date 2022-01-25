import { motion } from "framer-motion";
import styles from "./EditorCardPages.module.css";

const animations = {
  closed: { rotateY: "0" },
  open: { rotateY: "-180deg" },
};
const EditorCardFrontPage = ({ page }) => {
  return (
    <motion.div
      layout
      variants={animations}
      animate={page >= 1 ? "open" : "closed"}
      transition={{ type: "spring", stiffness: 100, duration: 1 }}
      className={`${styles.page} ${page >= 1 && styles.under} `}
    >
      <div className={styles.frontFace}>FRONT COVER</div>
      <div className={styles.backFace}>FIRST PAGE</div>
    </motion.div>
  );
};

export default EditorCardFrontPage;
