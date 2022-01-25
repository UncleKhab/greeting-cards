import React from "react";
import styles from "./EditorCard.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import EditorCardBackPage from "../editor-card-pages/EditorCardBackPage";
import EditorCardFrontPage from "../editor-card-pages/EditorCardFrontPage";

const scaleVariants = {
  front: { x: 0 },
  open: { x: "35%", scale: 0.7 },
  back: { x: "100%" },
};
const EditorCard = () => {
  const { page } = useSelector((state) => state.editor);
  const animation =
    page === 0 ? "front" : page === 1 ? "open" : page === 2 ? "back" : "";
  console.log(animation);
  return (
    <div>
      <motion.div className={`${styles.card}`}>
        <EditorCardBackPage page={page} />
        <EditorCardFrontPage page={page} />
      </motion.div>
    </div>
  );
};

export default EditorCard;
