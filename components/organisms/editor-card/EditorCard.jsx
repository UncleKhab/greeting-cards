import React from "react";
import styles from "./EditorCard.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CardEditorPage from "../editor-card-page/CardEditorPage";

const scaleVariants = {
  front: { x: 0 },
  open: { x: "35%", scale: 0.7 },
  back: { x: "100%" },
};
const EditorCard = () => {
  const { page } = useSelector((state) => state.editor);
  return (
    <motion.div
      className={`${styles.card}`}
      variants={scaleVariants}
      animate={page === 0 ? "front" : page === 1 ? "open" : "back"}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <CardEditorPage />
      <CardEditorPage />
    </motion.div>
  );
};

export default EditorCard;
