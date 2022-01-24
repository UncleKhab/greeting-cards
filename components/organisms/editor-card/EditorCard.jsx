import React from "react";
import styles from "./EditorCard.module.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CardEditorPage from "../editor-card-page/CardEditorPage";
import CardFrontCover from "../../molecules/card-front-cover/CardFrontCover";
import CardFirstPage from "../../molecules/card-first-page/CardFirstPage";
import CardSecondPage from "../../molecules/card-second-page/CardSecondPage";
import CardBackCover from "../../molecules/card-back-cover/CardBackCover";

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
    <motion.div
      className={`${styles.card}`}
      variants={scaleVariants}
      animate={animation}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <CardEditorPage front={<CardSecondPage />} back={<CardBackCover />} />
      <CardEditorPage front={<CardFrontCover />} back={<CardFirstPage />} />
    </motion.div>
  );
};

export default EditorCard;
